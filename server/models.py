from sqlalchemy import Column, String , ForeignKey
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)  # uuid
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=False)
    password = Column(String, nullable=True)   # NULL for Google users
    pfp = Column(String, nullable=True)

class CompanyData(Base):
    __tablename__ = "company_data"

    id = Column(String, primary_key=True)
    u_id = Column(String, ForeignKey("users.id"))
    c_name = Column(String)
    c_bucket = Column(String)
    c_size = Column(String)
    c_db = Column(String)
    active_integrations = Column(String)
    ai = Column(String, default="default")
    ai_endpoint = Column(String)
    ai_model_preferred = Column(String)
    api_key = Column(String)
    workspace = Column(String)