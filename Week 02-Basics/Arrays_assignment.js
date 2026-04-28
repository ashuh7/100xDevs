/*
Write a function that takes an array of numbers as input, and returns
 a new array with only even values. Read about filter in JS
*/


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

rl.question("Enter numbers separated by commas: ", (input) => {
    const numbersArray = input.split(",").map(num => Number(num.trim()));
    const evenNumbers = getEvenNumbers(numbersArray);

    console.log("Original array:", numbersArray);
    console.log("Even numbers:", evenNumbers);

    rl.close();
});