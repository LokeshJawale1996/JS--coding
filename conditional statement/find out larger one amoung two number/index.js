function CheckNumber(num1, num2) {
  if (num1 > num2) {
    return console.log(
      "first number " + num1 + " is greater than second number " + num2
    );
  } else if (num2 > num1) {
    return console.log(
      "second number " + num2 + " is greater than first number " + num1
    );
  } else console.log("both  numbers are equal");
}

console.log(CheckNumber(10, 20));
console.log(CheckNumber(20, 10));
console.log(CheckNumber(20, 20));
