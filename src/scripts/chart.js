import Data from "./office.json";
// import * as d3 from "d3";
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

let squareFootage;
// user input event handler
function createBudget(e) {
  e.preventDefault();

  // squareFootage = document.getElementById("sf").value;
  squareFootage = 100;
  const budget = document.getElementById("budget").value;
  createAxisLeft(Data);

  // console.log(maxHeight(rates, squareFootage));
}

// rates data from JSON
const rates = Data.rates;

// rates keys stored for x Axis
const xAxis = Object.keys(Data.rates);

// rates values stored in an array
const yAxis = Object.values(Data.rates);
console.log(yAxis);

// rates * squarefootage
for (let i = 0; i < yAxis.length; i++) {
  yAxis[i] *= squareFootage;
}
console.log(yAxis);

// Creating SVG
let svg = d3
  .select("#main-chart")
  .append("svg")
  .attr("width", 500)
  .attr("height", 800)
  .attr("transform", "translate(" + 100 + "," + 100 + ")");

// Creating Bar Chart
let y = d3.scaleLinear().range([500, 0]);

function createAxisLeft(data) {
  y.domain([0, d3.max(yAxis)]).nice();

  svg.append("g").call(d3.axisLeft(y));
  console.log(yAxis);
}
