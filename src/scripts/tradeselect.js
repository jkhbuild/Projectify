import dupData from "./data";
import Data from "./office.json";
import Chart from "./chart.js";

// chart = new Chart();
// const tradesExcludedDiv = document.getElementById("trades-excluded");
// const tradesSelectedDiv = document.getElementById("trade-selector");
// const excluded = [];

// if (tradesSelectedDiv) {
//   tradesSelectedDiv.addEventListener("click", excludeTrade);
// }

// function excludeTrade(e) {
//   let clicked = e.target;
//   if (clicked.className === "trade") {
//     tradesExcludedDiv.appendChild(e.target);
//   }
//   let dup = dupData(Data);
//   for (let i = 0; i < dup.length; i++) {
//     if (dup[i].trade === clicked.id) {
//       dup = dup.splice(0, i).concat(dup.splice(i + 1));
//       console.log(dup);
//     }
//   }
//   chart.deleteChart();
//   chart.createChart(dup, squareFootage);
// }

// let tradesExcluded = document.getElementById("trades-excluded");
// if (tradesExcluded) tradesExcluded.addEventListener("click", includeTrade);

// function includeTrade(e) {
//   let clicked = e.target;
//   console.log(clicked.classList);
//   if (clicked.className === "trade") {
//     tradesSelectedDiv.appendChild(e.target);
//   }
// }

// const tradesExcludedDiv = document.getElementById("trades-excluded");
// const tradesSelectedDiv = document.getElementById("trade-selector");
// let excluded = [];

// if (tradesSelectedDiv) {
//   tradesSelectedDiv.addEventListener("click", excludeTrade);
// }
function excludeTrade(e) {
  let clicked = e.target;
  if (clicked.className === "trade") {
    tradesExcludedDiv.appendChild(e.target);
    for (let i = 0; i < dup.length; i++) {
      if (dup[i].trade === clicked.id) {
        excluded.push(dup[i]);
        dup = dup.slice(0, i).concat(dup.slice(i + 1));
      }
    }
    chart.deleteChart();
    if (dup.length === 15) {
      chart.createChart(dup, squareFootage);
    } else {
      chart.updateChart(dup);
    }
  }
}

// let tradesExcluded = document.getElementById("trades-excluded");
// if (tradesExcluded) tradesExcluded.addEventListener("click", includeTrade);
function includeTrade(e) {
  let clicked = e.target;
  if (clicked.className === "trade") {
    tradesSelectedDiv.appendChild(e.target);
    for (let i = 0; i < excluded.length; i++) {
      if (excluded[i].trade === clicked.id) {
        dup.push(excluded[i]);
        excluded = excluded.slice(0, i).concat(excluded.slice(i + 1));
      }
    }
    chart.deleteChart();
    chart.updateChart(dup);
  }
}

// moves all excluded trades back into included.
function resetTrades() {
  for (let i = 0; i < excluded.length; i++) {
    move = document.getElementById(excluded[i].trade);
    tradesSelectedDiv.appendChild(move);
  }
  excluded = [];
}

export { excludeTrade, includeTrade, resetTrades };
