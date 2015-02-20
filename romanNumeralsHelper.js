/*

http://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

Create a RomanNumerals helper that can convert a roman numeral to and from an integer value. The class should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000

*/

// TODO: create a RomanNumerals helper object

RomanNumerals = {
  toRoman: function(n) {

    var map = [ [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'] ];

    var result = ""

    while (n > 0) {
      for (var i = 0; i < map.length; i++) {
        var number = map[i][0];
        var symbol = map[i][1];

        if (n >= number) {
          result += symbol;
          n -= number;
          break;
        }
      }
    }

    return result;
  },

  fromRoman: function(roman) {

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

}

module.exports = RomanNumerals;