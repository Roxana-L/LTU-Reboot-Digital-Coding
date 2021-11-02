/*
1.  Find out what day it is
2. If it's Monday, Wednesday or Friday = Exercise
3. Else = Rest Day
*/

//This is a simple comment

/*
This is a multiple 
line
comment 
*/

/*
let age = 37;
let name = "Luke";

let message = "It's Tuesday!";
 */

const productName = "Baked Goods";
let price = 1.3;
let quantity = 4;
let inStock = true;
let discountAmount = 10;

//console.log("Product Name:", productName);
//console.log("Price:", price);
//console.log("Quantity:", quantity);
//console.log("In Stock:", inStock);
//console.log("Discount:", discountAmount);

//document.write("<p>" + productName + "</p>");

//function greeting() {
//console.log("Hello");
//}
//greeting();

//function greeting(name, age) {
//console.log(`Hello ${name}, you are ${age} years old`);
//}
//greeting("Sue", 27);

//function addOne(num) {
//let newNumber = num + 1;
//console.log(newNumber);
//}
//addOne(5);

//function addOne(num) {return num + 1;
//}
//let amount = addOne(5);
//console.log(amount);

function showProductName() {
  console.log(productName);
}
showProductName();

function totalPrice(productPrice, productQuantity) {
  console.log(productPrice * productQuantity);
}
//totalPrice(price, quantity);

//function checkAvailability(productInStock) {
////  console.log(productInStock);
//}
//checkAvailability(inStock);

const checkAvailability = (productInStock) => console.log(productInStock);
checkAvailability(inStock);

let global = "Global scope";
const localScope = () => {
  let scope = "Scope";
  return scope;
};
const scope = localScope();
localScope();

console.log(scope);
console.log(global);

const productDiscount = () => {
  if (quantity > 1) {
    let newPrice = discountAmount - price * quantity;
    console.log(newPrice);
  } else {
    console.log(price * quantity);
  }
};

// Switch Function

const level = 4;
switch (level) {
  case 1:
    console.log("You are on level 1");
    break;
  case 2:
    console.log("You are on level 2");
    break;
  case 3:
    console.log("You are on level 3");
    break;
  case 4:
    console.log("You are on level 4");
    break;
  default:
    console.log("No level found");
}
//Drink Order
function drinkOrder(drink, size) {
  switch (drink) {
    case "cola":
      console.log(`${size} : ${drink}`);
      break;
    case "lemonade":
      console.log(`${size} : ${drink}`);
      break;
    case "orangeade":
      console.log(`${size} : ${drink}`);
      break;
    default:
      console.log(`We don't have your drink in stock`);
      break;
  }
}
drinkOrder("cola", "small");

// Create a Calculator

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "*":
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case "/":
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
      break;
    default:
      console.log("The operator chosen is invalid.");
  }
};
//calculator(1, 1, "+");
//calculator(1, 1, "-");
//calculator(1, 1, "*");
//calculator(1, 1, "/");

// Arrays, Objects & Loops

const product1 = [productName, price, quantity, inStock, discountAmount];
//console.log(product[2]);
//let firstItem = product[0];
//let lastItem = product[product.length - 1];

const product2 = {
  "product name": "Apples",
  price: 1.6,
  quantity: 6,
  inStock: true,
  discountAmount: 0.2,
};

//const productName = product["product name"];

console.log(product2.price); // Dot Notation
console.log(product2["price"]); // Square Brackets Notation
console.log(product2["product name"]);
console.log(typeof product1[0]);
console.log(typeof product2.inStock);

product2.price = 1.25;
product2.colour = "Green";
console.dir(product2);
console.table(product2);
console.log(product2.price);
console.log(product2.colour);

for (let counter = 0; counter <= 10; counter++) {
  console.log(counter);
}

let colours = ["Green", "Orange", "Blue"];
for (let index = 0; index < colours.length; index++) {
  console.log(colours[index]);
}

//for (let i = 0; i <= 100; i++) {
//if (i % 3 === 0) {
// console.log("fizz");
//} else if (i % 5 === 0) {
// console.log("buzz");
//} else console.log(i);
//}
//function multiply(num, maxNum) {}
//for (let counter = 1; counter <= maxNum; counter++) {
//let multiplyBy = num;
//let result = counter * multiplyBy;
//console.log(`${counter} * ${num} = ${result}`);
//}

//multiply(8, 16);

console.log(shoppingBasket[0]);

//1. Create a function called totalPriceOfShopping that takes one (1) parameter, name the parameter arr - short for array
//2. Inside the function create a variable called totalPrice and assign it the value of 0
//3. Next create a for loop, this will loop over each object ( product )
//4. Inside the loop write totalPrice = totalPrice +
//5. Inside the for loop access both the price and quantity and multiply them with each other to get the price of that product
//6. Place the result of step 5 after the + in step 4, e.g totalPrice = totalPrice + price `*` quantity
//7. outside of the for loop but still inside the function return totalPrice
//8. Outside of the function call the function with shoppingBasket as its argument, don't forget to console.log the result
//- console.log( totalPriceOfShopping( shoppingBasket ) );
// * Your output should be: 74.90
function totalPriceOfShopping(arr) {
  let totalPrice = 0;
  //console.log(arr[0]);
  for (let index = 0; index < arr.length; index++) {
    totalPrice = totalPrice + arr[index].price * arr[index].quantity;
    //console.log(arr[index].price * arr[index].quantity);
  }
  return totalPrice.toFixed(2);
}
console.log(totalPriceOfShopping(shoppingBasket));

//1. Create a function called discountToiletries that takes one (1) parameter, name the parameter arr - short for array
//2. Inside the function create a variable called totalPrice and assign it the value of 0
//3. Next create a for loop, this will loop over each object ( product )
//4. Use an if else statement to check if the product's type is === 'toiletries'
//5. If it is then remove 50% from its price and add it to the totalPrice
//6. Else just work out the price and add it to the totalPrice
//7. outside of the for loop but still inside the function return totalPrice
//8. Outside of the function call the function with shoppingBasket as its argument, don't forget to console.log the result
//  - console.log( discountToiletries( shoppingBasket ) );
//* Your output should be: 68.22

function discountToiletries(arr) {
  let totalPrice = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].type === "toiletries") {
      let discount = (arr[index].price * arr[index].quantity) / 2;
      totalPrice =
        totalPrice + arr[index].price * arr[index].quantity - discount;
    } else {
      totalPrice = totalPrice + arr[index].price * arr[index].quantity;
    }
  }
  return totalPrice;
}
console.log(discountToiletries(shoppingBasket));

function discountType(arr, type, discount) {
  let totalPrice = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].type === type) {
      let discountAmount =
        (discount * (arr[index].price * arr[index].quantity)) / 100;
      totalPrice =
        totalPrice + (arr[index].price * arr[index].quantity - discountAmount);
    } else {
      totalPrice = totalPrice + arr[index].price * arr[index].quantity;
    }
  }
  return totalPrice.toFixed(2);
}
//console.log(discountType(shoppingBasket, "vegetables", 20));
//shoppingBasket.forEach(function (item) {
//  console.log(item);
//});

shoppingBasket.forEach((item) => console.log(item));

const heading1 = document.querySelector("h1");

const heading4 = document.querySelector("h4");
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  console.log((paragraphs[i].style.color = "Orange"));
}
