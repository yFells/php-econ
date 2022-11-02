
import {
  query,
  render,
} from '../scripts/index.js'

function addToCart(id) {
  /**
   * @type {*[]}
   */
  let cart = localStorage.getItem("carrinho") || {};
  if (typeof cart == "string") cart = JSON.parse(cart);
  
  cart[id] = {
    qtd: cart[id]?.qtd + 1 || 1,
  }
  localStorage.setItem("carrinho", JSON.stringify(cart));
}
window.addToCart = addToCart

function removeFromCart(id) {
  /**
   * @type {*{}}
   */
  const cart = JSON.parse(localStorage.getItem("carrinho")) || {};
  if (cart[id]?.qtd === undefined ) {
    return;
  }

  if (cart[id].qtd === 1) {
    delete cart[id];
    localStorage.setItem("carrinho", JSON.stringify(cart));
    return;
  }

  cart[id] = {
    qtd: cart[id]?.qtd - 1 ,
  };

  localStorage.setItem("carrinho", JSON.stringify(cart));
}
window.removeFromCart = removeFromCart

/**
 * 
 * @param {string} id 
 * @param {string} text 
 * @returns 
 */
const addToCartButton = (id, text) => {
  return `
  <button onclick="addToCart(${id})">
    ${text}
  </button>
  `;
}

/**
 * 
 * @param {string} id 
 * @param {string} text 
 * @returns 
 */
 const removeFromCartButton = (id, text) => {
  return `
  <button onclick="removeFromCart(${id})">
    ${text}
  </button>
  `;
}
/**
 * 
 * @param {object[]} products 
 * @param {number} products.id
 * @param {string} products.nome
 * @param {string} products.descricao
 * @param {number} products.valor
 * @param {string} products.url
 * @param {string} products.marca
 * @param {string} products.tipo
 * 
 */
function populateProducts(products) {
  const ui = products
    .map((product) => {
      return `
    <li>
      Produto: ${product.nome}
      <br>
      Preço: ${product.valor}
      <br>
      id: ${product.id}
      <br>
      ${addToCartButton(product.id, "Adicionar ao carrinho")}
      ${removeFromCartButton(product.id, "Remover do carrinho")}
    </li>
    `;
    })
    .join("");

  render("products", `
  <ul>
    ${ui}
  </ul>
  `);
}

async function onMount(){
  const { data, error } = await query("./queryProducts.php");
  populateProducts(data);
}


window.onload = onMount