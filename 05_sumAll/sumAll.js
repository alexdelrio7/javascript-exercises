const sumAll = function(start, end) {

    let sum = 0;
  
    // Ensure start is less than or equal to end
    if (start > end) {
      [start, end] = [end, start]; // Swap values if necessary
    }

    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    } else {
        for (let i = start; i <= end; i++) {
        sum += i;
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
