
import {
  query,
  render,
} from '../scripts/index.js'



/**
 * 
 * @param {object[]} products 
 * @param {number} products.id
 * @param {string} products.name
 * @param {string} products.description
 * @param {number} products.price
 * @param {string} products.image
 * 
 */
function populateProducts(products) {
  const ui = products
    .map((product) => {
      return `
    <li>
      Produto: ${product.name}
      <br>
      Preço: ${product.price}
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
