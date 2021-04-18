const productImage = document.querySelector(".product-image");

const detailContainer = document.querySelector(".product-text");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const api = "https://ineaw.no/rainydays/wp-json/wc/v3/products/" + id;

const key = "consumer_key=ck_805849d86188f7b6115b02b0f46312c46a13276f";
const secret = "consumer_secret=cs_9d27e84f1790c49225ddd52f201a93dc7b59cc63";
const url = `${api}?${key}&${secret}&${id} `;

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const product = await response.json();
    console.log(product);
    // for (let i = 0; i < product.length; i++) {
    //   let img = product[i].images[0].src;
    //   let name = product[i].name;

    productImage.innerHTML = `<div class="product-image">
      <img src="${product.images[0].src}" alt="Image of product${product.name}">
      </div>`;

    detailContainer.innerHTML = `
    <h3>${product.name}</h3>
    <h2>100% recycled polyester</h2>
    <h2>Biodegradeable</h2>
`;
  } catch (error) {
    console.log(error);
    productImage.innerHTML = message("", error);
  }
}

fetchProducts();

function createHtml(product) {
  let img = product.images[0].src;

  productImage.innerHTML = `<div class="product-image">
   <img src="${img}" alt="${product.name}">
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
