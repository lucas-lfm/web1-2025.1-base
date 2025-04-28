function calcularPromocao(evento) {
  evento.preventDefault();

  const medicamento = document.getElementById("inputMedicamento").value;
  const preco = parseFloat(document.getElementById("inputPreco").value);

  const total = preco * 2;
  const desconto = total - Math.floor(total); // Calculando os centavos do total
  const totalComDesconto = total - desconto;

  document.getElementById("resultado").innerHTML = `
        <h3>Promoção de ${medicamento}</h3>
        <p>Leve 2 por apenas R$ ${totalComDesconto.toFixed(2)}</p>
    `;
}
