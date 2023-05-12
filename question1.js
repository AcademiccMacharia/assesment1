//Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

let first_integer = 5;
let second_integer = 8;

let sum = first_integer + second_integer;
let difference = first_integer - second_integer;

const checkIntegers = () => {
  if (first_integer === 8 || second_integer === 8) {
    if (first_integer === 8) {
      console.log("The first integer is 8");
    } else {
      console.log("The second integer is 8");
    }
  } else if (sum === 8) {
    console.log("The sum of the integers is 8");
  } else if (difference === 8) {
    console.log("The difference of the integers is 8");
  } else {
    console.log("Check not passed, kid!");
  }
};
checkIntegers();
