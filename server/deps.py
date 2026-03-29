from fastapi import Header, HTTPException
from auth import verify_token

def get_current_user(authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(401, "No token")

    token = authorization.split(" ")[1]
    return verify_token(token)