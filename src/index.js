import Example from "./scripts/example";
import Chart from "./scripts/chart";
import Data from "./scripts/office.json";

// variable to store all x axis (construction trades)
const tradeNames = [
  "Gen Reqs",
  "Demo",
  "Conc",
  "Mas",
  "Mtls",
  "Woods",
  "Therm Prot",
  "Wndws",
  "Fins",
  "Spec",
  "Furn",
  "Spec Const",
  "Conv Sys",
  "Mech/Plbg",
  "Elec",
];

// user input event listener / set input variables
let form = document.getElementById("user-input");
if (form) form.addEventListener("submit", createBudget);

// user input event handler
function createBudget(e) {
  e.preventDefault();

  const squareFootage = document.getElementsById("sf").value;
  const budget = document.getElementsById("budget").value;
  console.log(squareFootage);
  console.log(budget);
}

//

// document.addEventListener("DOMContentLoaded", () => {
//   const main = document.getElementById("main");
//   // new Example(main);
//   console.log(Data.rates["06-woodAndPlastics"]);
// });
