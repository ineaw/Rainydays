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

/* Add to Favourites*/

// const favorite = document.querySelector(".heart");
// const active = document.querySelector(".active");

// favorite.className = ".active";

// favorite.addEventListener("click", () => {
//  if (favorite.classList.contains())
// });

// favorite.onclick = function () {
//   favorite.classList.toggle(".active");
// };
