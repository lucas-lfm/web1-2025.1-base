const produtos = [
  {
    id: 1,
    nome: "Fone de Ouvido Bluetooth",
    categoria: "Eletrônicos",
    preco: 149.90,
    avaliacao: 4.5,
    descricao: "Fone sem fio com cancelamento de ruído e bateria de longa duração."
  },
  {
    id: 2,
    nome: "Smartphone X10",
    categoria: "Eletrônicos",
    preco: 1999.99,
    avaliacao: 4.7,
    descricao: "Smartphone com tela AMOLED de 6.5'' e câmera tripla de 64MP."
  },
  {
    id: 3,
    nome: "Cafeteira Elétrica",
    categoria: "Eletrodomésticos",
    preco: 239.00,
    avaliacao: 4.3,
    descricao: "Cafeteira com timer programável e jarra de vidro de 1,2L."
  },
  {
    id: 4,
    nome: "Notebook Ultra 15",
    categoria: "Informática",
    preco: 3499.90,
    avaliacao: 4.6,
    descricao: "Notebook com Intel i7, 16GB RAM e SSD de 512GB."
  },
  {
    id: 5,
    nome: "Teclado Mecânico RGB",
    categoria: "Informática",
    preco: 299.90,
    avaliacao: 4.8,
    descricao: "Teclado gamer com iluminação RGB e switches vermelhos."
  },
  {
    id: 6,
    nome: "Liquidificador Turbo",
    categoria: "Eletrodomésticos",
    preco: 189.00,
    avaliacao: 4.1,
    descricao: "Liquidificador potente com 12 velocidades e copo de 2L."
  },
  {
    id: 7,
    nome: "Tênis Corrida Max",
    categoria: "Moda",
    preco: 279.90,
    avaliacao: 4.4,
    descricao: "Tênis leve e confortável para corrida e caminhada."
  },
  {
    id: 8,
    nome: "Relógio Inteligente FitWatch",
    categoria: "Acessórios",
    preco: 349.99,
    avaliacao: 4.5,
    descricao: "Smartwatch com monitoramento de batimentos e passos."
  },
  {
    id: 9,
    nome: "Monitor 24'' Full HD",
    categoria: "Informática",
    preco: 899.00,
    avaliacao: 4.6,
    descricao: "Monitor com painel IPS, resolução Full HD e 75Hz."
  },
  {
    id: 10,
    nome: "Câmera de Segurança Wi-Fi",
    categoria: "Segurança",
    preco: 159.00,
    avaliacao: 4.2,
    descricao: "Câmera com visão noturna, detecção de movimento e acesso remoto."
  },
  {
    id: 11,
    nome: "Aspirador de Pó Vertical",
    categoria: "Eletrodomésticos",
    preco: 349.90,
    avaliacao: 4.4,
    descricao: "Aspirador 2 em 1 com filtro HEPA e alta potência de sucção."
  },
  {
    id: 12,
    nome: "Jaqueta Corta-Vento",
    categoria: "Moda",
    preco: 199.90,
    avaliacao: 4.3,
    descricao: "Jaqueta impermeável ideal para dias de chuva e vento."
  },
  {
    id: 13,
    nome: "Mochila Executiva",
    categoria: "Acessórios",
    preco: 149.90,
    avaliacao: 4.7,
    descricao: "Mochila resistente com compartimento para notebook de até 17''."
  },
  {
    id: 14,
    nome: "Mouse Gamer Óptico",
    categoria: "Informática",
    preco: 129.90,
    avaliacao: 4.6,
    descricao: "Mouse com ajuste de DPI e iluminação LED personalizável."
  },
  {
    id: 15,
    nome: "Panela de Pressão Elétrica",
    categoria: "Eletrodomésticos",
    preco: 429.90,
    avaliacao: 4.5,
    descricao: "Panela elétrica com 6L de capacidade e 14 funções programadas."
  },
  {
    id: 16,
    nome: "Cadeira Gamer Reclinável",
    categoria: "Móveis",
    preco: 1249.00,
    avaliacao: 4.8,
    descricao: "Cadeira ergonômica com apoio para os pés e ajuste de inclinação."
  },
  {
    id: 17,
    nome: "Tablet 10'' Android",
    categoria: "Eletrônicos",
    preco: 799.00,
    avaliacao: 4.2,
    descricao: "Tablet com 64GB de armazenamento e suporte a caneta digital."
  },
  {
    id: 18,
    nome: "Camiseta Básica Algodão",
    categoria: "Moda",
    preco: 49.90,
    avaliacao: 4.1,
    descricao: "Camiseta 100% algodão com modelagem confortável."
  },
  {
    id: 19,
    nome: "Echo Smart Speaker",
    categoria: "Eletrônicos",
    preco: 449.00,
    avaliacao: 4.7,
    descricao: "Caixa de som inteligente com assistente de voz integrada."
  },
  {
    id: 20,
    nome: "HD Externo 2TB",
    categoria: "Informática",
    preco: 529.00,
    avaliacao: 4.6,
    descricao: "HD portátil com conexão USB 3.0 e alta velocidade de transferência."
  }
];

// O método map() retorna um novo array com base no array original
// Ele preserva a mesma quantidade de elementos do array original
const produtosComDesconto = produtos.map( (produto) => ({ nome: produto.nome, preco: produto.preco * 0.9 }) );

console.log(produtosComDesconto);

window.addEventListener("load", renderizarProdutos);

function renderizarProdutos() {
    const root = document.getElementById("root");

    let listaProdutos = "";

    produtos.forEach( (produto) => listaProdutos += `<tr>
        <th scope="row">${produto.id}</th>
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.preco}</td>
        <td>${produto.avaliacao}</td>
        <td>${produto.descricao}</td>
    </tr>` );

    const tabelaProdutos = document.getElementById("tabelaProdutos");

    tabelaProdutos.innerHTML = listaProdutos;

    //root.innerHTML = listaProdutos;
}