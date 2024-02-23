const sumAll = function(from, to) {
    const max = Math.max(from, to)
    let min = Math.min(from, to)
    let result = 0
    for(min; min <= max; min ++){
        result = result + min
    }
    return result

};

// Do not edit below this line
module.exports = sumAll;
