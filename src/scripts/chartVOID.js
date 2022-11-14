// // CREATE SVG
// let HEIGHT = 500;
// let WIDTH = 500;
// let margin = { top: 30, right: 0, bottom: 30, left: 30 };
// let svg = d3
//   .select("#main-chart")
//   .append("svg")
//   .attr("height", HEIGHT - margin.top - margin.bottom)
//   .attr("width", WIDTH - margin.left - margin.right)
//   .attr("transform", "translate(" + 100 + "," + 100 + ")");

// // CREATING Y-AXIS
// let yScale = d3.scaleLinear().range([HEIGHT, 0]);

// function createAxisLeft(yAxis) {
//   yScale.domain([0, d3.max(yAxis)]).nice();

//   svg.append("g").call(d3.axisLeft(yScale));
// }

// //CREATING X-AXIS
// let xScale = d3.scaleBand().range([0, WIDTH]).padding(0.2);

// function createAxisBottom(xAxis) {
//   xScale.domain(xAxis);

//   const text = svg
//     .append("g")
//     .attr("transform", `translate(0, 500)`)
//     .call(d3.axisBottom(xScale));
// }

// //CREATING BARS
// function createBars(data) {
//   let bars = svg
//     .selectAll(".bars")
//     .data(data, (d) => d.trade)
//     .enter()
//     .append("g")
//     .attr("class", "bars")
//     .style("opacity", 1);

//   bars
//     .append("rect")
//     .attr("class", "bar")
//     .attr("x", (d) => xScale(d.trade))
//     .attr("y", (d) => yScale(0))
//     .attr("width", xScale.bandwidth())
//     .attr("height", 0)
//     .style("fill", "steelblue")
//     .transition()
//     .duration(750)
//     .attr("y", (d) => yScale(d.rate))
//     .attr("height", (d) => HEIGHT - yScale(d.rate));

//   svg.node();
// }

// // user input event listener / set input variables
// let form = document.getElementById("user-input");
// if (form) form.addEventListener("submit", createBudget);

// // user input event handler
// function createBudget(e) {
//   e.preventDefault();
//   const squareFootage = document.getElementById("sf").value;
//   const budget = document.getElementById("budget").value;

//   // define xAxis and yAxis
//   const xAxis = [];
//   const yAxis = [];
//   Data.forEach((el) => {
//     xAxis.push(el.trade);
//     yAxis.push(el.rate);
//   });

//   // y-Axis values
//   for (let i = 0; i < yAxis.length; i++) {
//     yAxis[i] *= squareFootage;
//   }

//   createAxisLeft(yAxis);
//   createAxisBottom(xAxis);
//   createBars(Data);

//   console.log(yAxis);
//   console.log(xAxis);
//   console.log(yScale);
//   console.log(xScale);
// }

// let tradesSelected = document.getElementById("trade-button");
// if (tradesSelected) tradesSelected.addEventListener("click", addTrade);

// function addTrade(e) {
//   e.preventDefault;
// }
// import "./scripts/chartrf.js";
