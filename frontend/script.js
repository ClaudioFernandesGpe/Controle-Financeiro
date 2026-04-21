const API = 'http://localhost:8000/financeiro';

let transacoes = [];

async function carregar_dados() {
    const res = await fetch('http://localhost:8000/financeiro/transacoes');
    transacoes = await res.json();

    renderizar();
}

function renderizar() {
    const lista = document.getElementById('lista_transacoes');

    lista.innerHTML = "";

    let entradas = 0;
    let saidas = 0;

    transacoes.forEach(t => {
        const li = document.createElement('li');

        li.classList.add(t.tipo);

        li.innerHTML = `
            <span>${t.descricao}</span>
            <strong>R$ ${t.valor}</strong>
        `;

        lista.appendChild(li);

        if (t.tipo === "entrada") entradas += t.valor
        else saidas += t.valor
    });

    document.getElementById('entradas').innerText = "R$ " + entradas;
    document.getElementById('saidas').innerText = "R$ " + saidas;
    document.getElementById('saldo').innerText = "R$ " + (entradas - saidas);

}

async function criarTransacao() {
    const descricao = document.getElementById('descricao').value;
    const valor = Number(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;
    const categoria = document.getElementById('categoria').value;

    if (!descricao || !valor) {
        alert('Preencha todos os campos!');
        return;
    }

    const transacao = {
        id: Date.now(),
        descricao: descricao,
        valor: valor,
        tipo: tipo,
        categoria: categoria
    }

    await fetch('http://localhost:8000/financeiro/transacoes', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(transacao)
    })

    carregar_dados()
}

carregar_dados()