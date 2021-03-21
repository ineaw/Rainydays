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
