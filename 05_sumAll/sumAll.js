const sumAll = function(from, to) {
    if(to < 0 || from < 0) return "ERROR"
    if(typeof to !== "number" || typeof from !== "number") return "ERROR"

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
