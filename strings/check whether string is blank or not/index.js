// Write a JavaScript function to check whether a string is blank or not.

// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

let is_Blank = (input) => {
  if (input.length === 0) return true;
  else return false;
};

console.log(is_Blank("")); //true
console.log(is_Blank("abc")); //false

string_to_array = function (str) {
  return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh"));
