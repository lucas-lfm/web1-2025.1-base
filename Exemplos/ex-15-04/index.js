// Seleciona o elemento do formulário com id "formTaxa" e o parágrafo de resultado
let formTaxa = document.getElementById("formTaxa");
let paragResultado = document.getElementById("resultado");

// Adiciona um listener para o evento de submit do formulário
formTaxa.addEventListener("submit", calcularTaxa);

// Função que será executada quando o formulário for enviado
function calcularTaxa(evento) {
    // Obtém e converte o valor do campo "valorJantar" para número
    let valor = Number(formTaxa.valorJantar.value);
    
    // Calcula 10% do valor do jantar como taxa do garçom
    let taxaGarcom = valor * 0.1;
    
    // Exibe o valor da taxa no console para debug
    console.log(taxaGarcom);

    // Atualiza o parágrafo de resultado com o valor formatado em duas casas decimais - toFixed(2)
    paragResultado.innerText = `A taxa do Garçom é R$ ${taxaGarcom.toFixed(2)}`;

    // Previne o comportamento padrão de recarregar a página
    evento.preventDefault();
}