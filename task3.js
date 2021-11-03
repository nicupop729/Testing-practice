class Calculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }

  add = () => this.number1 + this.number2;
  substract = () => this.number1 - this.number2;
  multiply = () => this.number1 * this.number2;
  divide = () => this.number1 / this.number2;
}

const calculator = new Calculator(10, 2);

module.exports = calculator;
