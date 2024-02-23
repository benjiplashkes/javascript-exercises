const removeFromArray = function(array, ...valuesToRemove) {
   valuesToRemove.forEach(value => {
    array = array.filter(item => item !== value)
   }
   )
   return array
};

// Do not edit below this line
module.exports = removeFromArray;
