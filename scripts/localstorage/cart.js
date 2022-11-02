
function addToCart(id) {
  /**
   * @type {*[]}
   */
  let cart = localStorage.getItem("carrinho") || {};
  if (typeof cart == "string") cart = JSON.parse(cart);
  
  cart[id] = {
    qtd: cart[id]?.qtd + 1 || 1,
  }
  localStorage.setItem("carrinho", JSON.stringify(cart));
}

function removeFromCart(id) {
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
}

function clear() {
  localStorage.setItem("carrinho", JSON.stringify({}));
}
export { addToCart, removeFromCart, clear };