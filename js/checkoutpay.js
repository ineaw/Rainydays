const form = document.querySelector("#checkoutForm");
const cardName = document.querySelector("#cardName");
const cardNumber = document.querySelector("#cardNumber");
const exp = document.querySelector("#exp");
const button = document.querySelector("button");

const cardNameError = document.querySelector("#cardNameError");
const cardNumberError = document.querySelector("#cardNumberError");
const expError = document.querySelector("#expError");

function validateForm(event) {
  var isValidated = true;
  event.preventDefault();

  if (validateLength(cardName.value, 4) === true) {
    cardNameError.style.display = "none";
  } else {
    cardNameError.style.display = "block";
    isValidated = false;
  }
  if (validateCard(cardNumber.value) === true) {
    cardNumber.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
    isValidated = false;
  }
  if (validateLength(exp.value, 2) === true) {
    expError.style.display = "none";
  } else {
    expError.style.display = "block";
    isValidated = false;
  }
  /*Remeber to change this part to display payment details*/
  if (isValidated) {
    location = "../checkoutsuccess.html";
  }
}

function validateLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateCard(cardNumber) {
  const regEx = /^\d+$/;
  const patternMatches = regEx.test(cardNumber);
  return patternMatches;
}

checkoutForm.addEventListener("submit", validateForm);

/* open modal*/

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
