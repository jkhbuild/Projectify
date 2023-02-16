import dupData from "./data";
import Data from "./office.json";
import Chart from "./chart.js";

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

function resetTrades() {
  for (let i = 0; i < excluded.length; i++) {
    move = document.getElementById(excluded[i].trade);
    tradesSelectedDiv.appendChild(move);
  }
  excluded = [];
}

export { excludeTrade, includeTrade, resetTrades };
