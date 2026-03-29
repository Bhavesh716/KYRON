import os
import uuid
from fastapi import FastAPI, Request, HTTPException, Depends , Body
from fastapi.responses import RedirectResponse
from authlib.integrations.starlette_client import OAuth
from starlette.middleware.sessions import SessionMiddleware
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

from database import SessionLocal, engine, Base
from models import User , CompanyData
from auth import create_token, hash_password, verify_password
from deps import get_current_user

load_dotenv()

app = FastAPI()

app.add_middleware(SessionMiddleware, secret_key="kyron-secret")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

oauth = OAuth()
oauth.register(
    name='google',
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"}
)

# 🔥 GOOGLE LOGIN
@app.get("/login/google")
async def login_google(request: Request):
    return await oauth.google.authorize_redirect(
        request,
        "http://localhost:8000/auth/callback",
        prompt="consent"   # 🔥 ADD THIS
    )

# 🔥 GOOGLE CALLBACK
@app.get("/auth/callback")
async def auth_callback(request: Request):
    token = await oauth.google.authorize_access_token(request)
    user_info = token.get("userinfo")

    db = SessionLocal()

    user = db.query(User).filter(User.email == user_info["email"]).first()

    if not user:
        user = User(
            id=str(uuid.uuid4()),
            email=user_info["email"],
            name=user_info.get("name", ""),
            pfp=user_info.get("picture", ""),
            password=None
        )
        db.add(user)
    else:
        # 🔥 ALWAYS UPDATE PFP + NAME
        user.pfp = user_info.get("picture", user.pfp)
        user.name = user_info.get("name", user.name)

    db.commit()

    jwt_token = create_token(user)
    db.close()

    return RedirectResponse(
        url=f"http://localhost:5173/dashboard?token={jwt_token}"
    )

# 🔥 REGISTER
@app.post("/register")
async def register(data: dict):
    db = SessionLocal()

    if db.query(User).filter(User.email == data["email"]).first():
        raise HTTPException(400, "User with same email already exists")

    user = User(
        id=str(uuid.uuid4()),
        email=data["email"],
        name=data["name"],
        password=hash_password(data["password"])
    )

    db.add(user)
    db.commit()
    db.close()

    return {"msg": "registered"}

# 🔥 LOGIN EMAIL
@app.post("/login")
async def login(data: dict):
    db = SessionLocal()

    user = db.query(User).filter(User.email == data["email"]).first()

    if not user:
        raise HTTPException(400, "User not found")

    if user.password is None:
        raise HTTPException(400, "Use Google login")

    if not verify_password(data["password"], user.password):
        raise HTTPException(400, "Wrong password")

    db.close()

    return {"token": create_token(user)}

# 🔥 PROTECTED ROUTE
@app.get("/me")
def get_me(user=Depends(get_current_user)):
    return user

@app.post("/w_company_data")
def save_onboarding(data: dict = Body(...), user=Depends(get_current_user)):
    db = SessionLocal()

    existing = db.query(CompanyData).filter(
        CompanyData.u_id == user["u_id"]
    ).first()

    if existing:
        db.close()
        raise HTTPException(400, "Already onboarded")

    company = CompanyData(
        id=str(uuid.uuid4()),
        u_id=user["u_id"],

        c_name=data.get("companyName"),
        c_bucket=data.get("bucket"),
        c_size=data.get("teamSize"),

        c_db=data.get("companyDB"),

        active_integrations=",".join(data.get("integrations", [])),

        ai=data.get("ai", "default"),
        ai_endpoint=data.get("apiUrl"),
        ai_model_preferred=data.get("model"),

        api_key=data.get("apiKey"),

        workspace=data.get("workspace"),
    )

    db.add(company)
    db.commit()
    db.close()

    return {"msg": "onboarding complete"}

@app.get("/onboarded")
def check_onboarding(user=Depends(get_current_user)):
    db = SessionLocal()

    company = db.query(CompanyData).filter(
        CompanyData.u_id == user["u_id"]
    ).first()

    db.close()

    return {"onboarded": bool(company)}