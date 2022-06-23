let arr = [
  "lokesh",
  "lokesh",
  "dhanaji",
  "gaurav",
  "gaurav",
  "dhanaji",
  "mayur",
];

console.log(arr);
let unique = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});
console.log(unique);

//just for more information
//Que1) How to convert array element into string
let arr2 = arr.toString();
console.log(arr2);

//Que2) How to convert string element into array
let arr3 = arr2.split(",");
console.log(arr3);
