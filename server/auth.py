import jwt
import bcrypt
import uuid
from datetime import datetime, timedelta
from fastapi import HTTPException
import os

SECRET_KEY = os.getenv("SECRET_KEY_HASH")

def create_token(user):
    return jwt.encode({
        "u_id": user.id,
        "email": user.email,
        "name": user.name,
        "exp": datetime.utcnow() + timedelta(days=7)
    }, SECRET_KEY, algorithm="HS256")

def verify_token(token):
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
    except:
        raise HTTPException(401, "Invalid token")

def hash_password(password):
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

def verify_password(password, hashed):
    return bcrypt.checkpw(password.encode(), hashed.encode())