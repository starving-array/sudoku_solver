// sudoku algo

// PASS THE PARTIAL ARRAY
// RETURN TYPE BOOLEAN
// IF FALSE => ASK USER TO PUT SOME MORE DATA INSIDE
SudokuSolver(InputArrayForBackend, 0, 0, numInput);

function SudokuSolver(arr, row, col, num) {
  // arr => array containing pertial input
  // row col starting searing point
  // num => matrix length //row length or col length
  for(let i = 0; i<arr.length; i++)
  {
  }
  if (row == num) {
    localStorage.setItem("SolutionArray", JSON.stringify(arr));
    console.log(arr[0]);
    console.log("array")
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


// A N S W E R H O M E 

// for now n is by ddefault 9

// SolutionArray 
// let SolutionArray = localStorage.setItem("SolutionArray", JSON.stringify(new Array(numInput).fill(new Array(numInput).fill(""))))
let SolutionArray =  JSON.parse(localStorage.getItem("SolutionArray"));
if(SolutionArray==undefined){
  localStorage.setItem("SolutionArray", JSON.stringify(new Array(numInput).fill(new Array(numInput).fill(""))));
  // window.location.reload();
}
console.log(SolutionArray)
// function to create selement box on home page
let masterBox = document.getElementById("container");
// C O N T A I N E R B O X


function CreateBox() {
  console.log("Solution starting");
  let solution = JSON.parse(localStorage.getItem("SolutionArray"));
  console.log(solution)
  solution.forEach(function (elem, index) {
    // row of sudoku
    let big = document.createElement("div");
    big.setAttribute("class", "bigDiv");

    // small box creating
    elem.forEach(function (elem2, index2) {
      let divSmall = document.createElement("div");
      divSmall.setAttribute("class", "divSmall");

      let spanAns = document.createElement("span");
      spanAns.innerText = elem2;
      divSmall.append(spanAns);

      big.append(divSmall);
    });
    masterBox.append(big);
  });
}


if(SolutionArray.length!=0)
{
  CreateBox();
}
// <<<<<<<<<<<<<<--------------------------------->>>>>>>>>>>>>>>>>>>>>>


