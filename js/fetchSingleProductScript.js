const spinner = document.getElementById('spinner');
spinner.style.display = 'block';

const productContainer = document.getElementById('productCard');
const URL = "https://cors.noroff.dev/http://rainydays.krzysztofbytniewski.com/wp-json/wc/store/products/";

async function fetchAndDisplaySingleProduct() {
    const productId = new URLSearchParams (window.location.search).get("id");
    const response = await fetch(URL + productId);
    const product = await response.json();
    spinner.style.display =`none`;
    displaySingleProduct(product);
    console.log(product, productId)
    
}


function displaySingleProduct(product) {
    productContainer.innerHTML = `
   
    <img src = "${product.images[0].src}"/>
    <h2>${product.name}</h2>
    <h3>NOK ${product.prices.price}</h3>
    <a>${product.description}</a>
    <a href="checkout.html" class="button">Add to cart</a>`
 
    }

    fetchAndDisplaySingleProduct();
    









/*const url =
 ("https://cors.noroff.dev/http://krzysztofbytniewski.com/wp-json/wc/store/products/" + id);

const productCard = document.querySelector("#productCard");

async function getProducts() {
 try {
   const response = await fetch(url);
   if (!response.ok) {
     throw new Error("Network response was not ok");
   }
   const products = await response.json();
   displayProducts(products);
 } catch (error) {
   console.log(error);
   productCard.innerHTML = error;
 }
}

getProducts();

function displayProducts(products) {
 products.forEach((product) => {
   let divProduct = document.createElement("div");
   divProduct.className = "productCard";
   let link1 = document.createElement("a");
   link1.href = "/productpage.html?id=" + product.id;
   let image = document.createElement("img");
   image.src = product.images[0].thumbnail;
   let p1 = document.createElement("p");
   p1.className = "productMake";
   p1.innerText = product.gender;
   let p2 = document.createElement("p");
   p2.className = "productModel";
   p2.innerText = product.name;
   let p3 = document.createElement("p");
   p3.className = "productPrice";
   p3.innerHTML = "kr " + product.prices.price;
   let link2 = document.createElement("a");
   link2.className = "moreButton";
   link2.href = "/productpage.html?id=" + product.id;
   link2.innerHTML = "More  &gt;";
   link1.appendChild(image);
   //link1.appendChild(p1);
   link1.appendChild(p2);
   link1.appendChild(p3);
   divProduct.appendChild(link1);
   divProduct.appendChild(link2);
   productContainer.appendChild(divProduct);
 });
}
 */




