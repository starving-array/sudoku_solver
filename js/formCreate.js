//   CreateBox(arr);
// form creation
//   F O R M F O R I N P U T
let formDivAppend = document.getElementById("formDivAppend");
let numInput = 9;
// Input by

// IF any old input data found the form will be prefilled with those data
let InputArrayForBackend =
  JSON.parse(localStorage.getItem("InputArrayForBackend")) ||
  new Array(numInput).fill(new Array(numInput).fill(""));

function CreateInputBox(num) {
  // form Element
  let bigFormInputForm = document.createElement("form");
  bigFormInputForm.setAttribute("class", "bigFormInputForm");
  bigFormInputForm.addEventListener("submit", function (ele) {
    formSubmit(ele);
  });

  for (let i = 0; i < num; i++) {
    let big = document.createElement("div");
    big.setAttribute("class", "bigForm");

    for (let j = 0; j < num; j++) {
      // inputInsideDiv
      let div = document.createElement("div");
      div.setAttribute("class", "inputInsideDiv");
      // inputEntry

      let inputEntry = document.createElement("input");
      inputEntry.setAttribute("class", "inputEntry");
      // value added for input bydefault

      inputEntry.value = InputArrayForBackend[i][j];

      inputEntry.addEventListener("input", function (e) {
        let INumber = Number(e.target.value);
        if (!inputValidation(INumber)) {
          alert("Not a number");
          e.target.value = "";
        } else {
          // update localStorage
          // backed user input with previous data
          updateBackend(INumber, i, j);
        }
      });
      div.append(inputEntry);
      big.append(div);
    }
    bigFormInputForm.append(big);
  }
  let divButton = document.createElement("div");
  divButton.setAttribute("class", "divButton");
  let submitButton = document.createElement("button");
  submitButton.innerText = "Proceed";
  divButton.append(submitButton);

  bigFormInputForm.append(divButton);

  formDivAppend.append(bigFormInputForm);
}

document.getElementById("clickme").addEventListener("click", function () {
  CreateInputBox(numInput);
});
// input box create

// input validation
function inputValidation(e) {
  {
    for (let i = 1; i <= numInput; i++) {
      if (e == i) {
        return true;
      }
    }
    return false;
  }
}

function updateBackend(number, row, col) {
  InputArrayForBackend[row][col] = number;
  localStorage.setItem(
    "InputArrayForBackend",
    JSON.stringify(InputArrayForBackend)
  );
}

// form onclick function
// data sent for solution
// process mode
// let form  = document.querySelector("#bigForm");
function formSubmit(e) {
  e.preventDefault();
  // pass the InputArr to logic =>Suduko
  // if false throw alert => incomplete  input
  // hide form window and show result
  SudokuSolver(InputArrayForBackend, 0, 0, numInput);
  window.location.reload();
}
