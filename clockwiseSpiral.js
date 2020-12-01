// Given a matrix, write a function clockwiseSpiral(matrix) that takes the matrix as an input and prints it in clockwise spiral form. See the following examples. 
// Examples:
// Input:
// [[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12],
// [13, 14, 15, 16]]
// Output:
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

function clockwiseSpiral(matrix) {
  let arr = [];
  // if needed to save incoming matrix we have to use matrixTest instead of matrix
  // matrixTest = matrix.slice();

  if (matrix.length == 0) return '';
  if (!Array.isArray(matrix[0])) return matrix.join(' ');
  if (matrix.length > 0) {
    // matrix = getFirstRow(matrix);
    // matrix = getLastColumn(matrix);
    // matrix = getLastRow(matrix);
    // matrix = getFirstColumn(matrix);
    // or
    matrix = getFirstColumn(getLastRow(getLastColumn(getFirstRow(matrix))));

    while (matrix.length > 0) {
      arr = arr.concat(clockwiseSpiral(matrix));
    }

    return arr.join(' ');

    function getFirstRow(matrix) {
      for (let i = 0; i <= matrix.length -1; i++) {
        for (let j = 0; j <= matrix[i].length - 1; j++) {
          if (i == 0) {
            arr.push(matrix[i][j]);
          }
        }
      }
      matrix.shift(matrix[0]);

      return matrix;
    }
    
    function getLastColumn(matrix) {
      for (let item of matrix) {
        arr.push(item.pop());
      }

      return matrix;
    }

    function getLastRow(matrix) {
      if (matrix.length != 0) {
        for (let item of matrix.pop().reverse()) {
          arr.push(item);
        }
      }

      return matrix;
    }

    function getFirstColumn(matrix) {
      for (let i= matrix.length -1; i >= 0; i--) {
        arr.push(matrix[i].shift());
      }

      return matrix;
    }

    // return arr.join(' ');
  } 
}

let matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];

// matrix = [[1, 2, 3, 4],
// [12, 13, 14, 5],
// [11, 16, 15, 6],
// [10, 9, 8, 7]];

// matrix = [[1, 2, 3, 4, 5],
// [16, 17, 18, 19, 6],
// [15, 24, 25, 20, 7],
// [14, 23, 22, 21, 8],
// [13, 12, 11, 10, 9]];

// matrix = [
//   [1, 2, 3, 4, 5, 6, 7],
//   [24, 25, 26, 27, 28, 29, 8],
//   [23, 40, 41, 42, 43, 30, 9],
//   [22, 39, 48, 49, 44, 31, 10],
//   [21, 38, 47, 46, 45, 32, 11],
//   [20, 37, 36, 35, 34, 33, 12],
//   [19, 18, 17, 16, 15, 14, 13]
// ]

// matrix = [];

// matrix = [1];

// matrix = [[1, 2],
// [4, 3]];

// matrix = [[1, 2],
// [6, 3],
// [5, 4]];

console.log(clockwiseSpiral(matrix));