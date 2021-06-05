const api = "https://ineaw.no/rainydays/wp-json/wc/v3/products";

const key = "consumer_key=ck_805849d86188f7b6115b02b0f46312c46a13276f";
const secret = "consumer_secret=cs_9d27e84f1790c49225ddd52f201a93dc7b59cc63";

const url = `${api}?${key}&${secret}`;

const productContainer = document.querySelector(".new-products");
async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();

    console.log(getResults);
    for (let i = 0; i < getResults.length; i++) {
      if (getResults[i].featured != true) {
        continue;
      }

      const img = getResults[i].images[0].src;
      const name = getResults[i].name;
      const product = getResults[i].id;

      productContainer.innerHTML += `
    <div class="purple-jack">
    <div class="heart">
    <i class="fa fa-heart-o"></i>
  </div>
  <div class="active">
  <i class="fa fa-heart-o"></i>
</div>
    <a href="product.html?id=${product}">
    <img src="${img}" alt="Image of Jacket${name}">
    </a>
    <h2>${name}</h2>
      <a href="product.html?id=${product}" class="item buy-now">See more</a> 
   </div> `;
    }
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = message("Could not display the products");
  }
}

getProducts();

// async function getCat() {
//   try {
//     const res = await fetch(url + "?category" + "?id");
//     const getRes = await res.json();
//     console.log(getRes);
//   } catch (error) {
//     console.log(error);
//     productContainer.innerHTML = message("Could not display the products");
//   }
// }

// getCat();
