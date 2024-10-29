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
const dateSpan = document.querySelector("#date-span");

let cart = [];

//abre o carrinho
cartBtn.addEventListener("click", function () {
  cartModal.classList.add("flex");
  cartModal.classList.remove("hidden");
  updateCartModal();
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
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
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
    cartItemElement.classList.add(
      "flex",
      "justify-between",
      "mb-4",
      "flex-col"
    );

    cartItemElement.innerHTML = `
      <div class="flex items-center justify-between">
        <div>
          <p class="font-medium">${item.name}</p>
          <p>Qtd: ${item.quantity}</p>
          <p class="font-medium mt-2">${item.price}</p>
        </div>
  

        <button class="remove-btn" data-name="${item.name}">
          Remover
        </button>

      </div>
    `;

    total += item.price * item.quantity;
    cartItemsContainer.appendChild(cartItemElement);
  });

  cartTotal.textContent = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  cartCounter.innerHTML = cart.length;
}

cartItemsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    const name = e.target.getAttribute("data-name");
    removeItemCart(name);
  }
});

function removeItemCart(name) {
  const index = cart.findIndex((item) => item.name === name);

  if (index !== -1) {
    const item = cart[index];

    if (item.quantity > 1) {
      item.quantity -= 1;
      updateCartModal();
      return;
    }

    cart.splice(index, 1);
    updateCartModal();
  }
}

addressInput.addEventListener("input", function (e) {
  let inputValue = e.target.value;
  if (inputValue !== "") {
    addressInput.classList.remove("border-red-500");
    addressWarn.classList.add("hidden");
  }
});

checkoutBtn.addEventListener("click", function () {
  if (cart.length === 0) {
    addressWarn.innerHTML = "Impossível finalizar pedido vazio!";
    addressWarn.classList.remove("hidden");
    return;
  }

  if (!isOpen) {
    addressWarn.innerHTML =
      "RESTAURANTE FECHADO NO MOMENTO! Horário: Seg à Dom - 18:00 às 22:00";
    addressWarn.classList.remove("hidden");
    return;
  }

  if (addressInput.value === "") {
    addressWarn.classList.remove("hidden");
    addressInput.classList.add("border-red-500");
  }

  const cartItems = cart
    .map((item) => {
      return `
      ${item.name} Quantidade: ${item.quantity} Preço: R$${item.price} | `;
    })
    .join("");

  const message = encodeURIComponent(cartItems);
  const phone = "51994069404";

  window.open(
    `https://wa.me/${phone}?text= Boa noite! Gostaria de pedir: ${message} Endereço: ${addressInput.value}`,
    "_blank"
  );

  cart.length = [];
  updateCartModal();
});

function checkRestaurantOpen() {
  const date = new Date();
  const hour = date.getHours();
  //return hour < 22;
  return hour >= 18 && hour < 22;
}

const isOpen = checkRestaurantOpen();
if (isOpen) {
  dateSpan.classList.remove("bg-red-500");
  dateSpan.classList.add("bg-green-600");
} else {
  dateSpan.classList.add("bg-red-500");
  dateSpan.classList.remove("bg-green-600");
}