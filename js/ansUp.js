// A N S W E R H O M E 
let n = 9; // dynamic based on user selection
// for now n is by ddefault 9

let arr = new Array(n).fill(new Array(n).fill(0));

// SolutionArray 
let SolutionArray = JSON.parse(localStorage.getItem("SolutionArray")) || null;
// function to create selement box on home page
let masterBox = document.getElementById("container");
// C O N T A I N E R B O X


function CreateBox(solution) {
  solution.forEach(function (elem, index) {
    // row of sudoku
    let big = document.createElement("div");
    big.setAttribute("class", "bigDiv");

    // small box creating
    elem.forEach(function (elem2, index2) {
      let divSmall = document.createElement("div");
      divSmall.setAttribute("class", "divSmall");
      big.append(divSmall);
    });
    masterBox.append(big);
  });
}
// <<<<<<<<<<<<<<--------------------------------->>>>>>>>>>>>>>>>>>>>>>

