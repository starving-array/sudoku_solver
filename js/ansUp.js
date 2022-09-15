// A N S W E R H O M E 

// for now n is by ddefault 9

// SolutionArray 
// let SolutionArray = localStorage.setItem("SolutionArray", JSON.stringify(new Array(numInput).fill(new Array(numInput).fill(""))))

// get data from previus solution if any
let SolutionArray =  JSON.parse(localStorage.getItem("SolutionArray"));

//If no, add n*n blank box => not editable => for view only
if(SolutionArray==undefined){
  localStorage.setItem("SolutionArray", JSON.stringify(new Array(numInput).fill(new Array(numInput).fill(""))));
  // window.location.reload();
}

// function to create selement box on home page
let masterBox = document.getElementById("container");
// C O N T A I N E R B O X

function CreateBox() {
  console.log("Solution starting");
  let solution = JSON.parse(localStorage.getItem("SolutionArray"));
  solution.forEach(function (elem, index) {
    // row of sudoku
    let big = document.createElement("div");
    big.setAttribute("class", "bigDiv");

    // small box creating
    elem.forEach(function (elem2, index2) {
      let divSmall = document.createElement("div");
      divSmall.setAttribute("class", "divSmall");
      divSmall.classList.add(dynamicClassCreator(index, index2, numInput));
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


function dynamicClassCreator(row,col, num){
  let mid = Math.floor(num/3);
  let color;
  // left side horizontal
  if(row<mid && col<mid)
  {
      color = "redS";
  }
  else if(row<mid*2 && col<mid)
  {
    color = "greenS"
  }
  else if(row<mid*3 && col<mid)
  {
    color = "redS";
  }
  // mid horizontal
  else if(row<mid && col<mid*2)
  {
    color = "greenS";
  }
  else if(row<mid*2 && col<mid*2)
  {
    color = "redS";
  }
  else if(row<mid*3 && col<mid*2)
  {
    color = "greenS";
  }
  // right horizontal
  else if(row<mid && col<mid*3)
  {
    color = "redS";
  }
  else if(row<mid*2 && col<mid*3)
  {
    color = "greenS";
  }
  else if(row<mid*3 && col<mid*3)
  {
    color = "redS";
  }
  return color;
}