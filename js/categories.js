const apiCat = "https://ineaw.no/rainydays/wp-json/wc/v3/products?category";

async function getCat() {
  try {
    const res = await fetch(apiCat + "?id");
    const getRes = await res.json();
    console.log(getRes);
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = message("Could not display the products");
  }
}

getCat();
