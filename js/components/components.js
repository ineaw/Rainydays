/* Cart Content Modal*/

let openCart = document.querySelectorAll("[data-open]");
let closeCart = document.querySelectorAll("[data-close]");
let isVisible = "is-visible";

for (let el of openCart) {
  el.addEventListener("click", function () {
    let modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (let el of closeCart) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

/* open modal*/

document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".cart-modal.is-visible")) {
    document.querySelector(".cart-modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && document.querySelector(".cart-modal.is-visible")) {
    document.querySelector(".cart-modal.is-visible").classList.remove(isVisible);
  }
});

/* Add Cart Modal*/

let AddOpenCart = document.querySelectorAll("[data-open]");
let AddCloseCart = document.querySelectorAll("[data-close");
let AddIsVisible = "cart-is-visible";

for (let el of AddOpenCart) {
  el.addEventListener("click", function () {
    let AddModalId = this.dataset.open;
    document.getElementById(AddModalId).classList.add(AddIsVisible);
  });
}

for (let el of AddCloseCart) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(AddIsVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".add-cart-modal.cart-is-visible")) {
    document.querySelector(".add-cart-modal.cart-is-visible").classList.remove(AddIsVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && document.querySelector(".add-cart-modal.cart-is-visible")) {
    document.querySelector(".add-cart-modal.cart-is-visible").classList.remove(AddIsVisible);
  }
});

/* Add to Favourites*/
