const productImage = document.querySelector(".product-image");
const detailContainer = document.querySelector(".product-text");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const api = "https://ineaw.no/rainydays/wp-json/wc/v3/products/" + id;

const key = "consumer_key=ck_805849d86188f7b6115b02b0f46312c46a13276f";
const secret = "consumer_secret=cs_9d27e84f1790c49225ddd52f201a93dc7b59cc63";
const url = `${api}?${key}&${secret}&${id}`;
const breadcrumbs = document.querySelector(".breadcrumbs");

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const product = await response.json();
    productImage.innerHTML = `<div class="product-image">
      <img src="${product.images[0].src}" alt="Image of product${product.name}">
      </div>`;

    detailContainer.innerHTML = `
    <h3>${product.name}</h3>
    <h2>100% recycled polyester</h2>
    <h2>Biodegradeable</h2>
    <p>${product.short_description}</p>
    <h2>NOK ${product.price}</h2>
    `;
    breadcrumbs.innerHTML += `   
    <li><p>${product.name}</p></li>
    `;
    const button = document.querySelector("button.add-me");
    const buttonShop = document.querySelector("button.shop");
    const cart = document.querySelector(".product-added");

    button.addEventListener("click", () => {
      const newItem = document.createElement("shop");
      localStorage.setItem;
      button.appendChild(newItem);
      buttonShop.innerHTML = `${button.childElementCount}`;
      button.value += 1;
      cart.innerHTML += `
      <img src="${product.images[0].src}" alt="${product.name}">
      <p><a href="product.html">1 x Purple Rain</a> <span class="price">${product.price}</span></p>
    `;
      localStorage.setItem(".product-added", JSON.stringify(cart));
    });
  } catch (error) {
    console.log(error);
    productImage.innerHTML = message("", error);
  }
}

fetchProducts();

// let carts = document.querySelectorAll("button.add-me");
// let products = [];

// for (let i = 0; i < carts.length; i++) {
//   carts[i].addEventListener("click", () => {
//     console.log("added to cart");
//     cartNumbers(products[i]);
//     totalCost(products[i]);
//   });
// }
