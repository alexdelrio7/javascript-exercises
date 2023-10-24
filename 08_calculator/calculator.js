const add = function(...numbers) {
	return numbers.reduce((total, num) => total + num, 0);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, num) => total + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => total * num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n === 0) {
    return 1; // The factorial of 0 is 1
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
