/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_office_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/office.json */ \"./src/scripts/office.json\");\n/* harmony import */ var _scripts_chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/chart.js */ \"./src/scripts/chart.js\");\n/* harmony import */ var _scripts_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/data.js */ \"./src/scripts/data.js\");\n// import \"./scripts/chartrf.js\";\n// import \"./scripts/tradeselect.js\";\n\n\n\n\n// import { excludeTrade, includeTrade } from \"./scripts/tradeselect.js\";\n\nconst modal = document.getElementById(\"user-instructions\");\nconst button = document.getElementById(\"modal-button\");\nconst closeButton = document.getElementById(\"close-button\");\nbutton.onclick = function () {\n  modal.style.display = \"block\";\n};\ncloseButton.onclick = function () {\n  modal.style.display = \"none\";\n};\nwindow.onclick = function (event) {\n  if (event.target === modal) {\n    modal.style.display = \"none\";\n  }\n};\n\n//creating an empty chart\nlet dup = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_scripts_office_json__WEBPACK_IMPORTED_MODULE_0__);\nconst width = 1500;\nconst height = 760;\nconst margin = {\n  top: 50,\n  bottom: 50,\n  left: 50,\n  right: 50\n};\nlet chart = new _scripts_chart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](width, height, margin);\nchart.createChart(dup);\ndup = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_scripts_office_json__WEBPACK_IMPORTED_MODULE_0__);\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\nlet squareFootage;\nlet budget;\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  squareFootage = document.getElementById(\"sf\").value;\n  budget = document.getElementById(\"budget\").value;\n  resetTrades();\n  chart.deleteChart();\n  dup = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_scripts_office_json__WEBPACK_IMPORTED_MODULE_0__);\n  chart.createChart(dup, squareFootage);\n  chart.getTotal(dup, budget);\n}\n\n//user selection event listener - exclude x-Axis category\nconst tradesExcludedDiv = document.getElementById(\"trades-excluded\");\nconst tradesSelectedDiv = document.getElementById(\"trade-selector\");\nlet excluded = [];\nif (tradesSelectedDiv) {\n  tradesSelectedDiv.addEventListener(\"click\", excludeTrade);\n}\nfunction excludeTrade(e) {\n  let clicked = e.target;\n  if (clicked.className === \"trade\") {\n    tradesExcludedDiv.appendChild(e.target);\n    for (let i = 0; i < dup.length; i++) {\n      if (dup[i].trade === clicked.id) {\n        excluded.push(dup[i]);\n        dup = dup.slice(0, i).concat(dup.slice(i + 1));\n      }\n    }\n    chart.deleteChart();\n    chart.updateChart(dup);\n    chart.getTotal(dup, budget);\n  }\n}\n\n//user selection event listener - include x-Axis category\nlet tradesExcluded = document.getElementById(\"trades-excluded\");\nif (tradesExcluded) {\n  tradesExcluded.addEventListener(\"click\", includeTrade);\n}\nfunction includeTrade(e) {\n  let clicked = e.target;\n  if (clicked.className === \"trade\") {\n    tradesSelectedDiv.appendChild(e.target);\n    for (let i = 0; i < excluded.length; i++) {\n      if (excluded[i].trade === clicked.id) {\n        dup.push(excluded[i]);\n        excluded = excluded.slice(0, i).concat(excluded.slice(i + 1));\n        console.log(excluded);\n        console.log(dup);\n      }\n    }\n    chart.deleteChart();\n    chart.updateChart(dup);\n    chart.getTotal(dup, budget);\n  }\n}\nfunction resetTrades() {\n  for (let i = 0; i < excluded.length; i++) {\n    let move = document.getElementById(excluded[i].trade);\n    tradesSelectedDiv.appendChild(move);\n  }\n  excluded = [];\n}\nlet reset = document.getElementById(\"reset-button\");\nif (reset) {\n  reset.addEventListener(\"click\", resetChart);\n}\nfunction resetChart(e) {\n  chart.deleteChart();\n  dup = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_scripts_office_json__WEBPACK_IMPORTED_MODULE_0__);\n  chart.createChart(dup);\n  resetTrades();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRTtFQUNUQSxLQUFLLENBQUM5QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUrQixVQUFVLENBQUM7QUFDN0M7QUFFQSxTQUFTQSxVQUFVLENBQUMzQixDQUFDLEVBQUU7RUFDckJQLEtBQUssQ0FBQ1csV0FBVyxFQUFFO0VBQ25CbkIsR0FBRyxHQUFHWiw0REFBTyxDQUFDSCxpREFBSSxDQUFDO0VBQ25CdUIsS0FBSyxDQUFDQyxXQUFXLENBQUNULEdBQUcsQ0FBQztFQUN0QmtCLFdBQVcsRUFBRTtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGlmeS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4vc2NyaXB0cy9jaGFydHJmLmpzXCI7XG4vLyBpbXBvcnQgXCIuL3NjcmlwdHMvdHJhZGVzZWxlY3QuanNcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL3NjcmlwdHMvb2ZmaWNlLmpzb25cIjtcbmltcG9ydCBEYXRhMiBmcm9tIFwiLi9zY3JpcHRzL29mZmljZS5qc29uXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vc2NyaXB0cy9jaGFydC5qc1wiO1xuaW1wb3J0IGR1cERhdGEgZnJvbSBcIi4vc2NyaXB0cy9kYXRhLmpzXCI7XG4vLyBpbXBvcnQgeyBleGNsdWRlVHJhZGUsIGluY2x1ZGVUcmFkZSB9IGZyb20gXCIuL3NjcmlwdHMvdHJhZGVzZWxlY3QuanNcIjtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItaW5zdHJ1Y3Rpb25zXCIpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1idXR0b25cIik7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtYnV0dG9uXCIpO1xuXG5idXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn07XG5cbmNsb3NlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59O1xuXG4vL2NyZWF0aW5nIGFuIGVtcHR5IGNoYXJ0XG5sZXQgZHVwID0gZHVwRGF0YShEYXRhKTtcblxuY29uc3Qgd2lkdGggPSAxNTAwO1xuY29uc3QgaGVpZ2h0ID0gNzYwO1xuY29uc3QgbWFyZ2luID0geyB0b3A6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCwgcmlnaHQ6IDUwIH07XG5cbmxldCBjaGFydCA9IG5ldyBDaGFydCh3aWR0aCwgaGVpZ2h0LCBtYXJnaW4pO1xuY2hhcnQuY3JlYXRlQ2hhcnQoZHVwKTtcbmR1cCA9IGR1cERhdGEoRGF0YSk7XG5cbi8vIHVzZXIgaW5wdXQgZXZlbnQgbGlzdGVuZXIgLyBzZXQgaW5wdXQgdmFyaWFibGVzXG5sZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1pbnB1dFwiKTtcbmlmIChmb3JtKSBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlQnVkZ2V0KTtcbmxldCBzcXVhcmVGb290YWdlO1xubGV0IGJ1ZGdldDtcblxuLy8gdXNlciBpbnB1dCBldmVudCBoYW5kbGVyXG5mdW5jdGlvbiBjcmVhdGVCdWRnZXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNxdWFyZUZvb3RhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNmXCIpLnZhbHVlO1xuICBidWRnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldFwiKS52YWx1ZTtcbiAgcmVzZXRUcmFkZXMoKTtcbiAgY2hhcnQuZGVsZXRlQ2hhcnQoKTtcbiAgZHVwID0gZHVwRGF0YShEYXRhKTtcbiAgY2hhcnQuY3JlYXRlQ2hhcnQoZHVwLCBzcXVhcmVGb290YWdlKTtcbiAgY2hhcnQuZ2V0VG90YWwoZHVwLCBidWRnZXQpO1xufVxuXG4vL3VzZXIgc2VsZWN0aW9uIGV2ZW50IGxpc3RlbmVyIC0gZXhjbHVkZSB4LUF4aXMgY2F0ZWdvcnlcbmNvbnN0IHRyYWRlc0V4Y2x1ZGVkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFkZXMtZXhjbHVkZWRcIik7XG5jb25zdCB0cmFkZXNTZWxlY3RlZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhZGUtc2VsZWN0b3JcIik7XG5sZXQgZXhjbHVkZWQgPSBbXTtcbmlmICh0cmFkZXNTZWxlY3RlZERpdikge1xuICB0cmFkZXNTZWxlY3RlZERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhjbHVkZVRyYWRlKTtcbn1cbmZ1bmN0aW9uIGV4Y2x1ZGVUcmFkZShlKSB7XG4gIGxldCBjbGlja2VkID0gZS50YXJnZXQ7XG4gIGlmIChjbGlja2VkLmNsYXNzTmFtZSA9PT0gXCJ0cmFkZVwiKSB7XG4gICAgdHJhZGVzRXhjbHVkZWREaXYuYXBwZW5kQ2hpbGQoZS50YXJnZXQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHVwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZHVwW2ldLnRyYWRlID09PSBjbGlja2VkLmlkKSB7XG4gICAgICAgIGV4Y2x1ZGVkLnB1c2goZHVwW2ldKTtcbiAgICAgICAgZHVwID0gZHVwLnNsaWNlKDAsIGkpLmNvbmNhdChkdXAuc2xpY2UoaSArIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hhcnQuZGVsZXRlQ2hhcnQoKTtcbiAgICBjaGFydC51cGRhdGVDaGFydChkdXApO1xuICAgIGNoYXJ0LmdldFRvdGFsKGR1cCwgYnVkZ2V0KTtcbiAgfVxufVxuXG4vL3VzZXIgc2VsZWN0aW9uIGV2ZW50IGxpc3RlbmVyIC0gaW5jbHVkZSB4LUF4aXMgY2F0ZWdvcnlcbmxldCB0cmFkZXNFeGNsdWRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhZGVzLWV4Y2x1ZGVkXCIpO1xuaWYgKHRyYWRlc0V4Y2x1ZGVkKSB7XG4gIHRyYWRlc0V4Y2x1ZGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmNsdWRlVHJhZGUpO1xufVxuZnVuY3Rpb24gaW5jbHVkZVRyYWRlKGUpIHtcbiAgbGV0IGNsaWNrZWQgPSBlLnRhcmdldDtcbiAgaWYgKGNsaWNrZWQuY2xhc3NOYW1lID09PSBcInRyYWRlXCIpIHtcbiAgICB0cmFkZXNTZWxlY3RlZERpdi5hcHBlbmRDaGlsZChlLnRhcmdldCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGNsdWRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGV4Y2x1ZGVkW2ldLnRyYWRlID09PSBjbGlja2VkLmlkKSB7XG4gICAgICAgIGR1cC5wdXNoKGV4Y2x1ZGVkW2ldKTtcbiAgICAgICAgZXhjbHVkZWQgPSBleGNsdWRlZC5zbGljZSgwLCBpKS5jb25jYXQoZXhjbHVkZWQuc2xpY2UoaSArIDEpKTtcbiAgICAgICAgY29uc29sZS5sb2coZXhjbHVkZWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhkdXApO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGFydC5kZWxldGVDaGFydCgpO1xuICAgIGNoYXJ0LnVwZGF0ZUNoYXJ0KGR1cCk7XG4gICAgY2hhcnQuZ2V0VG90YWwoZHVwLCBidWRnZXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0VHJhZGVzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGV4Y2x1ZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChleGNsdWRlZFtpXS50cmFkZSk7XG4gICAgdHJhZGVzU2VsZWN0ZWREaXYuYXBwZW5kQ2hpbGQobW92ZSk7XG4gIH1cbiAgZXhjbHVkZWQgPSBbXTtcbn1cblxubGV0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1idXR0b25cIik7XG5pZiAocmVzZXQpIHtcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0Q2hhcnQpO1xufVxuXG5mdW5jdGlvbiByZXNldENoYXJ0KGUpIHtcbiAgY2hhcnQuZGVsZXRlQ2hhcnQoKTtcbiAgZHVwID0gZHVwRGF0YShEYXRhKTtcbiAgY2hhcnQuY3JlYXRlQ2hhcnQoZHVwKTtcbiAgcmVzZXRUcmFkZXMoKTtcbn1cbiJdLCJuYW1lcyI6WyJEYXRhIiwiRGF0YTIiLCJDaGFydCIsImR1cERhdGEiLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidXR0b24iLCJjbG9zZUJ1dHRvbiIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJldmVudCIsInRhcmdldCIsImR1cCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY2hhcnQiLCJjcmVhdGVDaGFydCIsImZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlQnVkZ2V0Iiwic3F1YXJlRm9vdGFnZSIsImJ1ZGdldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwicmVzZXRUcmFkZXMiLCJkZWxldGVDaGFydCIsImdldFRvdGFsIiwidHJhZGVzRXhjbHVkZWREaXYiLCJ0cmFkZXNTZWxlY3RlZERpdiIsImV4Y2x1ZGVkIiwiZXhjbHVkZVRyYWRlIiwiY2xpY2tlZCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiaSIsImxlbmd0aCIsInRyYWRlIiwiaWQiLCJwdXNoIiwic2xpY2UiLCJjb25jYXQiLCJ1cGRhdGVDaGFydCIsInRyYWRlc0V4Y2x1ZGVkIiwiaW5jbHVkZVRyYWRlIiwiY29uc29sZSIsImxvZyIsIm1vdmUiLCJyZXNldCIsInJlc2V0Q2hhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/chart.js":
/*!******************************!*\
  !*** ./src/scripts/chart.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _office_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./office.json */ \"./src/scripts/office.json\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/scripts/data.js\");\n\n\n\n// const width = 800;\n// const height = 750;\n// const margin = { top: 50, bottom: 50, left: 50, right: 50 };\n\nclass Chart {\n  constructor(width, height, margin) {\n    this.width = width;\n    this.height = height;\n    this.margin = margin;\n  }\n  createChart(data) {\n    let sf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    for (let i = 0; i < data.length; i++) {\n      data[i].rate *= sf;\n    }\n    this.updateChart(data);\n  }\n  updateChart(data) {\n    this.svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"height\", this.height - this.margin.top - this.margin.bottom).attr(\"width\", this.width).attr(\"viewBox\", [0, 0, this.width, this.height]);\n    this.x = d3.scaleBand().domain(d3.range(data.length)).range([this.margin.left, this.width - this.margin.right]).padding(0.1);\n    this.y = d3.scaleLinear().domain([0, d3.max(data.map(e => e.rate))]).range([this.height - this.margin.bottom, this.margin.top]);\n    this.svg.append(\"g\").attr(\"fill\", \"royalblue\").selectAll(\"rect\").data(data).join(\"rect\").attr(\"x\", (d, i) => this.x(i)).attr(\"y\", d => this.y(d.rate)).attr(\"height\", d => this.y(0) - this.y(d.rate)).attr(\"width\", this.x.bandwidth());\n    function xAxis(g) {\n      g.attr(\"transform\", `translate(0, ${this.height - this.margin.bottom})`).call(d3.axisBottom(this.x).tickFormat(i => data[i].trade)).attr(\"font-size\", \"16px\");\n    }\n    function yAxis(g) {\n      g.attr(\"transform\", `translate(${this.margin.left}, 0)`).call(d3.axisLeft(this.y).ticks(null, data.format)).attr(\"font-size\", \"18px\");\n    }\n    this.svg.append(\"g\").call(xAxis.bind(this));\n    this.svg.append(\"g\").call(yAxis.bind(this));\n    this.svg.node();\n  }\n  deleteChart() {\n    let mainChartDiv = document.getElementById(\"main-chart\");\n    mainChartDiv.innerHTML = \"\";\n  }\n  getTotal(data, budget) {\n    const totaldiv = document.getElementById(\"total-value\");\n    const budgetdiv = document.getElementById(\"budget-value\");\n    const deltadiv = document.getElementById(\"delta-value\");\n    console.log(totaldiv);\n    console.log(budgetdiv);\n    console.log(deltadiv);\n    let total = 0;\n    for (let i = 0; i < data.length; i++) {\n      total += data[i].rate;\n    }\n    console.log(totaldiv);\n    console.log(budgetdiv);\n    const numFor = Intl.NumberFormat(\"en-US\");\n    const newTotal = numFor.format(total);\n    const newBudget = numFor.format(budget);\n    const newDelta = numFor.format(total - budget);\n    totaldiv.innerHTML = `$${newTotal}`;\n    budgetdiv.innerHTML = `$${newBudget}`;\n    deltadiv.innerHTML = `$${newDelta}`;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTUssU0FBUyxHQUFHSixNQUFNLENBQUNoQixNQUFNLENBQUNTLE1BQU0sQ0FBQztJQUN2QyxNQUFNWSxRQUFRLEdBQUdMLE1BQU0sQ0FBQ2hCLE1BQU0sQ0FBQ2UsS0FBSyxHQUFHTixNQUFNLENBQUM7SUFDOUNDLFFBQVEsQ0FBQ0gsU0FBUyxHQUFJLElBQUdZLFFBQVMsRUFBQztJQUNuQ1IsU0FBUyxDQUFDSixTQUFTLEdBQUksSUFBR2EsU0FBVSxFQUFDO0lBQ3JDUixRQUFRLENBQUNMLFNBQVMsR0FBSSxJQUFHYyxRQUFTLEVBQUM7RUFDckM7QUFDRjtBQUVBLCtEQUFlakUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RpZnkvLi9zcmMvc2NyaXB0cy9jaGFydC5qcz8xNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhIGZyb20gXCIuL29mZmljZS5qc29uXCI7XG5pbXBvcnQgRGF0YTIgZnJvbSBcIi4vb2ZmaWNlLmpzb25cIjtcbmltcG9ydCBkdXBEYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbi8vIGNvbnN0IHdpZHRoID0gODAwO1xuLy8gY29uc3QgaGVpZ2h0ID0gNzUwO1xuLy8gY29uc3QgbWFyZ2luID0geyB0b3A6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCwgcmlnaHQ6IDUwIH07XG5cbmNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgbWFyZ2luKSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubWFyZ2luID0gbWFyZ2luO1xuICB9XG5cbiAgY3JlYXRlQ2hhcnQoZGF0YSwgc2YgPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhW2ldLnJhdGUgKj0gc2Y7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDaGFydChkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KGRhdGEpIHtcbiAgICB0aGlzLnN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KFwiI21haW4tY2hhcnRcIilcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFswLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodF0pO1xuXG4gICAgdGhpcy54ID0gZDNcbiAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbihkMy5yYW5nZShkYXRhLmxlbmd0aCkpXG4gICAgICAucmFuZ2UoW3RoaXMubWFyZ2luLmxlZnQsIHRoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodF0pXG4gICAgICAucGFkZGluZygwLjEpO1xuXG4gICAgdGhpcy55ID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YS5tYXAoKGUpID0+IGUucmF0ZSkpXSlcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20sIHRoaXMubWFyZ2luLnRvcF0pO1xuXG4gICAgdGhpcy5zdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJyb3lhbGJsdWVcIilcbiAgICAgIC5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAuZGF0YShkYXRhKVxuICAgICAgLmpvaW4oXCJyZWN0XCIpXG4gICAgICAuYXR0cihcInhcIiwgKGQsIGkpID0+IHRoaXMueChpKSlcbiAgICAgIC5hdHRyKFwieVwiLCAoZCkgPT4gdGhpcy55KGQucmF0ZSkpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gdGhpcy55KDApIC0gdGhpcy55KGQucmF0ZSkpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMueC5iYW5kd2lkdGgoKSk7XG5cbiAgICBmdW5jdGlvbiB4QXhpcyhnKSB7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tfSlgKVxuICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkudGlja0Zvcm1hdCgoaSkgPT4gZGF0YVtpXS50cmFkZSkpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMTZweFwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB5QXhpcyhnKSB7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAwKWApXG4gICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkudGlja3MobnVsbCwgZGF0YS5mb3JtYXQpKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE4cHhcIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5jYWxsKHhBeGlzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIikuY2FsbCh5QXhpcy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnN2Zy5ub2RlKCk7XG4gIH1cblxuICBkZWxldGVDaGFydCgpIHtcbiAgICBsZXQgbWFpbkNoYXJ0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNoYXJ0XCIpO1xuICAgIG1haW5DaGFydERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgZ2V0VG90YWwoZGF0YSwgYnVkZ2V0KSB7XG4gICAgY29uc3QgdG90YWxkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsLXZhbHVlXCIpO1xuICAgIGNvbnN0IGJ1ZGdldGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LXZhbHVlXCIpO1xuICAgIGNvbnN0IGRlbHRhZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWx0YS12YWx1ZVwiKTtcbiAgICBjb25zb2xlLmxvZyh0b3RhbGRpdik7XG4gICAgY29uc29sZS5sb2coYnVkZ2V0ZGl2KTtcbiAgICBjb25zb2xlLmxvZyhkZWx0YWRpdik7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsICs9IGRhdGFbaV0ucmF0ZTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh0b3RhbGRpdik7XG4gICAgY29uc29sZS5sb2coYnVkZ2V0ZGl2KTtcbiAgICBjb25zdCBudW1Gb3IgPSBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIpO1xuICAgIGNvbnN0IG5ld1RvdGFsID0gbnVtRm9yLmZvcm1hdCh0b3RhbCk7XG4gICAgY29uc3QgbmV3QnVkZ2V0ID0gbnVtRm9yLmZvcm1hdChidWRnZXQpO1xuICAgIGNvbnN0IG5ld0RlbHRhID0gbnVtRm9yLmZvcm1hdCh0b3RhbCAtIGJ1ZGdldCk7XG4gICAgdG90YWxkaXYuaW5uZXJIVE1MID0gYCQke25ld1RvdGFsfWA7XG4gICAgYnVkZ2V0ZGl2LmlubmVySFRNTCA9IGAkJHtuZXdCdWRnZXR9YDtcbiAgICBkZWx0YWRpdi5pbm5lckhUTUwgPSBgJCR7bmV3RGVsdGF9YDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJuYW1lcyI6WyJEYXRhIiwiRGF0YTIiLCJkdXBEYXRhIiwiQ2hhcnQiLCJjb25zdHJ1Y3RvciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwiY3JlYXRlQ2hhcnQiLCJkYXRhIiwic2YiLCJpIiwibGVuZ3RoIiwicmF0ZSIsInVwZGF0ZUNoYXJ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwidG9wIiwiYm90dG9tIiwieCIsInNjYWxlQmFuZCIsImRvbWFpbiIsInJhbmdlIiwibGVmdCIsInJpZ2h0IiwicGFkZGluZyIsInkiLCJzY2FsZUxpbmVhciIsIm1heCIsIm1hcCIsImUiLCJzZWxlY3RBbGwiLCJqb2luIiwiZCIsImJhbmR3aWR0aCIsInhBeGlzIiwiZyIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja0Zvcm1hdCIsInRyYWRlIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwiZm9ybWF0IiwiYmluZCIsIm5vZGUiLCJkZWxldGVDaGFydCIsIm1haW5DaGFydERpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJnZXRUb3RhbCIsImJ1ZGdldCIsInRvdGFsZGl2IiwiYnVkZ2V0ZGl2IiwiZGVsdGFkaXYiLCJjb25zb2xlIiwibG9nIiwidG90YWwiLCJudW1Gb3IiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibmV3VG90YWwiLCJuZXdCdWRnZXQiLCJuZXdEZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/chart.js\n");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction dupData(data) {\n  return JSON.parse(JSON.stringify(data));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (dupData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSxPQUFPLENBQUNDLElBQUksRUFBRTtFQUNyQixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNILElBQUksQ0FBQyxDQUFDO0FBQ3pDO0FBRUEsK0RBQWVELE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0aWZ5Ly4vc3JjL3NjcmlwdHMvZGF0YS5qcz9mYmQxIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGR1cERhdGEoZGF0YSkge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGR1cERhdGE7XG4iXSwibmFtZXMiOlsiZHVwRGF0YSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/data.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0aWZ5Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/scripts/office.json":
/*!*********************************!*\
  !*** ./src/scripts/office.json ***!
  \*********************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"trade":"Gen Req","rate":20},{"trade":"Demo","rate":10},{"trade":"Conc","rate":5},{"trade":"Mas","rate":4},{"trade":"Mtls","rate":15},{"trade":"Woods","rate":20},{"trade":"Therm","rate":20},{"trade":"Fins","rate":18},{"trade":"Spec","rate":10},{"trade":"Furn","rate":15},{"trade":"Spec Cnst","rate":2},{"trade":"Conv","rate":25},{"trade":"Mech","rate":14},{"trade":"Plbg","rate":20},{"trade":"Elec","rate":22},{"trade":"FP","rate":2.75}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;