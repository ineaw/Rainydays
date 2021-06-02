const form = document.querySelector("#checkoutForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const message = document.querySelector("#message");
const button = document.querySelector("button");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");

function validateForm(event) {
  var isValidated = true;
  event.preventDefault();

  if (validateLength(firstName.value, 2) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
    isValidated = false;
  }
  if (validateLength(address.value, 10) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
    isValidated = false;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    isValidated = false;
  }
  if (validateLength(lastName.value, 2) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
    isValidated = false;
  }
  /*Remeber to change this part to display payment details*/
  if (isValidated) {
    // message.innerHTML = `<button><a href="../checkoutpay.html">Payment details</button>`;
    // button.style = `display: none`;
    location = "../checkoutpay.html";
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

checkoutForm.addEventListener("submit", validateForm);
