const fibonacci = function(n) {
    let number = n
        if (isNaN(n) || n < 0) {
          return "OOPS"; // Handle negative numbers and non-numeric input
        }
        n = parseInt(n, 10); // Convert to a number
      
        if (n <= 0) {
          return 0; // The 0th member of the sequence is 0
        } else if (n === 1 || n === 2) {
          return 1; // The 1st and 2nd members of the sequence are both 1
        } else {
          return fibonacci(n - 1) + fibonacci(n - 2);
        }
      
      
};

// Do not edit below this line
module.exports = fibonacci;
