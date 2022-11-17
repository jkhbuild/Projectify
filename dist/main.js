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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_office_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/office.json */ \"./src/scripts/office.json\");\n/* harmony import */ var _scripts_chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/chart.js */ \"./src/scripts/chart.js\");\n/* harmony import */ var _scripts_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/data.js */ \"./src/scripts/data.js\");\n// import \"./scripts/chartrf.js\";\n// import \"./scripts/tradeselect.js\";\n\n\n\n\n// import { excludeTrade, includeTrade } from \"./scripts/tradeselect.js\";\n\nconst modal = document.getElementById(\"user-instructions\");\nconst button = document.getElementById(\"modal-button\");\nconst closeButton = document.getElementById(\"close-button\");\nconsole.log(modal);\nconsole.log(button);\nconsole.log(closeButton);\nbutton.onclick = function () {\n  modal.style.display = \"block\";\n};\ncloseButton.onclick = function () {\n  modal.style.display = \"none\";\n};\nwindow.onclick = function (event) {\n  if (event.target === modal) {\n    modal.style.display = \"none\";\n  }\n};\n\n//creating an empty chart\nlet dup = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_scripts_office_json__WEBPACK_IMPORTED_MODULE_0__);\nconst width = 1500;\nconst height = 760;\nconst margin = {\n  top: 50,\n  bottom: 50,\n  left: 50,\n  right: 50\n};\nlet chart = new _scripts_chart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](width, height, margin);\nchart.createChart(dup);\ndup = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_scripts_office_json__WEBPACK_IMPORTED_MODULE_0__);\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\nlet squareFootage;\nlet budget;\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  squareFootage = document.getElementById(\"sf\").value;\n  budget = document.getElementById(\"budget\").value;\n  resetTrades();\n  chart.deleteChart();\n  dup = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_scripts_office_json__WEBPACK_IMPORTED_MODULE_0__);\n  chart.createChart(dup, squareFootage);\n  chart.getTotal(dup, budget);\n}\n\n//user selection event listener - exclude x-Axis category\nconst tradesExcludedDiv = document.getElementById(\"trades-excluded\");\nconst tradesSelectedDiv = document.getElementById(\"trade-selector\");\nlet excluded = [];\nif (tradesSelectedDiv) {\n  tradesSelectedDiv.addEventListener(\"click\", excludeTrade);\n}\nfunction excludeTrade(e) {\n  let clicked = e.target;\n  if (clicked.className === \"trade\") {\n    tradesExcludedDiv.appendChild(e.target);\n    for (let i = 0; i < dup.length; i++) {\n      if (dup[i].trade === clicked.id) {\n        excluded.push(dup[i]);\n        dup = dup.slice(0, i).concat(dup.slice(i + 1));\n      }\n    }\n    chart.deleteChart();\n    chart.updateChart(dup);\n    chart.getTotal(dup, budget);\n  }\n}\n\n//user selection event listener - include x-Axis category\nlet tradesExcluded = document.getElementById(\"trades-excluded\");\nif (tradesExcluded) {\n  tradesExcluded.addEventListener(\"click\", includeTrade);\n}\nfunction includeTrade(e) {\n  let clicked = e.target;\n  if (clicked.className === \"trade\") {\n    tradesSelectedDiv.appendChild(e.target);\n    for (let i = 0; i < excluded.length; i++) {\n      if (excluded[i].trade === clicked.id) {\n        dup.push(excluded[i]);\n        excluded = excluded.slice(0, i).concat(excluded.slice(i + 1));\n        console.log(excluded);\n        console.log(dup);\n      }\n    }\n    chart.deleteChart();\n    chart.updateChart(dup);\n    chart.getTotal(dup, budget);\n  }\n}\nfunction resetTrades() {\n  for (let i = 0; i < excluded.length; i++) {\n    let move = document.getElementById(excluded[i].trade);\n    tradesSelectedDiv.appendChild(move);\n  }\n  excluded = [];\n}\nlet reset = document.getElementById(\"reset-button\");\nif (reset) {\n  reset.addEventListener(\"click\", resetChart);\n}\nfunction resetChart(e) {\n  chart.deleteChart();\n  dup = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_scripts_office_json__WEBPACK_IMPORTED_MODULE_0__);\n  chart.createChart(dup);\n  resetTrades();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1csSUFBSSxDQUFDO0VBQ3JDO0VBQ0FmLFFBQVEsR0FBRyxFQUFFO0FBQ2Y7QUFFQSxJQUFJZ0IsS0FBSyxHQUFHbkQsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDO0FBQ25ELElBQUlrRCxLQUFLLEVBQUU7RUFDVEEsS0FBSyxDQUFDNUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFNkIsVUFBVSxDQUFDO0FBQzdDO0FBRUEsU0FBU0EsVUFBVSxDQUFDekIsQ0FBQyxFQUFFO0VBQ3JCUCxLQUFLLENBQUNXLFdBQVcsRUFBRTtFQUNuQm5CLEdBQUcsR0FBR2QsNERBQU8sQ0FBQ0gsaURBQUksQ0FBQztFQUNuQnlCLEtBQUssQ0FBQ0MsV0FBVyxDQUFDVCxHQUFHLENBQUM7RUFDdEJrQixXQUFXLEVBQUU7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RpZnkvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL3NjcmlwdHMvY2hhcnRyZi5qc1wiO1xuLy8gaW1wb3J0IFwiLi9zY3JpcHRzL3RyYWRlc2VsZWN0LmpzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9zY3JpcHRzL29mZmljZS5qc29uXCI7XG5pbXBvcnQgRGF0YTIgZnJvbSBcIi4vc2NyaXB0cy9vZmZpY2UuanNvblwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCIuL3NjcmlwdHMvY2hhcnQuanNcIjtcbmltcG9ydCBkdXBEYXRhIGZyb20gXCIuL3NjcmlwdHMvZGF0YS5qc1wiO1xuLy8gaW1wb3J0IHsgZXhjbHVkZVRyYWRlLCBpbmNsdWRlVHJhZGUgfSBmcm9tIFwiLi9zY3JpcHRzL3RyYWRlc2VsZWN0LmpzXCI7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWluc3RydWN0aW9uc1wiKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYnV0dG9uXCIpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWJ1dHRvblwiKTtcbmNvbnNvbGUubG9nKG1vZGFsKTtcbmNvbnNvbGUubG9nKGJ1dHRvbik7XG5jb25zb2xlLmxvZyhjbG9zZUJ1dHRvbik7XG5cbmJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuY2xvc2VCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcblxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn07XG5cbi8vY3JlYXRpbmcgYW4gZW1wdHkgY2hhcnRcbmxldCBkdXAgPSBkdXBEYXRhKERhdGEpO1xuXG5jb25zdCB3aWR0aCA9IDE1MDA7XG5jb25zdCBoZWlnaHQgPSA3NjA7XG5jb25zdCBtYXJnaW4gPSB7IHRvcDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAgfTtcblxubGV0IGNoYXJ0ID0gbmV3IENoYXJ0KHdpZHRoLCBoZWlnaHQsIG1hcmdpbik7XG5jaGFydC5jcmVhdGVDaGFydChkdXApO1xuZHVwID0gZHVwRGF0YShEYXRhKTtcblxuLy8gdXNlciBpbnB1dCBldmVudCBsaXN0ZW5lciAvIHNldCBpbnB1dCB2YXJpYWJsZXNcbmxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWlucHV0XCIpO1xuaWYgKGZvcm0pIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBjcmVhdGVCdWRnZXQpO1xubGV0IHNxdWFyZUZvb3RhZ2U7XG5sZXQgYnVkZ2V0O1xuXG4vLyB1c2VyIGlucHV0IGV2ZW50IGhhbmRsZXJcbmZ1bmN0aW9uIGNyZWF0ZUJ1ZGdldChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc3F1YXJlRm9vdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ZcIikudmFsdWU7XG4gIGJ1ZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0XCIpLnZhbHVlO1xuICByZXNldFRyYWRlcygpO1xuICBjaGFydC5kZWxldGVDaGFydCgpO1xuICBkdXAgPSBkdXBEYXRhKERhdGEpO1xuICBjaGFydC5jcmVhdGVDaGFydChkdXAsIHNxdWFyZUZvb3RhZ2UpO1xuICBjaGFydC5nZXRUb3RhbChkdXAsIGJ1ZGdldCk7XG59XG5cbi8vdXNlciBzZWxlY3Rpb24gZXZlbnQgbGlzdGVuZXIgLSBleGNsdWRlIHgtQXhpcyBjYXRlZ29yeVxuY29uc3QgdHJhZGVzRXhjbHVkZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWRlcy1leGNsdWRlZFwiKTtcbmNvbnN0IHRyYWRlc1NlbGVjdGVkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFkZS1zZWxlY3RvclwiKTtcbmxldCBleGNsdWRlZCA9IFtdO1xuaWYgKHRyYWRlc1NlbGVjdGVkRGl2KSB7XG4gIHRyYWRlc1NlbGVjdGVkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleGNsdWRlVHJhZGUpO1xufVxuZnVuY3Rpb24gZXhjbHVkZVRyYWRlKGUpIHtcbiAgbGV0IGNsaWNrZWQgPSBlLnRhcmdldDtcbiAgaWYgKGNsaWNrZWQuY2xhc3NOYW1lID09PSBcInRyYWRlXCIpIHtcbiAgICB0cmFkZXNFeGNsdWRlZERpdi5hcHBlbmRDaGlsZChlLnRhcmdldCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkdXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkdXBbaV0udHJhZGUgPT09IGNsaWNrZWQuaWQpIHtcbiAgICAgICAgZXhjbHVkZWQucHVzaChkdXBbaV0pO1xuICAgICAgICBkdXAgPSBkdXAuc2xpY2UoMCwgaSkuY29uY2F0KGR1cC5zbGljZShpICsgMSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGFydC5kZWxldGVDaGFydCgpO1xuICAgIGNoYXJ0LnVwZGF0ZUNoYXJ0KGR1cCk7XG4gICAgY2hhcnQuZ2V0VG90YWwoZHVwLCBidWRnZXQpO1xuICB9XG59XG5cbi8vdXNlciBzZWxlY3Rpb24gZXZlbnQgbGlzdGVuZXIgLSBpbmNsdWRlIHgtQXhpcyBjYXRlZ29yeVxubGV0IHRyYWRlc0V4Y2x1ZGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFkZXMtZXhjbHVkZWRcIik7XG5pZiAodHJhZGVzRXhjbHVkZWQpIHtcbiAgdHJhZGVzRXhjbHVkZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluY2x1ZGVUcmFkZSk7XG59XG5mdW5jdGlvbiBpbmNsdWRlVHJhZGUoZSkge1xuICBsZXQgY2xpY2tlZCA9IGUudGFyZ2V0O1xuICBpZiAoY2xpY2tlZC5jbGFzc05hbWUgPT09IFwidHJhZGVcIikge1xuICAgIHRyYWRlc1NlbGVjdGVkRGl2LmFwcGVuZENoaWxkKGUudGFyZ2V0KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4Y2x1ZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZXhjbHVkZWRbaV0udHJhZGUgPT09IGNsaWNrZWQuaWQpIHtcbiAgICAgICAgZHVwLnB1c2goZXhjbHVkZWRbaV0pO1xuICAgICAgICBleGNsdWRlZCA9IGV4Y2x1ZGVkLnNsaWNlKDAsIGkpLmNvbmNhdChleGNsdWRlZC5zbGljZShpICsgMSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhleGNsdWRlZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1cCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNoYXJ0LmRlbGV0ZUNoYXJ0KCk7XG4gICAgY2hhcnQudXBkYXRlQ2hhcnQoZHVwKTtcbiAgICBjaGFydC5nZXRUb3RhbChkdXAsIGJ1ZGdldCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRUcmFkZXMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVkZWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV4Y2x1ZGVkW2ldLnRyYWRlKTtcbiAgICB0cmFkZXNTZWxlY3RlZERpdi5hcHBlbmRDaGlsZChtb3ZlKTtcbiAgfVxuICBleGNsdWRlZCA9IFtdO1xufVxuXG5sZXQgcmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0LWJ1dHRvblwiKTtcbmlmIChyZXNldCkge1xuICByZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRDaGFydCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Q2hhcnQoZSkge1xuICBjaGFydC5kZWxldGVDaGFydCgpO1xuICBkdXAgPSBkdXBEYXRhKERhdGEpO1xuICBjaGFydC5jcmVhdGVDaGFydChkdXApO1xuICByZXNldFRyYWRlcygpO1xufVxuIl0sIm5hbWVzIjpbIkRhdGEiLCJEYXRhMiIsIkNoYXJ0IiwiZHVwRGF0YSIsIm1vZGFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiY29uc29sZSIsImxvZyIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJldmVudCIsInRhcmdldCIsImR1cCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY2hhcnQiLCJjcmVhdGVDaGFydCIsImZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlQnVkZ2V0Iiwic3F1YXJlRm9vdGFnZSIsImJ1ZGdldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwicmVzZXRUcmFkZXMiLCJkZWxldGVDaGFydCIsImdldFRvdGFsIiwidHJhZGVzRXhjbHVkZWREaXYiLCJ0cmFkZXNTZWxlY3RlZERpdiIsImV4Y2x1ZGVkIiwiZXhjbHVkZVRyYWRlIiwiY2xpY2tlZCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiaSIsImxlbmd0aCIsInRyYWRlIiwiaWQiLCJwdXNoIiwic2xpY2UiLCJjb25jYXQiLCJ1cGRhdGVDaGFydCIsInRyYWRlc0V4Y2x1ZGVkIiwiaW5jbHVkZVRyYWRlIiwibW92ZSIsInJlc2V0IiwicmVzZXRDaGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/chart.js":
/*!******************************!*\
  !*** ./src/scripts/chart.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _office_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./office.json */ \"./src/scripts/office.json\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/scripts/data.js\");\n\n\n\n// const width = 800;\n// const height = 750;\n// const margin = { top: 50, bottom: 50, left: 50, right: 50 };\n\nclass Chart {\n  constructor(width, height, margin) {\n    this.width = width;\n    this.height = height;\n    this.margin = margin;\n  }\n  createChart(data) {\n    let sf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    for (let i = 0; i < data.length; i++) {\n      data[i].rate *= sf;\n    }\n    this.updateChart(data);\n  }\n  updateChart(data) {\n    this.svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"height\", this.height - this.margin.top - this.margin.bottom).attr(\"width\", this.width).attr(\"viewBox\", [0, 0, this.width, this.height]);\n    this.x = d3.scaleBand().domain(d3.range(data.length)).range([this.margin.left, this.width - this.margin.right]).padding(0.1);\n    this.y = d3.scaleLinear().domain([0, d3.max(data.map(e => e.rate))]).range([this.height - this.margin.bottom, this.margin.top]);\n    this.svg.append(\"g\").attr(\"fill\", \"royalblue\").selectAll(\"rect\").data(data).join(\"rect\").attr(\"x\", (d, i) => this.x(i)).attr(\"y\", d => this.y(d.rate)).attr(\"height\", d => this.y(0) - this.y(d.rate)).attr(\"width\", this.x.bandwidth());\n    function xAxis(g) {\n      g.attr(\"transform\", `translate(0, ${this.height - this.margin.bottom})`).call(d3.axisBottom(this.x).tickFormat(i => data[i].trade)).attr(\"font-size\", \"16px\");\n    }\n    function yAxis(g) {\n      g.attr(\"transform\", `translate(${this.margin.left}, 0)`).call(d3.axisLeft(this.y).ticks(null, data.format)).attr(\"font-size\", \"18px\");\n    }\n    this.svg.append(\"g\").call(xAxis.bind(this));\n    this.svg.append(\"g\").call(yAxis.bind(this));\n    this.svg.node();\n  }\n  deleteChart() {\n    let mainChartDiv = document.getElementById(\"main-chart\");\n    mainChartDiv.innerHTML = \"\";\n  }\n  getTotal(data, budget) {\n    const totaldiv = document.getElementById(\"total-disp\");\n    const budgetdiv = document.getElementById(\"budget-disp\");\n    const deltadiv = document.getElementById(\"delta-disp\");\n    let total = 0;\n    for (let i = 0; i < data.length; i++) {\n      total += data[i].rate;\n    }\n    console.log(total);\n    console.log(budget);\n    const numFor = Intl.NumberFormat(\"en-US\");\n    const newTotal = numFor.format(total);\n    const newBudget = numFor.format(budget);\n    const newDelta = numFor.format(total - budget);\n    totaldiv.innerHTML = `TOTAL: $${newTotal}`;\n    budgetdiv.innerHTML = `BUDGET: $${newBudget}`;\n    deltadiv.innerHTML = `DELTA: $${newDelta}`;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDOUNDLFFBQVEsQ0FBQ0gsU0FBUyxHQUFJLFdBQVVZLFFBQVMsRUFBQztJQUMxQ1IsU0FBUyxDQUFDSixTQUFTLEdBQUksWUFBV2EsU0FBVSxFQUFDO0lBQzdDUixRQUFRLENBQUNMLFNBQVMsR0FBSSxXQUFVYyxRQUFTLEVBQUM7RUFDNUM7QUFDRjtBQUVBLCtEQUFlakUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RpZnkvLi9zcmMvc2NyaXB0cy9jaGFydC5qcz8xNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhIGZyb20gXCIuL29mZmljZS5qc29uXCI7XG5pbXBvcnQgRGF0YTIgZnJvbSBcIi4vb2ZmaWNlLmpzb25cIjtcbmltcG9ydCBkdXBEYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbi8vIGNvbnN0IHdpZHRoID0gODAwO1xuLy8gY29uc3QgaGVpZ2h0ID0gNzUwO1xuLy8gY29uc3QgbWFyZ2luID0geyB0b3A6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCwgcmlnaHQ6IDUwIH07XG5cbmNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgbWFyZ2luKSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubWFyZ2luID0gbWFyZ2luO1xuICB9XG5cbiAgY3JlYXRlQ2hhcnQoZGF0YSwgc2YgPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhW2ldLnJhdGUgKj0gc2Y7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDaGFydChkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KGRhdGEpIHtcbiAgICB0aGlzLnN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KFwiI21haW4tY2hhcnRcIilcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFswLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodF0pO1xuXG4gICAgdGhpcy54ID0gZDNcbiAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbihkMy5yYW5nZShkYXRhLmxlbmd0aCkpXG4gICAgICAucmFuZ2UoW3RoaXMubWFyZ2luLmxlZnQsIHRoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodF0pXG4gICAgICAucGFkZGluZygwLjEpO1xuXG4gICAgdGhpcy55ID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YS5tYXAoKGUpID0+IGUucmF0ZSkpXSlcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20sIHRoaXMubWFyZ2luLnRvcF0pO1xuXG4gICAgdGhpcy5zdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJyb3lhbGJsdWVcIilcbiAgICAgIC5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAuZGF0YShkYXRhKVxuICAgICAgLmpvaW4oXCJyZWN0XCIpXG4gICAgICAuYXR0cihcInhcIiwgKGQsIGkpID0+IHRoaXMueChpKSlcbiAgICAgIC5hdHRyKFwieVwiLCAoZCkgPT4gdGhpcy55KGQucmF0ZSkpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gdGhpcy55KDApIC0gdGhpcy55KGQucmF0ZSkpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMueC5iYW5kd2lkdGgoKSk7XG5cbiAgICBmdW5jdGlvbiB4QXhpcyhnKSB7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tfSlgKVxuICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkudGlja0Zvcm1hdCgoaSkgPT4gZGF0YVtpXS50cmFkZSkpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMTZweFwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB5QXhpcyhnKSB7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAwKWApXG4gICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkudGlja3MobnVsbCwgZGF0YS5mb3JtYXQpKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE4cHhcIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5jYWxsKHhBeGlzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIikuY2FsbCh5QXhpcy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnN2Zy5ub2RlKCk7XG4gIH1cblxuICBkZWxldGVDaGFydCgpIHtcbiAgICBsZXQgbWFpbkNoYXJ0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNoYXJ0XCIpO1xuICAgIG1haW5DaGFydERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgZ2V0VG90YWwoZGF0YSwgYnVkZ2V0KSB7XG4gICAgY29uc3QgdG90YWxkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsLWRpc3BcIik7XG4gICAgY29uc3QgYnVkZ2V0ZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZGlzcFwiKTtcbiAgICBjb25zdCBkZWx0YWRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsdGEtZGlzcFwiKTtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWwgKz0gZGF0YVtpXS5yYXRlO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHRvdGFsKTtcbiAgICBjb25zb2xlLmxvZyhidWRnZXQpO1xuICAgIGNvbnN0IG51bUZvciA9IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIik7XG4gICAgY29uc3QgbmV3VG90YWwgPSBudW1Gb3IuZm9ybWF0KHRvdGFsKTtcbiAgICBjb25zdCBuZXdCdWRnZXQgPSBudW1Gb3IuZm9ybWF0KGJ1ZGdldCk7XG4gICAgY29uc3QgbmV3RGVsdGEgPSBudW1Gb3IuZm9ybWF0KHRvdGFsIC0gYnVkZ2V0KTtcbiAgICB0b3RhbGRpdi5pbm5lckhUTUwgPSBgVE9UQUw6ICQke25ld1RvdGFsfWA7XG4gICAgYnVkZ2V0ZGl2LmlubmVySFRNTCA9IGBCVURHRVQ6ICQke25ld0J1ZGdldH1gO1xuICAgIGRlbHRhZGl2LmlubmVySFRNTCA9IGBERUxUQTogJCR7bmV3RGVsdGF9YDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJuYW1lcyI6WyJEYXRhIiwiRGF0YTIiLCJkdXBEYXRhIiwiQ2hhcnQiLCJjb25zdHJ1Y3RvciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwiY3JlYXRlQ2hhcnQiLCJkYXRhIiwic2YiLCJpIiwibGVuZ3RoIiwicmF0ZSIsInVwZGF0ZUNoYXJ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwidG9wIiwiYm90dG9tIiwieCIsInNjYWxlQmFuZCIsImRvbWFpbiIsInJhbmdlIiwibGVmdCIsInJpZ2h0IiwicGFkZGluZyIsInkiLCJzY2FsZUxpbmVhciIsIm1heCIsIm1hcCIsImUiLCJzZWxlY3RBbGwiLCJqb2luIiwiZCIsImJhbmR3aWR0aCIsInhBeGlzIiwiZyIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja0Zvcm1hdCIsInRyYWRlIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwiZm9ybWF0IiwiYmluZCIsIm5vZGUiLCJkZWxldGVDaGFydCIsIm1haW5DaGFydERpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJnZXRUb3RhbCIsImJ1ZGdldCIsInRvdGFsZGl2IiwiYnVkZ2V0ZGl2IiwiZGVsdGFkaXYiLCJ0b3RhbCIsImNvbnNvbGUiLCJsb2ciLCJudW1Gb3IiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibmV3VG90YWwiLCJuZXdCdWRnZXQiLCJuZXdEZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/chart.js\n");

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