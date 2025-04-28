function exibirPromocao(evento) {
    evento.preventDefault();

    const produto = document.getElementById('inputProduto').value;
    const preco = parseFloat(document.getElementById('inputPreco').value);
    
    const precoDesconto = preco * 0.5;
    const total = (2 * preco) + precoDesconto;

    document.getElementById('resultado').innerHTML = `
        <h3>Promoção: Leve 3 ${produto}</h3>
        <p>2 por R$ ${preco.toFixed(2)} cada + 1 por R$ ${precoDesconto.toFixed(2)}</p>
        <p>Total: R$ ${total.toFixed(2)}</p>
    `;
}

const formulario = document.getElementById("formSuperMercado");

formulario.addEventListener("submit", exibirPromocao);