from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.financeiro_routes import router

app = FastAPI(title="API Controle Financeiro")

# LIBERAR O CORS para testes e desenvolvimento
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(router)

@app.get("/")
def home():
    return {"mensagem": "App de Controle Financeiro com FastAPI"}





