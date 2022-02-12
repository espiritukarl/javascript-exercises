const ftoc = function (tempFarenheit) {

  let result = (5 / 9) * (tempFarenheit - 32);

  return Math.round(result * 10) / 10;
};

const ctof = function (tempCelsius) {

  let result = (9 / 5) * tempCelsius + 32;

  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
