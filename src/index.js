// import "./scripts/chartrf.js";
import "./scripts/tradeselect.js";
import Data from "./scripts/office.json";
import Chart from "./scripts/chart.js";

const width = 850;
const height = 750;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

let chart = new Chart(width, height, margin);
chart.createChart(Data);

// user input event listener / set input variables
let form = document.getElementById("user-input");
if (form) form.addEventListener("submit", createBudget);

// user input event handler
function createBudget(e) {
  e.preventDefault();
  const squareFootage = document.getElementById("sf").value;
  const budget = document.getElementById("budget").value;
}

console.log(Data);
