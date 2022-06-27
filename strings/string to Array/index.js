// Write a JavaScript function to split a string and convert it into an array of words.

// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Lokesh", "Jawale"]

string_to_array = function (str) {
  return str.trim().split(" ");
};
console.log(string_to_array("Lokesh Jawale"));

truncate_string = function (str1, length) {
  return str1.slice(0, length);
};
console.log(truncate_string("Robin Singh", 4));
