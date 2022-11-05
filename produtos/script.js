

import { query } from "../scripts/network/index.js";
import { render, html } from "../scripts/ui/index.js";
import { cart } from "../scripts/localstorage/index.js";



/**
 * 
 * @param {string} id 
 * @param {string} text 
 * @returns 
 */
const addToCartButton = (id, text) => {
  return html` <button onclick="addToCart(${id})">${text}</button> `;
}

/**
 * 
 * @param {string} id 
 * @param {string} text 
 * @returns 
 */
 const removeFromCartButton = (id, text) => {
  return html` <button onclick="removeFromCart(${id})">${text}</button> `;
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

      return html`
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

  render(
    "products",
    html`
      <ul>
        ${ui}
      </ul>
    `
  );
}

async function onMount(){
  const { data, error } = await query(`./queryProducts.php`);
  populateProducts(data);
}

window.addToCart = cart.addToCart
window.removeFromCart = cart.removeFromCart
window.onload = onMount