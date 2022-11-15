// const svg = d3
//   .select("#main-chart")
//   .append("svg")
//   .attr("height", height - margin.top - margin.bottom)
//   .attr("width", width - margin.left - margin.right)
//   .attr("viewBox", [0, 0, width, height]);

// const x = d3
//   .scaleBand()
//   .domain(d3.range(Data.length))
//   .range([margin.left, width - margin.right])
//   .padding(0.1);

// const y = d3
//   .scaleLinear()
//   .domain([0, d3.max(Data.map((e) => e.rate))])
//   .range([height - margin.bottom, margin.top]);

// svg
//   .append("g")
//   .attr("fill", "royalblue")
//   .selectAll("rect")
//   .data(Data)
//   .join("rect")
//   .attr("x", (d, i) => x(i))
//   .attr("y", (d) => y(d.rate))
//   .attr("height", (d) => y(0) - y(d.rate))
//   .attr("width", x.bandwidth());

// function xAxis(g) {
//   // g.attr("transform", "translate(0, ${height - margin.bottom})");
//   g.attr("transform", `translate(0, ${height - margin.bottom})`)
//     .call(d3.axisBottom(x).tickFormat((i) => Data[i].trade))
//     .attr("font-size", "12px");
// }

// function yAxis(g) {
//   g.attr("transform", `translate(${margin.left}, 0)`)
//     .call(d3.axisLeft(y).ticks(null, Data.format))
//     .attr("font-size", "16px");
// }

// svg.append("g").call(yAxis);
// svg.append("g").call(xAxis);
// svg.node();

// // user input event listener / set input variables
// let form = document.getElementById("user-input");
// if (form) form.addEventListener("submit", createBudget);

// // user input event handler
// function createBudget(e) {
//   e.preventDefault();
//   const squareFootage = document.getElementById("sf").value;
//   const budget = document.getElementById("budget").value;
// }
