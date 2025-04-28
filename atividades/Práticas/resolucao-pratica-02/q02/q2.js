function calcularValor(evento) {
    evento.preventDefault();

    const valor15min = parseFloat(document.getElementById('inputValor').value);
    const tempo = parseInt(document.getElementById('inputTempo').value);
    
    const intervalos = Math.ceil(tempo / 15);
    const total = intervalos * valor15min;

    document.getElementById('resultado').innerHTML = `
        <p>Valor a pagar: R$ ${total.toFixed(2)}</p>
    `;
}