import dupData from "./data";
import Data from "./office.json";
import Chart from "./chart.js";

// chart = new Chart();
const tradesExcludedDiv = document.getElementById("trades-excluded");
const tradesSelectedDiv = document.getElementById("trade-selector");
const excluded = [];

if (tradesSelectedDiv) {
  tradesSelectedDiv.addEventListener("click", excludeTrade);
}

function excludeTrade(e) {
  let clicked = e.target;
  if (clicked.className === "trade") {
    tradesExcludedDiv.appendChild(e.target);
  }
  let dup = dupData(Data);
  for (let i = 0; i < dup.length; i++) {
    if (dup[i].trade === clicked.id) {
      dup = dup.splice(0, i).concat(dup.splice(i + 1));
      console.log(dup);
    }
  }
  chart.deleteChart();
  chart.createChart(dup, squareFootage);
}

let tradesExcluded = document.getElementById("trades-excluded");
if (tradesExcluded) tradesExcluded.addEventListener("click", includeTrade);

function includeTrade(e) {
  let clicked = e.target;
  console.log(clicked.classList);
  if (clicked.className === "trade") {
    tradesSelectedDiv.appendChild(e.target);
  }
}

export default userinput;
