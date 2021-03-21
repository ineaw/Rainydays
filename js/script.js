const emailInput = document.querySelector(".text-newsletter");
const newsletterButton = document.querySelector("button.btn-newsletter");
const emailError = document.querySelector(".email-error");

function emailValidation() {
  if (validateEmail(emailInput.value)) {
    newsletterButton.innerHTML = "Signed up!";
    emailError.innerHTML = "";
  } else {
    emailError.innerHTML = "<p>Please enter a valid e-mail address</p>";
  }
}

newsletterButton.addEventListener("click", emailValidation);
