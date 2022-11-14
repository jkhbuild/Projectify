// import "./scripts/chartrf.js";
import "./scripts/tradeselect.js";
import Data from "./scripts/office.json";
import { _ } from "core-js";

// document.addEventListener("DOMContentLoaded", () => {
const width = 800;
const height = 400;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

const svg = d3
  .select("#main-chart")
  .append("svg")
  .attr("height", height - margin.top - margin.bottom)
  .attr("width", width - margin.left - margin.right)
  .attr("viewbox", [0, 0, width, height]);

const x = d3
  .scaleBand()
  .domain(d3.range(Data.length))
  .range([margin.left, width - margin.right])
  .padding(0.1);

const y = d3
  .scaleLinear()
  .domain([0, 100])
  .range([height - margin.bottom, margin.top]);

svg
  .append("g")
  .attr("fill", "royalblue")
  .selectAll("rect")
  .data(Data)
  .join("rect")
  .attr("x", (d, i) => x(i))
  .attr("y", (d) => y(d.rate))
  .attr("height", (d) => y(0) - y(d.rate))
  .attr("width", x.bandwidth());

function xAxis(g) {
  g.attr("transform", "translate(0, $(height-marginBottom})")
    .call(d3.axisBottom(x).tickFormat((i) => Data[i].trade))
    .attr("font-size", "5px");
}

function yAxis(g) {
  g.attr("transform", "translate(${margin.left}, 0)")
    .call(d3.axisLeft(y).ticks(null, Data.format))
    .attr("font-size", "5px");
}

svg.append("g").call(yAxis);
svg.append("g").call(xAxis);
svg.node();
// });
