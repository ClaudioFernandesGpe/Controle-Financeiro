from app.database.fake_db import transacoes
from app.model.transacao_model import Transacao

def listar_transacoes():
    return transacoes

def criar_transacao(transacao: Transacao):
    transacoes.append(transacao.model_dump())
    return transacao

def calcular_saldo():
    saldo = 0
    for transacao in transacoes:
        if transacao["tipo"] == "entrada":
            saldo += transacao["valor"]
        else:
            saldo -= transacao["valor"]
    return {"saldo": saldo}
        
