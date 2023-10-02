const add = function(augend, addend) {
	return augend + addend;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
};

const multiply = function(factors) {
	return factors.reduce((sum, number) => {
    return sum * number;
  }, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
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
