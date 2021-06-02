let carts = document.querySelectorAll(".add-cart");
let products = [];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    console.log("added to cart");
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onloadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  console.log("The product clicked is", product);
  let productNumbers = localStorage.getItem("cartNumbers");
  console.log(productnumbers);
  console.log(typeof productnumbers);

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  console.log("my product is", product);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log("MY CartItems are", cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;

    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  cartCost = parseInt(cartCost);

  console.log("My cart cost is", cartCost);

  if (cartCost != null) {
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }

  localStorage.setItem("totalCost", product.price);
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItem = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  console.log(cartItems);

  if (cartItems && productContainer) {
    console.log("running");
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
    <div class="product">X
    <img>$img/>
    <span>$item.name</span>
    <div class="price">NOK$item.price, 00</div>
    <div class="quantity"> < <span>$item.inCart</span> >
    </div>
    <div class="total">
    NOK$item.inCart * item.price, 00
    </div>

    `;
    });

    productContainer.innerHTML += `
    <div class="basketTotalContainer">
    <h4 class="basketTotalTitle> </h4>
    <h4 class="basketTotal>
    NOK$cartCost, 00 
    </h4>

    `;
  }
}

onloadCartNumbers();
displayCart();

let openCart = document.querySelectorAll("[data-open]");
let closeCart = document.querySelectorAll("[data-close]");
let isVisible = "is-visible";

for (let el of openCart) {
  el.addEventListener("click", function () {
    let modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (let el of closeCart) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".cart-modal.is-visible")) {
    document.querySelector(".cart-modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && document.querySelector(".cart-modal.is-visible")) {
    document.querySelector(".cart-modal.is-visible").classList.remove(isVisible);
  }
});
