//   CreateBox(arr);
// form creation
//   F O R M F O R I N P U T
let formDivAppend = document.getElementById("formDivAppend");
let numInput = 9;


// IF any old input data found the form will be prefilled with those data
let InputArrayForBackend =
  JSON.parse(localStorage.getItem("InputArrayForBackend")) ||
  new Array(numInput).fill(new Array(numInput).fill("empty"));

function CreateInputBox(num) {
  for (let i = 0; i < num; i++) {
    let big = document.createElement("form");
    big.setAttribute("class", "bigForm");
    big.addEventListener("submit", function(fom){
        formSubmit(fom);
    })
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
        }else{
            // update localStorage 
            // backed user input with previous data
            updateBackend(INumber, i, j);
        }
      });
      div.append(inputEntry);
      big.append(div);
    }
    formDivAppend.append(big);
  }
}

// input box create
CreateInputBox(n);

// input validation
function inputValidation(e) {
  {
    for (let i = 1; i <= n; i++) {
      if (e == i) {
        return true;
      }
    }
    return false;
  }
}

function updateBackend(number, row, col){
    InputArrayForBackend[row][col] = number;
    localStorage.setItem("InputArrayForBackend", JSON.stringify(InputArrayForBackend));
}


// form onclick function
// data sent for solution
// process mode
// let form  = document.querySelector("#bigForm");
function formSubmit(e){
    e.preventDefault();
    
}