import Example from "./scripts/example";
import Chart from "./scripts/chart";
import Data from "./scripts/office.json";
// const Chart = require("./scripts/chart");

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  // new Example(main);
  console.log(Data.rates["06-woodAndPlastics"]);
});

document.getElementById("userinputs").onClick = function () {
  let squareFootage = document.getElementById("sf").value;
  let budgetTotal = document.getElementById("budget").value;

  console.log(squareFootage);
  console.log(budgetTotal);
};
