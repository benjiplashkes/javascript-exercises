const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	if(!Array.isArray(array)) return "Error"
  let result = 0
  for (const number of array) {
    if(!typeof number === "number") return "Error"
    result += number
  }
  return result
};

const multiply = function(array) {
  if(!Array.isArray(array)) return "Error: wrong input type"
  if(array.length < 2) return "Error: wrong input length"
  return array.reduce((acc, value)=> acc * value)
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  let factorial = 1
  for(let i = num; i > 0; i --){
    factorial *= i
  }
  return factorial
  
	
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
