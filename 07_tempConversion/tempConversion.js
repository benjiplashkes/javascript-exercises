const convertToCelsius = function(degF) {
  const degC = (degF - 32) * 0.5556
  return parseFloat(degC.toFixed(1))
};

const convertToFahrenheit = function(degC) {
  const degF = degC * 1.8 + 32
  return parseFloat(degF.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
