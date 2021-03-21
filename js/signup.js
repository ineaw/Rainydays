const emailInput = document.querySelector("#signup-email");
const signupButton = document.querySelector(".sign");
const emailError = document.querySelector(".email-error");

function emailValidation() {
  if (validateEmail(emailInput.value)) {
    signupButton.innerHTML = "Signed up!";
    emailError.innerHTML = "";
    isValidated = true;
  } else {
    event.preventDefault();
    emailError.innerHTML = "<p>Please enter valid e-mail address</p>";
    isValidated = false;
  }
}

signupButton.addEventListener("click", emailValidation);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const validEmail = regEx.test(email);

  return validEmail;
}
