

import { query } from "../scripts/network/index.js";
import { render } from "../scripts/ui/index.js";
import { cart } from "../scripts/localstorage/index.js";



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
  const { data, error } = await query(`./queryProducts.php`);
  populateProducts(data);
}

window.addToCart = cart.addToCart
window.removeFromCart = cart.removeFromCart
window.onload = onMount