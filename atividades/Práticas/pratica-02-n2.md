# Roteiro de Prática 02: Catálogo de Produtos em React

**Objetivo:**
    - implementar um grid de cards de produto (imagem + preço) com um botão Carregar Mais, exatamente como no mockup abaixo, usando React.js.

![alt text](./imgs/9599fbaa-2b2a-45ce-89a5-55f9a3fe65d1.png)

---

## 1. Criação do projeto

```bash
npm create vite@latest infocom-react
cd infocom-react
npm install
npm run dev   # hot-reload em http://localhost:5173
```

- Limpe o _boilerplate_:
    - Apague o conteúdo do `App.css` e do `ìndex.css`
    - Deixe `App.jsx` retornando apenas `<h1>Catálogo de Produtos</h1>` para confirmar que tudo funciona.
    - Remova os imports não usados em `App.jsx`.

---

## 2. Escrever o CSS básico (styles.css)

```css
/* corpo e tipografia */
body {
  margin: 0;
  font-family: sans-serif;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  padding: 2rem;
}

/* container principal alinhado */
main {
  width: 100%;
  max-width: 1200px;
}

/* grid de cards */
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

/* estilo do card */
.card {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* imagem fixa e central */
.card img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

/* título e preço */
.card h3 {
  font-size: 1rem;
  margin: 0.5rem 0;
  text-align: center;
}
.card .price {
  color: #27ae60;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* botão Carregar Mais */
#load-more {
  display: block;
  margin: 2rem auto;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background: #3498db;
  color: white;
  cursor: pointer;
}
#load-more:disabled {
  background: #aaa;
  cursor: default;
}
```

---

## 3. Implementar a lógica em JavaScript (app.js)

```js
// 1) seleciona container e botão
const container = document.getElementById('product-container');
const loadMoreBtn = document.getElementById('load-more');

// 2) estado de paginação
let products = [];
let currentIndex = 0;
const itemsPerPage = 8;

// 3) busca todos os produtos ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      products = data;
      renderItems();
    })
    .catch(err => console.error('Erro ao carregar produtos:', err));
});

// 4) função para renderizar um lote de cards
function renderItems() {
  // fatia o próximo lote
  const slice = products.slice(currentIndex, currentIndex + itemsPerPage);

  slice.forEach(prod => {
    // cria elementos do card
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = prod.image;
    img.alt = prod.title;

    const title = document.createElement('h3');
    title.textContent = prod.title;

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = `R$ ${prod.price.toFixed(2).replace('.', ',')}`;

    // monta card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);

    container.appendChild(card);
  });

  // avança índice
  currentIndex += itemsPerPage;

  // se não houver mais itens, desabilita o botão
  if (currentIndex >= products.length) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = 'Fim dos produtos';
  }
}

// 5) evento do botão Carregar Mais
loadMoreBtn.addEventListener('click', renderItems);
```

---

## 4. Testar e ajustar

1. Abra o `index.html` num navegador (você pode usar Live Server no VSCode).
2. Verifique se aparecem 8 cards e se, a cada clique em “Carregar Mais”, surgem mais.
3. Quando acabar, o botão ficará desativado.