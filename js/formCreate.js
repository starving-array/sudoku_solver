//   CreateBox(arr);
// form creation
//   F O R M F O R I N P U T
function CreateInputBox(num) {
  for (let i = 0; i < num; i++) {
    let big = document.createElement("form");
    big.setAttribute("class", "bigForm");
    for (let j = 0; j < num; j++) {
      // inputInsideDiv
      let div = document.createElement("div");
      div.setAttribute("class", "inputInsideDiv");
      // inputEntry
      let inputEntry = document.createElement("input");
      inputEntry.setAttribute("class", "inputEntry");
      inputEntry.addEventListener("input", function (e) {
        let INumber = Number(e.target.value);
        let s = inputValidation(INumber);
        if (s != true) {
          alert("Not a number");
          e.target.value = "";
        }
      });
      div.append(inputEntry);
      big.append(div);
    }
    masterBox.append(big);
  }
}

// input box create
CreateInputBox(n);

// input validation
function inputValidation(e) {
  {
    console.log(e + 10);
    for (let i = 1; i <= n; i++) {
      if (e == i) {
        return true;
      }
    }
    return false;
  }
}
