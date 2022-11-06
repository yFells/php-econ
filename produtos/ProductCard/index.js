import { html } from "../../scripts/ui/index.js";

export const ProductCard = ({ product, childrenUi }) => {
  return html` 
    <div class="product-card">
      <img src="${product.url}" alt="${product.nome}" />
      <div class="product-info">
        <h2>${product.nome}</h2>
        <p>${product.descricao}</p>
        <p>Valor: R$ ${product.valor}</p>
      </div>
      ${childrenUi ? childrenUi : ""}
      <div class="action-section">
        <button onclick="addToCart(${product.id})">Adicionar</button>
        <button onclick="removeFromCart(${product.id})">Remover</button>
      </div>
    </div>

    <style>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  min-height: 300px;
  max-width: 300px;
  border: 1px solid #000;
  margin: 10px;
  background: #fff;
}

.product-card img {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  object-fit: cover;
}

.product-card button {
  margin-top: 10px;
}

.product-card button:hover {
  background-color: #fff;
  color: #000;
}

.product-card button:active {
  background-color: #000;
  color: #fff;
}

.product-card button:focus {
  outline: none;
}
.product-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: start;
  align-items: flex-start;
}
.product-info h2 {
  margin: 10px;
  background: #fff;
}
.product-info p {
  margin: 10px;
  background: #fff;
}

.action-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: start;
  align-items: flex-start;
  padding: 15px 0;
  border-top: 1px solid #000;
}
.action-section button {
  margin: 10px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
}
.action-section button:hover {
  background-color: var(--primary-blue);
  color: #fff;
}
  </style>`;
};
