// const addToCartButton = document.querySelector(".add");

// forEach(function (addToCartButton) {
//   addToCartButton.addEventListener("click", function () {
//     addToCartButton.classList.add(".add");
//     setTimeout(function () {
//       addToCartButton.classList.remove(".add");
//     }, 2000);
//   });
// });

// document.querySelector(".add").onclick = function changeContent() {
//   document.querySelector(".add").textContent = "Added to cart";
//   document.querySelector(".add").style = "background-color: grey";
//   document.querySelector(".fa-shopping-bag").textContent = " 1";
// };

// function addToCart() {
//   addToCartButton.addEventListener("click", function () {
//      addToCartButton.classList.add("added");  }
// }

// addToCartButton.onclick = addToCart;

// addToCartButton.innerHTML = "Add to cart";

// let buttons = document.getElementsByTagName(".add");

// const cart = [];

// for(var i=0; i<buttons.length; i++) {
//   let button = buttons[i];
//   console.log(button);
//   button.addEventListener('click', function(event){
//     console.clear();
//     console.log(event.target);
//     console.log(event.target.dataset.productSku);
//     cart.push( event.target.dataset.productSku );
//     console.log(cart)
//   });
// }
// const button = document.querySelector("button.add-me");

// const buttonShop = document.querySelector("button.shop");

// button.addEventListener("click", function () {
//   const newItem = document.createElement("shop");
//   /* newItem.innerHTML = input.value;*/
//   button.appendChild(newItem);
//   buttonShop.innerHTML = `${button.childElementCount}`;
//   button.value = "1";
// });

// const openCart = document.querySelectorAll("[data-open]");
// const closeCart = document.querySelectorAll("[data-close]");
// const isVisible = "is-visible";

// for (const el of openCart) {
//   el.addEventListener("click", function () {
//     const modalId = this.dataset.open;
//     document.getElementById(modalId).classList.add(isVisible);
//   });
// }

// for (const el of closeCart) {
//   el.addEventListener("click", function () {
//     this.parentElement.parentElement.parentElement.classList.remove(isVisible);
//   });
// }

// document.addEventListener("click", (e) => {
//   if (e.target === document.querySelector(".cart-modal.is-visible")) {
//     document.querySelector(".cart-modal.is-visible").classList.remove(isVisible);
//   }
// });

// document.addEventListener("keyup", (e) => {
//   if (e.key === "Escape" && document.querySelector(".cart-modal.is-visible")) {
//     document.querySelector(".cart-modal.is-visible").classList.remove(isVisible);
//   }
// });

// /* Add Cart Modal*/

// const AddOpenCart = document.querySelectorAll("[data-open]");
// const AddCloseCart = document.querySelectorAll("[data-close");
// const AddIsVisible = "cart-is-visible";

// for (const el of AddOpenCart) {
//   el.addEventListener("click", function () {
//     const AddModalId = this.dataset.open;
//     document.getElementById(AddModalId).classList.add(AddIsVisible);
//   });
// }

// for (const el of AddCloseCart) {
//   el.addEventListener("click", function () {
//     this.parentElement.parentElement.parentElement.classList.remove(AddIsVisible);
//   });
// }

// document.addEventListener("click", (e) => {
//   if (e.target === document.querySelector(".add-cart-modal.cart-is-visible")) {
//     document.querySelector(".add-cart-modal.cart-is-visible").classList.remove(AddIsVisible);
//   }
// });

// document.addEventListener("keyup", (e) => {
//   if (e.key === "Escape" && document.querySelector(".add-cart-modal.cart-is-visible")) {
//     document.querySelector(".add-cart-modal.cart-is-visible").classList.remove(AddIsVisible);
//   }
// });

/* add to cart*/

const button = document.querySelector("button.add-me");

const buttonShop = document.querySelector("button.shop");

button.addEventListener("click", function () {
  const newItem = document.createElement("shop");
  /* newItem.innerHTML = input.value;*/
  button.appendChild(newItem);
  buttonShop.innerHTML = `${button.childElementCount}`;
  button.value = "1";
});
