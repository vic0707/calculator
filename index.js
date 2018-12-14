class Calculator {
  constructor() {
    this.previousOperation = null;
    this.previousResult = 0;
    this.currentResult = 0;
  }

  keepTrack (operator) {
    this.previousOperation = operator;
    this.previousResult = this.currentResult;
  }

  add (a) {
    this.keepTrack('+');
    this.currentResult += a;
  }

  substract (a) {
    this.keepTrack('-');
    this.currentResult -= a;
  }

  multiply (a) {
    this.keepTrack('*');
    this.currentResult *= a;
  }

  divide (a) {
    this.keepTrack('/');
    this.currentResult /= a;
  }

  modulus () {
    // to be implemented
  }

  resetCalculator () {
    this.previousOperation = null;
    this.previousResult = 0;
    this.currentResult = 0;
  }

  calculate ([ firstValue, operator, secondValue ]) {
    // assuming input is an array with two values and an operator
    this.currentResult = firstValue;

    switch (operator) {
      case '+':
        this.add(secondValue);
        break;
      case '-':
        this.substract(secondValue);
        break;
      case '*':
        this.multiply(secondValue);
        break;
      case '/':
        this.divide(secondValue);
        break;
      default:
      this.resetCalculator();
        console.log(`Operator ${operator} is not recognised, Try again`);
    }
  }

}
