const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const message = document.querySelector("#message");

const fullNameError = document.querySelector("#fullNameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");

function validateForm(event) {
  var isValidated = true;
  event.preventDefault();

  if (validateLength(fullName.value, 1) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
    isValidated = false;
  }
  // if (validateLength(subject.value, 10) === true) {
  //   subjectError.style.display = "none";
  // } else {
  //   subjectError.style.display = "block";
  //   isValidated = false;
  // }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    isValidated = false;
  }
  if (validateLength(subject.value, 25) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    isValidated = false;
  }
  if (isValidated) {
    message.innerHTML = `<div class="success-message">Your message has been sent</div>`;
    form.reset();
  }
}

function validateEmail(email) {
  const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

contactForm.addEventListener("submit", validateForm);

// let openCart = document.querySelectorAll("[data-open]");
// let closeCart = document.querySelectorAll("[data-close]");
// let isVisible = "is-visible";

// for (let el of openCart) {
//   el.addEventListener("click", function () {
//     let modalId = this.dataset.open;
//     document.getElementById(modalId).classList.add(isVisible);
//   });
// }

// for (let el of closeCart) {
//   el.addEventListener("click", function () {
//     this.parentElement.parentElement.parentElement.classList.remove(isVisible);
//   });
// }

// /* open modal*/

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
