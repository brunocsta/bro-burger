const menu = document.querySelector("#menu");
const cartModal = document.querySelector("#cart-modal");
const cartBtn = document.querySelector("#cart-btn");
const cartItemsContainer = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const checkoutBtn = document.querySelector("#checkout-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");
const cartCounter = document.querySelector("#cart-count");
const addressInput = document.querySelector("#address");
const addressWarn = document.querySelector("#address-warn");

cartBtn.addEventListener("click", function () {
  cartModal.classList.add("flex");
  cartModal.classList.remove("hidden");
});

cartModal.addEventListener("click", function (e) {
  if (e.target === cartModal) {
    cartModal.classList.remove("flex");
    cartModal.classList.add("hidden");
  }
});

closeModalBtn.addEventListener("click", function () {
  cartModal.classList.add("hidden");
  cartModal.classList.remove("flex");
});
