// Write a JavaScript program to convert a given number into hours and minutes.

let number = 71;
let hour = Math.floor(number / 60);
let minute = number % 60;

const convertNumber = () => {
    console.log(`${number} minutes is equal to ${hour} hour(s) and ${minute} minute(s)`);
    }

convertNumber();