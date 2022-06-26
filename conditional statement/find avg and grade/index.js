//create a fnction which acccepts five or more numbers in array

let CalculateAvgAndGrade = ([arr]) => {
  let avg;
  let totalMarks = 0;
  for (let i = 0; i < arr.length; i++) {
    totalMarks += arr[i];
    avg = totalMarks / arr.length;
  }
  console.log(avg);
  if (avg < 60) {
    return "Grade: fail";
  } else if (avg > 60 && avg <= 70) {
    return "Garde: D";
  } else if (avg > 70 && avg <= 80) {
    return "Garde: B";
  } else if (avg > 80 && avg <= 90) {
    return "Garde: A";
  } else "Grade A+";
};
let marks = [67, 56, 89, 45, 90];
console.log(CalculateAvgAndGrade([marks]));
