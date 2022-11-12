import Example from "./scripts/example";
import Chart from "./scripts/chart";
import Data from "./scripts/office.json";
// const Chart = require("./scripts/chart");

// user input event listener / set input variables
document.getElementById("user-input").addEventListener("submit", createBudget);

// user input event handler
function createBudget(e) {
  e.preventDefault();

  const squareFootage = document.getElementsById("sf");
  const budget = document.getElementsById("budget");
}

// document.addEventListener("DOMContentLoaded", () => {
//   const main = document.getElementById("main");
//   // new Example(main);
//   console.log(Data.rates["06-woodAndPlastics"]);
// });
