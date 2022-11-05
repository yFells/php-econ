import { query } from "../scripts/network/index.js";
import { render, html } from "../scripts/ui/index.js";

/**
 *
 * @param {string} id
 * @param {string} text
 * @returns
 */
const addToCartButton = (id, text) => {
  return html`<button onclick="addToCart(${id})">${text}</button> `;
};

/**
 *
 * @param {string} id
 * @param {string} text
 * @returns
 */
const removeFromCartButton = (id, text) => {
  return html`<button onclick="removeFromCart(${id})">${text}</button> `;
};
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
          <br />
          Preço: ${product.valor}
          <br />
          id: ${product.id}
          <br />
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

async function onMount() {
  const { data, error } = await query(`./queryProducts.php`);
  populateProducts(data);
}

window.addToCart = async function(id) {
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user).id;
  const { data, error } = await query("../carrinho/server/add-carrinho.php", {
    body: JSON.stringify({ id, userId }),
    method: "POST",
  });
  onMount();
}
window.removeFromCart = async function(id) {
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user).id;
  const { data, error } = await query("../carrinho/server/remove-carrinho.php", {
    body: JSON.stringify({ id, userId }),
    method: "POST",
  });
  onMount();
}

window.onload = onMount;
