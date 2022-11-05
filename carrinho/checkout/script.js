import { getProducts } from "../script.js";
import { render, $ } from "../../scripts/ui/index.js";
import { query } from "../../scripts/network/queryIn.js";
import { cart } from "../../scripts/localstorage/index.js";
function renderTotal(total) {
  if (total === 0) render("total", "");
  else render("total", html`<h1>Total: R$ ${total}</h1>`);
}

async function onMount() {
  // verify is is logged in
  const { products } = await getProducts("../server/get-carrinho.php");
  const total = products.reduce(
    (acc, product) => acc + product.qtd * product.valor,
    0
  );

  renderTotal(total);
}

async function submitPayment(e) {
  e.preventDefault();
  const formData = {
    cardNumber: $("cardNumber").value,
    cardName: $("cardName").value,
    cardExpiry: $("cardExpiry").value,
    cardCVC: $("cardCVC").value,
  };
  // verify is is logged in
  const { data, error } = await query("./checkout.php", {
    method: "POST",
    body: JSON.stringify(formData),
    extraHeaders: {
      "Content-Type": "application/json",
      // TODO: add user id
      "User-id": "1",
    },
  });

  if (error) {
    return alert(error);
  }
  form.reset();
  render("main", html`<h1>Compra realizada com sucesso!</h1>`);
}
window.submitPayment = submitPayment;
window.onload = onMount;
