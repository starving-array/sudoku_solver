// // A N S W E R H O M E 

// // for now n is by ddefault 9

// // SolutionArray 
// let SolutionArray = JSON.parse(localStorage.getItem("SolutionArray")) || null;
// // function to create selement box on home page
// let masterBox = document.getElementById("container");
// // C O N T A I N E R B O X


// function CreateBox(solution) {
//   solution.forEach(function (elem, index) {
//     // row of sudoku
//     let big = document.createElement("div");
//     big.setAttribute("class", "bigDiv");

//     // small box creating
//     elem.forEach(function (elem2, index2) {
//       let divSmall = document.createElement("div");
//       divSmall.setAttribute("class", "divSmall");

//       let spanAns = document.createElement("span");
//       spanAns.innerText = elem2;
//       divSmall.append(spanAns);

//       big.append(divSmall);
//     });
//     masterBox.append(big);
//   });
// }

// if(SolutionArray!=null)
// {
//   CreateBox(SolutionArray);
// }
// // <<<<<<<<<<<<<<--------------------------------->>>>>>>>>>>>>>>>>>>>>>

