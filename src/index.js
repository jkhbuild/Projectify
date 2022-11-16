// import "./scripts/chartrf.js";
// import "./scripts/tradeselect.js";
import Data from "./scripts/office.json";
import Data2 from "./scripts/office.json";
import Chart from "./scripts/chart.js";
import dupData from "./scripts/data.js";
// import { excludeTrade, includeTrade } from "./scripts/tradeselect.js";

//creating an empty chart
let dup = dupData(Data);

const width = 1500;
const height = 1000;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

let chart = new Chart(width, height, margin);
chart.createChart(dup);
dup = dupData(Data);

// user input event listener / set input variables
let form = document.getElementById("user-input");
if (form) form.addEventListener("submit", createBudget);
let squareFootage;

// user input event handler
function createBudget(e) {
  e.preventDefault();
  squareFootage = document.getElementById("sf").value;
  const budget = document.getElementById("budget").value;

  chart.deleteChart();
  dup = dupData(Data);
  chart.createChart(dup, squareFootage);
}

//user selection event listener - exclude x-Axis category
const tradesExcludedDiv = document.getElementById("trades-excluded");
const tradesSelectedDiv = document.getElementById("trade-selector");
let excluded = [];
if (tradesSelectedDiv) {
  tradesSelectedDiv.addEventListener("click", excludeTrade);
}
function excludeTrade(e) {
  let clicked = e.target;
  if (clicked.className === "trade") {
    console.log(dup);
    tradesExcludedDiv.appendChild(e.target);
    for (let i = 0; i < dup.length; i++) {
      if (dup[i].trade === clicked.id) {
        excluded.push(dup[i]);
        dup = dup.slice(0, i).concat(dup.slice(i + 1));
        console.log(excluded);
        console.log(dup);
      }
    }
    chart.deleteChart();
    chart.updateChart(dup);
  }
}

//user selection event listener - include x-Axis category
let tradesExcluded = document.getElementById("trades-excluded");
if (tradesExcluded) {
  tradesExcluded.addEventListener("click", includeTrade);
}
function includeTrade(e) {
  let clicked = e.target;
  if (clicked.className === "trade") {
    tradesSelectedDiv.appendChild(e.target);
    for (let i = 0; i < excluded.length; i++) {
      if (excluded[i].trade === clicked.id) {
        dup.push(excluded[i]);
        excluded = excluded.slice(0, i).concat(excluded.slice(i + 1));
        console.log(excluded);
        console.log(dup);
      }
    }
    chart.deleteChart();
    chart.updateChart(dup);
  }
}
