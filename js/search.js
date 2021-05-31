const apiSearch = "https://ineaw.no/rainydays/wp-json/wc/v3/products/";

const keySearch = "consumer_key=ck_805849d86188f7b6115b02b0f46312c46a13276f";
const secretSearch = "consumer_secret=cs_9d27e84f1790c49225ddd52f201a93dc7b59cc63";

const urlSearch = `${apiSearch}?${keySearch}&${secretSearch}`;

// fetch(urlSearch)
//   .then((response) => response.json())
//   .then((products) => {
//     filteredPost = products;
//   });

// const nameForm = document.querySelector(".search1");
// let filteredPosts = [];

// nameForm.addEventListener("input", (event) => {
//   event.preventDefault();
//   const term = event.target.value.toLowerCase();
//   let searchResult = filteredPosts.filter((filteredPost) => {
//     return filteredPost.name.toLowerCase().includes(term);
//   });
//   createPostCards();
// });

const searchBar = document.getElementById("searchbar");
let productResults = [];
console.log(searchBar);

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  productResults.filter((product) => {
    product.name.includes(searchString);
  });
});
