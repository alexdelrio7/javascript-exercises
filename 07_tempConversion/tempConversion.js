const convertToCelsius = function(f) {
  let celsius = (f - 32) * (5/9)
  const rounded = Math.round(celsius * 10) / 10; // Round to 1 decimal place
  return Number.isInteger(rounded) ? Math.round(celsius) : rounded;
};

const convertToFahrenheit = function(c) {
  let fahrenheit = (c * (9/5)) + 32
  const rounded = Math.round(fahrenheit * 10) / 10; // Round to 1 decimal place
  return Number.isInteger(rounded) ? Math.round(fahrenheit) : rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
