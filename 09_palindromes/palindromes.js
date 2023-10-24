const palindromes = function (str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Check if the cleaned string is the same when reversed
  const reversedStr = cleanStr.split('').reverse().join('');
  
  return cleanStr === reversedStr;
}

// Do not edit below this line
module.exports = palindromes;
