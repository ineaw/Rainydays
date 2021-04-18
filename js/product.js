const productImage = document.querySelector(".product-image");

const detailContainer = document.querySelector(".product-text");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "http://ineaw.no/rainydays/wp-json/wc/store/products/" + id;

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const product = await response.json();
    console.log(product);

    createHtml(product);
  } catch (error) {
    console.log(error);
    productImage.innerHTML = message("", error);
  }
}

fetchProducts();

function createHtml(product) {
  productImage.innerHTML = `<div class="product-image">
   <img src="${product.images[0].src}" alt="${product.name}">
   </div>`;
  detailContainer.innerHTML = `
   <h3>${product.name}</h3>
   <h2>100% recycled polyester</h2>
   <h2>Biodegradeable</h2>
   <p>${product.description}</p>

   <h2>NOK ${product.prices.price}</h2>

   `;
}

let cartArray = [];

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    cartArray(event.target.dataset.product);
  };
});

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
