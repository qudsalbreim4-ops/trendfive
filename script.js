let products = [
{
      "id":"p1",
      "name":"JBL Tune 230NC TWS - True Wireless In-Ear Headphones",
      "category":"Electronics",
      "price":"$99.95",
      "image":"https://m.media-amazon.com/images/I/51KEIAsdyfL._AC_SL1500_.jpg",
      "link":"https://amzn.to/3PmZQF8"
    },
    {
      "id":"p2",
      "name":"TILUCK Stainless Steel Measuring Cups & Spoons Set, Cups and Spoons",
      "category":"Home&Kitchen",
      "price":"$15.99",
      "image":"images/cup.jpg",
      "link":"https://amzn.to/4sEEKkc"
    },
    {
      "id":"p3",
      "name":"Shark Rocket Ultra-Light Corded Bagless Vacuum for Carpet and Hard Floor Cleanings",
      "category":"Electronics",
      "price":"$99.00",
      "image":"images/vacum.png",
      "link":"mages/vacum.png"
    },{"id":"p4",
      "name":"BS-MALL Professional Makeup Brush Set 18 Pcs Premium Synthetic Foundation Powder Concealers Eye Shadows",
      "category":"makeup",
      "price":"$99.00",
      "image":"images/prushes.jpg",
      "link":"https://amzn.to/4b7o6ni"}
];

let cart = [];
let wishlist = [];

function displayProducts(list){
let container = document.getElementById("product-list");
container.innerHTML="";
list.forEach(p=>{
container.innerHTML+=`
<div class="product">
<img src="${p.image}">
<h3>${p.name}</h3>
<div class="stars">⭐⭐⭐⭐⭐</div>
<p class="price">${p.price}</p>
<div class="buttons">
<button onclick="addWishlist('${p.id}')">❤️</button>
<button onclick="addToCart('${p.id}')">🛒</button>
<a href="${p.link}" target="_blank"><button class="buy">Buy Now</button></a>
</div>
</div>
`;
});
}

displayProducts(products);

/* Filter */
function filterProducts(cat){
if(cat=="all"){displayProducts(products);}
else{displayProducts(products.filter(p=>p.category==cat));}
}

/* Search */
document.getElementById("search").addEventListener("input",function(){
let val=this.value.toLowerCase();
displayProducts(products.filter(p=>p.name.toLowerCase().includes(val)));
});

/* Cart */
function addToCart(id){
cart.push(id);
document.getElementById("cart-count").innerText=cart.length;
alert("Added to Cart 🛒");
}

/* Wishlist */
function addWishlist(id){
wishlist.push(id);
alert("Added to Wishlist ❤️");
}

/* Countdown */
let time=3600;
setInterval(()=>{
let minutes=Math.floor(time/60);
let seconds=time%60;
document.getElementById("timer").innerText=
"Deal ends in "+minutes+"m "+seconds+"s";
time--;
},1000);

/* Dark Mode */
document.getElementById("darkModeBtn").onclick=function(){
document.body.classList.toggle("dark");
}

/* Slider */
let slider = document.getElementById("slider-container");
products.forEach(p=>{
slider.innerHTML+=`
<div class="product">
<img src="${p.image}">
<h3>${p.name}</h3>
<div class="stars">⭐⭐⭐⭐⭐</div>
<p class="price">${p.price}</p>
</div>`;
});

/* Particles */
// Particles متحركة بالخلفية
particlesJS("particles-js",{
  "particles":{
    "number":{"value":60},
    "color":{"value":"#805c7e"}, // لون البيربل الذي طلبتيه
    "shape":{"type":"circle"},
    "opacity":{"value":0.6},
    "size":{"value":4},
    "move":{"enable":true,"speed":2}
  },
  "interactivity":{
    "events":{
      "onhover":{"enable":true,"mode":"repulse"}
    }
  }
});