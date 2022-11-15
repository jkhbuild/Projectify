import Data from "./office.json";
import Data2 from "./office.json";
import dupData from "./data.js";
// const width = 800;
// const height = 750;
// const margin = { top: 50, bottom: 50, left: 50, right: 50 };

class Chart {
  constructor(width, height, margin) {
    this.width = width;
    this.height = height;
    this.margin = margin;
  }

  createChart(data, sf = 0) {
    for (let i = 0; i < data.length; i++) {
      data[i].rate *= sf;
    }

    this.svg = d3
      .select("#main-chart")
      .append("svg")
      .attr("height", this.height - this.margin.top - this.margin.bottom)
      .attr("width", this.width - this.margin.left - this.margin.right)
      .attr("viewBox", [0, 0, this.width, this.height]);

    this.x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([this.margin.left, this.width - this.margin.right])
      .padding(0.1);

    this.y = d3
      .scaleLinear()
      .domain([0, d3.max(data.map((e) => e.rate))])
      .range([this.height - this.margin.bottom, this.margin.top]);

    this.svg
      .append("g")
      .attr("fill", "royalblue")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => this.x(i))
      .attr("y", (d) => this.y(d.rate))
      .attr("height", (d) => this.y(0) - this.y(d.rate))
      .attr("width", this.x.bandwidth());

    function xAxis(g) {
      g.attr("transform", `translate(0, ${this.height - this.margin.bottom})`)
        .call(d3.axisBottom(this.x).tickFormat((i) => data[i].trade))
        .attr("font-size", "15px");
    }

    function yAxis(g) {
      g.attr("transform", `translate(${this.margin.left}, 0)`)
        .call(d3.axisLeft(this.y).ticks(null, data.format))
        .attr("font-size", "12px");
    }

    this.svg.append("g").call(xAxis.bind(this));
    this.svg.append("g").call(yAxis.bind(this));
    this.svg.node();
  }

  deleteChart() {
    let mainChartDiv = document.getElementById("main-chart");
    mainChartDiv.innerHTML = "";
  }

  getTotal(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].rate;
    }
    return total;
  }
}

export default Chart;
