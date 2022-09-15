// sudoku algo

// PASS THE PARTIAL ARRAY
// RETURN TYPE BOOLEAN
// IF FALSE => ASK USER TO PUT SOME MORE DATA INSIDE
// SudokuSolver(InputArrayForBackend, 0, 0, numInput);

function SudokuSolver(arr, row, col, num) {
  // arr => array containing pertial input
  // row col starting searing point
  // num => matrix length //row length or col length
  if (row == num) {
    localStorage.setItem("SolutionArray", JSON.stringify(arr));
    return true;
  }

  let newRow = 0;
  let newCol = 0;

  if (col == arr.length - 1) {
    newCol = 0;
    newRow = row + 1;
  } else {
    newCol = col + 1;
    newRow = row;
  }
  if (arr[row][col] != "") {
    if (SudokuSolver(arr, newRow, newCol, num)) {
      return true;
    }
  } else {
    for (let c = 1; c <= num; c++) {
      if (IsTrue(arr, row, col, c)) {
        arr[row][col] = c;
        if (SudokuSolver(arr, newRow, newCol, num)) {
          return true;
        } else {
          arr[row][col] = "";
        }
      }
    }
  }
  return false;
}

function IsTrue(arr, row, col, val) {
  // horizontal check
  for (let r = 0; r < arr.length; r++) {
    if (arr[r][col] == val) {
      return false;
    }
  }

  // vertiacl
  for (let c = 0; c < arr.length; c++) {
    if (arr[row][c] == val) {
      return false;
    }
  }
  let divider = numInput / 3; // num will always be multiplier of 3 // num*num matrix
  let x = Math.floor(row / divider) * divider;
  let y = Math.floor(col / divider) * divider;

  for (let i = x; i < x + divider; i++) {
    for (let j = y; j < y + divider; j++) {
      if (arr[i][j] == val) {
        return false;
      }
    }
  }
  return true;
}




