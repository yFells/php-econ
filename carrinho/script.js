
import { query } from "../scripts/network/index.js";
import { render } from "../scripts/ui/index.js";
import { cart } from "../scripts/localstorage/index.js";

function isEmpty(obj) {
  return (
    obj && 
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}
function intoArray(obj) {
  return Object.keys(obj).map((id) => obj[id])
}
async function onMount(){
  let cart = localStorage.getItem("carrinho") || {};
  if (typeof cart == "string") cart = JSON.parse(cart)
  if (isEmpty(cart)) {
    render("cart", `<h1>Carrinho vazio</h1>`);
    return;
  }
  console.log(cart);
  const { data, error } = await query(`./hidrateData.php`, {
    method: "POST",
    extraHeaders: {
      "Content-Type": "form-data",
    },
    body: JSON.stringify(cart),
  });
  const products = intoArray(data);
  console.log(intoArray(data), error);
  const ui = products
    .map((product) => {
      return `
      <div class="product">
        <img src="${product.url}" alt="${product.nome}" />
        <h2>${product.nome}</h2>
        <p>${product.descricao}</p>
        <p>R$ ${product.valor}</p> 
        <p>Quantidade: ${cart[product.id].qtd}</p>
        <p>Subtotal: R$ ${cart[product.id].qtd * product.valor}</p>
        <button onclick="removeFromCart(${product.id})">Remover</button>
      </div>
      `;
    })
    .join("");
  render("cart", ui)
}

window.addToCart = cart.addToCart
window.removeFromCart = cart.removeFromCart
window.onload = onMount