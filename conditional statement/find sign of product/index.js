let FindSignOfProduct = (num1, num2, num3) => {
  if (num1 + num2 + num3 > 0) {
    console.log("The Product sign is +");
  } else if (num1 + num2 + num3 < 0) {
    console.log("The product is -");
  } else {
    console.log("The proudct is 0");
  }
};

console.log(FindSignOfProduct(3, 6, -10));
console.log(FindSignOfProduct(2, 2, -2));
console.log(FindSignOfProduct(2, 2, -4));
