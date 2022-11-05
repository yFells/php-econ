import { query } from "../scripts/network/index.js";
import { render, html } from "../scripts/ui/index.js";
import { cart } from "../scripts/localstorage/index.js";

function isEmpty(obj) {
  return (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}
function intoArray(obj) {
  return Object.keys(obj).map((id) => obj[id]);
}
export async function getProducts(phpFile = "./server/get-carrinho.php") {
  const { data, error } = await query(phpFile, {
    method: "POST",
    extraHeaders: {
      "Content-Type": "form-data",
    },
    body: JSON.stringify(cart),
  });
  return {
    products: intoArray(data),
  };
}
function renderProducts(products) {
  if (products.length === 0) {
    render("cart", html`<h1>Carrinho vazio</h1>`);
    return;
  }

  const ui = products
    .map((product) => {
      return html` <div class="product">
        <img src="${product.url}" alt="${product.nome}" />
        <h2>${product.nome}</h2>
        <p>${product.descricao}</p>
        <p>R$ ${product.valor}</p>
        <p>Quantidade: ${product.qtd}</p>
        <p>Subtotal: R$ ${product.qtd * product.valor}</p>
        <button onclick="addToCart(${product.id})">Adicionar mais um</button>
        <button onclick="removeFromCart(${product.id})">Remover</button>
      </div>`;
    })
    .join("");
  render("cart", ui);
}
function renderTotal(total) {
  if (total === 0) render("total", "");
  else
    render(
      "total",
      html`
        <h2>
          Total: R$ ${total}
          <h2 />
          <button>
            <a href="./checkout">Finalizar compra</a>
          </button>
        </h2>
      `
    );
}
async function onMount() {
  // verify if is logged
  const { products } = await getProducts("./server/get-carrinho.php");
  const total = products.reduce(
    (acc, product) => acc + product.qtd * product.valor,
    0
  );
  renderProducts(products);
  renderTotal(total);
}

window.addToCart = async function (id) {
  // cart.addToCart(id); // local
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user).id;
  const { data, error } = await query("./server/add-carrinho.php", {
    body: JSON.stringify({ id, userId }),
    method: "POST",
  });
  onMount();
};

window.removeFromCart = async function (id) {
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user).id;
  const { data, error } = await query("./server/remove-carrinho.php", {
    body: JSON.stringify({ id, userId }),
    method: "POST",
  });
  onMount();
};

window.onload = onMount;
