import { query } from "../scripts/network/index.js";
import { render, html } from "../scripts/ui/index.js";
import { ProductCard } from "./ProductCard/index.js";

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
  const ui = products.reduce((acc, product) => {
    return acc + ProductCard({ product });;
  }, "");

  render("products", ui);
}

async function onMount() {
  const { data, error } = await query(`./queryProducts.php`);
  populateProducts(data);
}

window.addToCart = async function (id) {
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user).id;
  const { data, error } = await query("../carrinho/server/add-carrinho.php", {
    body: JSON.stringify({ id, userId }),
    method: "POST",
  });
  onMount();
};
window.removeFromCart = async function (id) {
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user).id;
  const { data, error } = await query(
    "../carrinho/server/remove-carrinho.php",
    {
      body: JSON.stringify({ id, userId }),
      method: "POST",
    }
  );
  onMount();
};

window.onload = onMount;
