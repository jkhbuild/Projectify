import Data from "./office.json";
import Data2 from "./office.json";
import dupData from "./data.js";
const width = 800;
const height = 750;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

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

    this.updateChart(data);
  }

  updateChart(data) {
    const numFor = Intl.NumberFormat("en-US");
    this.svg = d3
      .select("#main-chart")
      .append("svg")
      .attr("height", this.height - this.margin.top - this.margin.bottom)
      .attr("width", this.width)
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

    this.tooltip = d3
      .select("#tooltip")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border-radius", "5px")
      .style("position", "absolute");

    this.svg
      .append("g")
      .attr("fill", "royalblue")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => this.x(i))
      .attr("y", (d) => this.y(d.rate))
      .attr("height", (d) => this.y(0) - this.y(d.rate))
      .attr("width", this.x.bandwidth())
      .attr("class", "bar")
      .on("mousemove", (d, i) => {
        this.tooltip
          .style("opacity", 0.8)
          .html(
            `Total: $ ${numFor.format(i.rate)}` +
              "</br>" +
              `Material: $ ${numFor.format(Math.floor(i.rate * 0.4))}` +
              "</br>" +
              `Labor: $ ${numFor.format(Math.floor(i.rate * 0.6))}`
          )
          .style("left", `${d.x + 15}px`)
          .style("top", `${d.y + 15}px`)
          .style("border", "2px solid")
          .style("font-size", "22px");
        // .style("left", `${d3.pointer(d)[0]}px`)
        // .style("top", `${d3.pointer(d)[1]}px`);
        console.log(d);
      })
      .on("mouseleave", (d) => {
        this.tooltip.style("opacity", 0);
      });
    // .on("mousemove", function (d) {
    //   d3.select("#tooltip");
    // });

    function xAxis(g) {
      g.attr("transform", `translate(0, ${this.height - this.margin.bottom})`)
        .call(d3.axisBottom(this.x).tickFormat((i) => data[i].trade))
        .attr("font-size", "20px");
    }

    function yAxis(g) {
      g.attr("transform", `translate(${this.margin.left}, 0)`)
        .call(d3.axisLeft(this.y).ticks(null, data.format))
        .attr("font-size", "20px");
    }

    this.svg.append("g").call(xAxis.bind(this));
    this.svg.append("g").call(yAxis.bind(this));
    this.svg.node();
  }

  deleteChart() {
    let mainChartDiv = document.getElementById("main-chart");
    mainChartDiv.innerHTML = "";
  }

  getTotal(data, budget) {
    const totaldiv = document.getElementById("total-value");
    const budgetdiv = document.getElementById("budget-value");
    const deltadiv = document.getElementById("delta-value");
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].rate;
    }

    const numFor = Intl.NumberFormat("en-US");
    const newTotal = numFor.format(total);
    const newBudget = numFor.format(budget);
    const newDelta = numFor.format(budget - total);
    totaldiv.innerHTML = `$${newTotal}`;
    budgetdiv.innerHTML = `$${newBudget}`;
    deltadiv.innerHTML = `$${newDelta}`;

    const deltaContainer = document.getElementById("delta-display-container");
    if (budget - total < 0) {
      deltaContainer.style.borderBottomColor = "red";
    } else {
      deltaContainer.style.borderBottomColor = "green";
    }
  }
}

export default Chart;
