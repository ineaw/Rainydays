const api = "https://ineaw.no/rainydays/wp-json/wc/store/products?category=19";

const key = "consumer_key=ck_805849d86188f7b6115b02b0f46312c46a13276f";
const secret = "consumer_secret=cs_9d27e84f1790c49225ddd52f201a93dc7b59cc63";

const url = `${api}?${key}&${secret}`;

const productContainer = document.querySelector(".new-products");
const breadcrumbs = document.querySelector(".breadcrumbs");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();

    createHTML(getResults);
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = ("An error occurred when when try to load the", error);
  }
}

getProducts();

function createHTML(products) {
  console.log(products);

  products.forEach(function (product) {
    productContainer.innerHTML += `
    <div class="newPurple">
    <div class="heart">
    <i class="fa fa-heart-o"></i>
  </div>
    <a href="product.html?id=${product.id}">
    <img src="${product.images[0].src}" alt="Image of product${product.name}">
    </a>
    <h3>${product.name}</h3>
    <h3>NOK ${product.prices.price}</h3>
      <a href="product.html?id=${product.id}" class="item buy-now">See more</a> 
   </div> `;
    sortLow = document.querySelector(".sort-low");

    sortLow.addEventListener("click", () => {
      products.sort((a, b) => (a.prices.price > b.prices.price ? 1 : -1));
      productContainer.innerHTML = "";
      createHTML(products);
    });
    sortHigh = document.querySelector(".sort-high");

    sortHigh.addEventListener("click", () => {
      products.sort((a, b) => (a.prices.price < b.prices.price ? 1 : -1));
      productContainer.innerHTML = "";
      createHTML(products);
    });

    // sortHigh = document.querySelector(".sort-high");

    // sortHigh.addEventListener("click", () => {
    //   products.sort((a, b) => (a.prices.price < b.prices.price ? 1 : -1));
    //   productContainer.innerHTML = "";
    //   createHTML(products);
    // });
  });
}
