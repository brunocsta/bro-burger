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

let cart = [];


//abre o carrinho
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

menu.addEventListener("click", function (e) {
  let parentButton = e.target.closest(".add-to-cart-btn");

  if (parentButton) {
    const name = parentButton.getAttribute("data-name");
    const price = parseFloat(parentButton.getAttribute("data-price")).toFixed(
      2
    );

    addToCart(name, price);
  }
});

function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name); //item.name === name);
  // console.log();

  if (existingItem) {
    existingItem.quantity += 1;
    console.log(existingItem);
  } else {
    cart.push({
      name,
      price,
      quantity: 1,
    });
  }

  updateCartModal();
}

function updateCartModal() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.innerHTML = `
      <div>
        <div>
          <p>${item.name}</p>
          <p>${item.quantity}</p>
          <p>${item.price}</p>
        </div>
  
        <div>
          <button>
            Remover
          </button>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(cartItemElement);
  });
}