const removeFromArray = function(sourceArray, ...args) {
    
    return sourceArray.filter(item => !args.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
