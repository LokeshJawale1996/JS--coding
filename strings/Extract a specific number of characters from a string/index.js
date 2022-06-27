// Write a JavaScript function to extract a specified number of characters from a string.

// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

truncate_string = function (str1, length) {
  if (str1.constructor === String && length > 0) {
    return str1.slice(0, length);
  }
};
console.log(truncate_string("Robin Singh", 4));
