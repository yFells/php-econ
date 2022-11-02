
import {
  query,
  render,
} from '../scripts/index.js'



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
  console.log(data);
  populateProducts(data);
}
window.onload = onMount
