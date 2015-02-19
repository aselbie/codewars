/*

http://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

solution('XXI'); // should return 21

*/

function solution(roman) {

  map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

  sum = 0;

  for (var i = 0; i < roman.length; i++) {

    var cur = map[roman[i]];
    var next = map[roman[i + 1]] || 0;

    if (cur < next) {
      sum += next - cur;
      i++;
    } else {
      sum += cur;
    }
    
  };

  return sum;
}

module.exports = solution;