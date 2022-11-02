
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
export async function getProducts(phpFile = './hidrateData.php' ) {
  let cart = localStorage.getItem("carrinho") || {};
  if (typeof cart == "string") cart = JSON.parse(cart)
  if (isEmpty(cart)) {
    return {
      products: [],
      cart
    };
  }
  const { data, error } = await query(phpFile, {
    method: "POST",
    extraHeaders: {
      "Content-Type": "form-data",
    },
    body: JSON.stringify(cart),
  });
  return {
    products: intoArray(data),
    cart,
  };
}
function renderProducts(products, cart) {
  if (products.length === 0) {
    render("cart", `<h1>Carrinho vazio</h1>`);
    return;
  }

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
    <button onclick="addToCart(${product.id})">Adicionar mais um</button>
    <button onclick="removeFromCart(${product.id})">Remover</button>
  </div>`;
    })
    .join("");
  render("cart", ui);
}
function renderTotal(total) {
  if (total === 0) render("total", "");
  else render(
    "total",
    `
  <h2>Total: R$ ${total}<h2/>
  <button>
    <a href="./checkout">Finalizar compra</a>
  </button>

  `
  );
}
async function onMount(){
  // verify if is logged
  const { products, cart } = await getProducts("./hidrateData.php");
  const total = products.reduce(
    (acc, product) => acc + cart[product.id].qtd * product.valor,
    0
  );
  renderProducts(products, cart);
  renderTotal(total);
}


window.addToCart = function(id) {
  cart.addToCart(id);
  onMount();
} 

window.removeFromCart = function(id) {
  cart.removeFromCart(id);
  onMount();
}

window.onload = onMount