const leapYears = function(year) {

    let remainder4 = year % 4;
    let remainder100 = year % 100;
    let remainder400 = year % 400;

    if (remainder4 !== 0) {return false;
    } else if (remainder400 === 0) {return true;
    } else if (remainder100 === 0) {return false;
    } else return true;

};

// Do not edit below this line
module.exports = leapYears;
