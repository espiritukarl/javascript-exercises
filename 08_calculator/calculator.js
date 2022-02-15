const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  let result = 0;
  for (addends of a) {
    result += addends;
  }
  return result;
};

const multiply = function (a) {
  let result = 1;
  for (addends of a) {
    result *= addends;
  }
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= a; i++) {
      result *= i;
    }
    return result;
  }
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
