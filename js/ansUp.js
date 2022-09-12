// A N S W E R H O M E 
let n = 9; // dynamic based on user selection
// for now n is by ddefault 9

let arr = new Array(n).fill(new Array(n).fill(n));
let masterBox = document.getElementById("container");

// function to create selement box on home page
function CreateBox(arr) {
  arr.forEach(function (elem, index) {
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

