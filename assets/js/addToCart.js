const addToCart = (e) => {
  console.log("addToCart");
  console.log(e);
  console.log(e.path[5].id ? e.path[5].id : e.path[6].id);
  const element = e.path[5].id ? e.path[5].id : e.path[6].id;
  // console.log(e.path[5].id);
  // console.log(e.path[6].id);
  const title = document
    .getElementById(element)
    .querySelector(".down-content")
    .querySelector("#product-title").innerText;
  const price = document
    .getElementById(element)
    .querySelector(".down-content")
    .querySelector("#product-price").innerText;
  const image = document
    .getElementById(element)
    .querySelector(".thumb")
    .querySelector(".product-image").src;

  // console.log(price);

  // console.log(title);

  // console.log(image);

  let productDetails = {
    image: image,
    price: price.substring(1),
    title: title,
  };

  const storedProducts = JSON.parse(localStorage.getItem("totalProducts"));
  console.log(storedProducts);
  if (storedProducts) {
    storedProducts.push(productDetails);
    localStorage.setItem("totalProducts", JSON.stringify(storedProducts));
    console.log(storedProducts);
  } else {
    let productsArray = [];
    productsArray.push(productDetails);
    console.log(productsArray);
    localStorage.setItem("totalProducts", JSON.stringify(productsArray));
  }
  setBasketCount();
  calculateTotal();
};

const setBasketCount = () => {
  const count = document.getElementById("shopping-cart-totalItems");
  const totalItems = JSON.parse(localStorage.getItem("totalProducts"));

  if (totalItems) {
    count.innerText = totalItems.length;
  } else {
    count.innerText = 0;
  }
};

setBasketCount();

const allProductDetails = () => {
  const totalItems = JSON.parse(localStorage.getItem("totalProducts"));
  let totalUserProducts = document.getElementById("checkoutAllProducts");
  if (totalItems) {
    const final = totalItems.map((total) => {
      return `<div class="checkoutProduct__total">
      <img class="checkoutProduct__image" src=${total.image} />
  
      <div class="checkoutProduct__info">
        <p class="checkoutProduct__title">${total.title}</p>
        <p class="checkoutProduct__price">
          <small>$</small>
          <strong>${total.price}</strong>
        </p>
        <div class="checkoutProduct__rating">
         
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>
        
    </div>
    </div>`;
    });
    totalUserProducts.innerHTML = final;
  } else {
    totalUserProducts.innerHTML = "";
  }
};

const removeItemFromBasket = () => {
  // console.log(product);
  console.log("entered");
};

const calculateTotal = () => {
  const totalItems = JSON.parse(localStorage.getItem("totalProducts"));
  let sum = totalItems.reduce(function (accumulator, curValue) {
    return accumulator + parseInt(curValue.price);
  }, 0);
  const finalPrice = document.getElementById("totalPrice");
  finalPrice.innerText = sum;
  console.log(sum);
};

calculateTotal();

allProductDetails();

// const removeFromLocalStorage = () => {
//   localStorage.removeItem("totalProducts");
// };

// removeFromLocalStorage();
