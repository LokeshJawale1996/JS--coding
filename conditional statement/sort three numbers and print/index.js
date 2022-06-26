let SortNumbers = (n1, n2, n3) => {
  if (n1 > n2 && n1 > n2) {
    if (n2 > n3) {
      console.log(n1 + " " + n2 + " " + n3);
    } else {
      console.log(n1 + " " + n3 + " " + n1);
    }
  }
  if (n2 > n1 && n1 > n3) {
    if (n1 > n3) {
      console.log(n2 + " " + n1 + " " + n3);
    } else {
      console.log(n2 + " " + n3 + " " + n1);
    }
  }
  if (n3 > n1 && n3 > n2) {
    if (n1 > n2) {
      console.log(n3 + " " + n1 + " " + n2);
    } else {
      console.log(n3 + " " + n2 + " " + n1);
    }
  }
};

console.log(SortNumbers(10, 20, 30));
console.log(SortNumbers(20, 30, 15));
console.log(SortNumbers(15, 30, 20));
console.log(SortNumbers(40, 30, 50));
console.log(SortNumbers(35, 45, 50));
