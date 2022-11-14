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

// user input event handler
function createBudget(e) {
  e.preventDefault();
  const squareFootage = document.getElementById("sf").value;
  const budget = document.getElementById("budget").value;

  // y-Axis values
  console.log(Data.rates);
  const yAxis = Object.values(Data.rates);
  for (let i = 0; i < yAxis.length; i++) {
    yAxis[i] *= squareFootage;
  }

  // x-Axis values
  const xAxis = Object.keys(Data.rates);

  // Creating SVG
  let HEIGHT = 500;
  let WIDTH = 500;
  let margin = { top: 30, right: 0, bottom: 60, left: 30 };
  let svg = d3
    .select("#main-chart")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("transform", "translate(" + 100 + "," + 100 + ")");

  // Creating y-Axis
  let yScale = d3.scaleLinear().range([500, 0]);

  function createAxisLeft(data) {
    yScale.domain([0, d3.max(yAxis)]).nice();

    svg.append("g").call(d3.axisLeft(yScale));
  }
  console.log(yAxis);
  console.log(xAxis);
  createAxisLeft(Data);

  //Creating x-Axis
  let xScale = d3.scaleBand().range([0, 500]).padding(0.2);

  function createAxisBottom(data) {
    xScale.domain(xAxis);

    const text = svg
      .append("g")
      .attr("transform", `translate(0, 500)`)
      .call(d3.axisBottom(xScale));
  }

  createAxisBottom(Data);

  function createBars(data) {
    let bars = svg
      .selectAll(".bars")
      .data(xAxis)
      .enter()
      .append("g")
      .attr("class", "bars")
      .style("opacity", 1);

    bars
      .append("rect")
      .attr("class", "bar")
      .attr("x", xAxis)
      .attr("y", 0)
      .attr("width", xScale.bandwidth())
      .attr("height", 0)
      .style("fill", "steelblue")
      .transition()
      .duration(750)
      .attr("y", (d) => yScale(yAxis))
      .attr("height", (d) => HEIGHT - yScale(d.value));
    console.log(yScale);
  }

  createBars(Data);
}
