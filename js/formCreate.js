//   CreateBox(arr);
// form creation
//   F O R M F O R I N P U T
let formDivAppend = document.getElementById("formDivAppend");
let numInput = 9;
// Input by

// IF any old input data found the form will be prefilled with those data
let InputArrayForBackend = JSON.parse(
  localStorage.getItem("InputArrayForBackend")
);

if (InputArrayForBackend == undefined) {
  InputArrayForBackend = new Array(numInput).fill(new Array(numInput).fill(""));
  localStorage.setItem(
    "InputArrayForBackend",
    JSON.stringify(InputArrayForBackend)
  );
  window.location.reload();
}

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
      div.classList.add(dynamicClassCreator(i, j, numInput));
      let inputEntry = document.createElement("input");
      inputEntry.setAttribute("class", "inputEntry");
      // inputEntry.placeholder = "empty";
      // value added for input bydefault

      if (InputArrayForBackend[i][j] != "") {
        inputEntry.value = InputArrayForBackend[i][j];
      }

      inputEntry.addEventListener("input", function (e) {
        let INumber = Number(e.target.value);
        if (!inputValidation(INumber)) {
          alert("Not a number");
          e.target.value = "";
          updateBackend(e.target.value, i, j);
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

  let titleHead = document.createElement("h3");
  titleHead.innerText = "Please fill the boxes and click proceed";

  divButton.append(titleHead, submitButton);

  bigFormInputForm.append(divButton);
  formDivAppend.innerHTML = null;
  formDivAppend.append(bigFormInputForm);
}

// CreateInputBox(numInput); // temp

document.getElementById("clickme").addEventListener("click", function () {

  CreateInputBox(numInput);
  formDivAppend.setAttribute("class", "show");
});
// input box create

// input validation
function inputValidation(e) {
  {
    for (let i = 1; i <= numInput; i++) {
      if (e == i || e == "") {
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
  let stateCheck = SudokuSolver(InputArrayForBackend, 0, 0, numInput);

  // window.location.reload();
  console.log("Window will reload", stateCheck);
  setTimeout(function () {
    formDivAppend.setAttribute("class", "hide");
    window.location.reload();
  }, 2000);
}

function dynamicClassCreator(row, col, num) {
  let mid = Math.floor(num / 3);
  let color;
  // left side horizontal
  if (row < mid && col < mid) {
    color = "redS";
  } else if (row < mid * 2 && col < mid) {
    color = "greenS";
  } else if (row < mid * 3 && col < mid) {
    color = "redS";
  }
  // mid horizontal
  else if (row < mid && col < mid * 2) {
    color = "greenS";
  } else if (row < mid * 2 && col < mid * 2) {
    color = "redS";
  } else if (row < mid * 3 && col < mid * 2) {
    color = "greenS";
  }
  // right horizontal
  else if (row < mid && col < mid * 3) {
    color = "redS";
  } else if (row < mid * 2 && col < mid * 3) {
    color = "greenS";
  } else if (row < mid * 3 && col < mid * 3) {
    color = "redS";
  }
  return color;
}
