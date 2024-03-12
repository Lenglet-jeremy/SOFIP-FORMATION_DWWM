const firstNumber = 33;
const secondNumber = "45";
const isItANumber = "test";

console.log(firstNumber);
console.log(Number(secondNumber));
console.log(Number(isItANumber));

console.log(0.1 + 0.2);
console.log((0.1 * 10 + 0.2 * 10) / 10);

console.log("e", 1e6); //Equivalent 1M
console.log("Puissance", 3 ** 2);

const longueur = "45.54px";
console.log(parseFloat(longueur));
console.log(parseInt(longueur));

const decimalNumber = 3.456743;
console.log(Number(decimalNumber.toFixed(3)));

console.log(isNaN(isItANumber));
console.log(Number.isInteger(decimalNumber));
