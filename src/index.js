// import "./scripts/chartrf.js";
import "./scripts/tradeselect.js";
import Data from "./scripts/office.json";
import Data2 from "./scripts/office.json";
import Chart from "./scripts/chart.js";
import dupData from "./scripts/data.js";

let dup = dupData(Data);

const width = 1400;
const height = 1000;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

let chart = new Chart(width, height, margin);
chart.createChart(dup);

// user input event listener / set input variables
let form = document.getElementById("user-input");
if (form) form.addEventListener("submit", createBudget);

// user input event handler
function createBudget(e) {
  e.preventDefault();
  const squareFootage = document.getElementById("sf").value;
  const budget = document.getElementById("budget").value;

  chart.deleteChart();
  let dup = dupData(Data);
  chart.createChart(dup, squareFootage);
  console.log(chart.getTotal(dup));
}
