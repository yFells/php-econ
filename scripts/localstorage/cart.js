import { query } from "../network";

function addToCart(id) {
  // verify if is logged
  /**
   * @type {*[]}
   */
  let cart = localStorage.getItem("carrinho") || {};
  if (typeof cart == "string") cart = JSON.parse(cart);
  
  cart[id] = {
    qtd: cart[id]?.qtd + 1 || 1,
  }
  localStorage.setItem("carrinho", JSON.stringify(cart));
  // call db to add to cart
}

function removeFromCart(id) {
    // verify if is logged
  /**
   * @type {*{}}
   */
  const cart = JSON.parse(localStorage.getItem("carrinho")) || {};
  if (cart[id]?.qtd === undefined) {
    return;
  }

  if (cart[id].qtd === 1) {
    delete cart[id];
    localStorage.setItem("carrinho", JSON.stringify(cart));
    return;
  }

  cart[id] = {
    qtd: cart[id]?.qtd - 1,
  };

  localStorage.setItem("carrinho", JSON.stringify(cart));
    // call db to revemove from cart
}

function clear() {
  localStorage.setItem("carrinho", JSON.stringify({}));
      // call db to clear from cart
}
export { addToCart, removeFromCart, clear };