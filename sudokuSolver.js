/*

http://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript

Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

var puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]]

*/

function sudoku(puzzle) {

  var total = 0;

  // Initialize possible options for empty squares
  puzzle.forEach(function(row, y){
    row.forEach(function(square, x){
      total += square;
      if (square === 0) {
        puzzle[y][x] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      }
    })
  });

  var removeNumber = function(y, x, num) {
    var possible = puzzle[y][x];
    if (Array.isArray(possible)) {
      var pos = possible.indexOf(num);
      if (pos > -1) {
        possible.splice(pos, 1);
      }
    }
    if (possible.length === 1) {
      total += possible[0];
      puzzle[y][x] = possible[0];
    }
  };

  var checkRow = function(y, num) {
    for (var i = 0; i < puzzle[y].length; i++) {
      removeNumber(y, i, num);
    };
  }

  var checkByRow = function() {
    puzzle.forEach(function(row, y){
      row.forEach(function(num){
        checkRow(y, num);
      })
    });
  };

  var checkColumn = function(x, num) {
    for (var i = 0; i < puzzle.length; i++) {
      removeNumber(i, x, num);
    };
  }

  var checkByColumn = function() {
    puzzle.forEach(function(row){
      row.forEach(function(num, x){
        checkColumn(x, num);
      })
    });
  };

  var checkGroup = function(groupY, groupX, num) {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        removeNumber(groupY + i, groupX + j, num);
      };
    };
  }

  var checkbyGroup = function() {
    puzzle.forEach(function(row, y){
      row.forEach(function(num, x){
        var groupY = Math.floor(y / 3) * 3;
        var groupX = Math.floor(x / 3) * 3;
        checkGroup(groupY, groupX, num);
      })
    });
  }

  while (total < 405) {
    checkByRow();
    checkByColumn();
    checkbyGroup();
  }

  return puzzle;
};

module.exports = sudoku;