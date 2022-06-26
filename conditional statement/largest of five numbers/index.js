let largestOfFiveNumbers = (n1, n2, n3, n4, n5) => {
  if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    console.log("First number " + n1 + " is greater than all others");
  } else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    console.log("Second number " + n2 + " is greater than all others");
  } else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
    console.log("Third number " + n3 + " is greater than all others");
  } else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    console.log("Fourth number " + n4 + " is greater than all others");
  } else console.log("Fifth number " + n5 + " is greater than all others");
};

console.log(largestOfFiveNumbers(50, 40, 30, 20, 10));
console.log(largestOfFiveNumbers(10, 50, 35, 45, 30));
console.log(largestOfFiveNumbers(22, 44, 56, 47, 38));
console.log(largestOfFiveNumbers(67, 56, 54, 99, 33));
console.log(largestOfFiveNumbers(11, 22, 33, 44, 55));
