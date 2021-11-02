// const stringLength = (string) => {
//   const countChar = string.length;
//   if (countChar > 0 && countChar <= 10) {
//     return countChar;
//   } else return "string to long";
// };

// const reverseString = (string) => string.split("").reverse().join("");

// class Calculator {
//   constructor(number1, number2) {
//     this.number1 = number1;
//     this.number2 = number2;
//   }

//   add = () => this.number1 + this.number2;
//   substract = () => this.number1 - this.number2;
//   multiply = () => this.number1 * this.number2;
//   divide = () => this.number1 / this.number2;
// }

// const calculator = new Calculator(10, 2);

const capitalize = (string) =>
  string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

// module.exports = stringLength;
// module.exports = reverseString;
// module.exports = calculator;
module.exports = capitalize;
