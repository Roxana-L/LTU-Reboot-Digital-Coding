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
//productDiscount();
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
