const url = "http://ineaw.no/rainydays/wp-json/wc/store/products/";
const productContainer = document.querySelector(".new-products");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = message("An error occurred when when try to load the", error);
  }
}

getProducts();

function createHTML(products) {
  console.log(products);

  products.forEach(function (product) {
    productContainer.innerHTML += `
    <div class="newPurple">
    <a href="product.html?id=${product.id}">
    <img src="${product.images[0].src}" alt="Image of product${product.name}">
    </a>

    <h3>${product.name}</h3>
      <a href="product.html?id=${product.id}" class="item buy-now">See more</a> 
   </div> `;
  });
}
