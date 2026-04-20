from fastapi import FastAPI
from app.routes.financeiro_routes import router

app = FastAPI(title="API Controle Financeiro")

app.include_router(router)

@app.get("/")
def home():
    return {"mensagem": "App de Controle Financeiro com FastAPI"}





