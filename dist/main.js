/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_tradeselect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/tradeselect.js */ \"./src/scripts/tradeselect.js\");\n/* harmony import */ var _scripts_tradeselect_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_tradeselect_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_office_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/office.json */ \"./src/scripts/office.json\");\n/* harmony import */ var _scripts_chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/chart.js */ \"./src/scripts/chart.js\");\n// import \"./scripts/chartrf.js\";\n\n\n\nconst width = 850;\nconst height = 750;\nconst margin = {\n  top: 50,\n  bottom: 50,\n  left: 50,\n  right: 50\n};\nlet chart = new _scripts_chart_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](width, height, margin);\nchart.createChart(_scripts_office_json__WEBPACK_IMPORTED_MODULE_1__);\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  const squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n}\nconsole.log(_scripts_office_json__WEBPACK_IMPORTED_MODULE_1__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNrQztBQUNPO0FBQ0Y7QUFFdkMsTUFBTUUsS0FBSyxHQUFHLEdBQUc7QUFDakIsTUFBTUMsTUFBTSxHQUFHLEdBQUc7QUFDbEIsTUFBTUMsTUFBTSxHQUFHO0VBQUVDLEdBQUcsRUFBRSxFQUFFO0VBQUVDLE1BQU0sRUFBRSxFQUFFO0VBQUVDLElBQUksRUFBRSxFQUFFO0VBQUVDLEtBQUssRUFBRTtBQUFHLENBQUM7QUFFM0QsSUFBSUMsS0FBSyxHQUFHLElBQUlSLHlEQUFLLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLENBQUM7QUFDNUNLLEtBQUssQ0FBQ0MsV0FBVyxDQUFDVixpREFBSSxDQUFDOztBQUV2QjtBQUNBLElBQUlXLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0FBQ2hELElBQUlGLElBQUksRUFBRUEsSUFBSSxDQUFDRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVDLFlBQVksQ0FBQzs7QUFFdkQ7QUFDQSxTQUFTQSxZQUFZLENBQUNDLENBQUMsRUFBRTtFQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7RUFDbEIsTUFBTUMsYUFBYSxHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sS0FBSztFQUN6RCxNQUFNQyxNQUFNLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDTSxLQUFLO0FBQ3hEO0FBRUFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdEIsaURBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RpZnkvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL3NjcmlwdHMvY2hhcnRyZi5qc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL3RyYWRlc2VsZWN0LmpzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9zY3JpcHRzL29mZmljZS5qc29uXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vc2NyaXB0cy9jaGFydC5qc1wiO1xuXG5jb25zdCB3aWR0aCA9IDg1MDtcbmNvbnN0IGhlaWdodCA9IDc1MDtcbmNvbnN0IG1hcmdpbiA9IHsgdG9wOiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAsIHJpZ2h0OiA1MCB9O1xuXG5sZXQgY2hhcnQgPSBuZXcgQ2hhcnQod2lkdGgsIGhlaWdodCwgbWFyZ2luKTtcbmNoYXJ0LmNyZWF0ZUNoYXJ0KERhdGEpO1xuXG4vLyB1c2VyIGlucHV0IGV2ZW50IGxpc3RlbmVyIC8gc2V0IGlucHV0IHZhcmlhYmxlc1xubGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItaW5wdXRcIik7XG5pZiAoZm9ybSkgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNyZWF0ZUJ1ZGdldCk7XG5cbi8vIHVzZXIgaW5wdXQgZXZlbnQgaGFuZGxlclxuZnVuY3Rpb24gY3JlYXRlQnVkZ2V0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzcXVhcmVGb290YWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZlwiKS52YWx1ZTtcbiAgY29uc3QgYnVkZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXRcIikudmFsdWU7XG59XG5cbmNvbnNvbGUubG9nKERhdGEpO1xuIl0sIm5hbWVzIjpbIkRhdGEiLCJDaGFydCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY2hhcnQiLCJjcmVhdGVDaGFydCIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUJ1ZGdldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNxdWFyZUZvb3RhZ2UiLCJ2YWx1ZSIsImJ1ZGdldCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/chart.js":
/*!******************************!*\
  !*** ./src/scripts/chart.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _office_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./office.json */ \"./src/scripts/office.json\");\n\n// const width = 800;\n// const height = 750;\n// const margin = { top: 50, bottom: 50, left: 50, right: 50 };\n\nclass Chart {\n  constructor(width, height, margin) {\n    this.width = width;\n    this.height = height;\n    this.margin = margin;\n  }\n  createChart(data) {\n    let sf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    for (let i = 0; i < data.length; i++) {\n      data[i].rate *= sf;\n    }\n    console.log(data);\n    this.svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"height\", this.height - this.margin.top - this.margin.bottom).attr(\"width\", this.width - this.margin.left - this.margin.right).attr(\"viewBox\", [0, 0, this.width, this.height]);\n    this.x = d3.scaleBand().domain(d3.range(data.length)).range([this.margin.left, this.width - this.margin.right]).padding(0.1);\n    this.y = d3.scaleLinear().domain([0, d3.max(_office_json__WEBPACK_IMPORTED_MODULE_0__.map(e => e.rate))]).range([this.height - this.margin.bottom, this.margin.top]);\n    this.svg.append(\"g\").attr(\"fill\", \"royalblue\").selectAll(\"rect\").data(data).join(\"rect\").attr(\"x\", (d, i) => this.x(i)).attr(\"y\", d => this.y(d.rate)).attr(\"height\", d => this.y(0) - this.y(d.rate)).attr(\"width\", this.x.bandwidth());\n    function xAxis(g) {\n      g.attr(\"transform\", `translate(0, ${this.height - this.margin.bottom})`).call(d3.axisBottom(this.x).tickFormat(i => data[i].trade)).attr(\"font-size\", \"12px\");\n    }\n    console.log(this.margin);\n    console.log(this.margin.left);\n    function yAxis(g) {\n      console.log(g);\n      g.attr(\"transform\", `translate(${this.margin.left}, 0)`).call(d3.axisLeft(this.y).ticks(null, data.format)).attr(\"font-size\", \"12px\");\n    }\n    this.svg.append(\"g\").call(xAxis.bind(this));\n    this.svg.append(\"g\").call(yAxis.bind(this));\n    this.svg.node();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsRUFBRSxNQUFNLENBQUM7SUFDOUI7SUFFQSxJQUFJLENBQUNKLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDc0IsSUFBSSxDQUFDRixLQUFLLENBQUNVLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUNqQyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ3NCLElBQUksQ0FBQ0ksS0FBSyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsSUFBSSxDQUFDakMsR0FBRyxDQUFDa0MsSUFBSSxFQUFFO0VBQ2pCO0FBQ0Y7QUFFQSwrREFBZS9DLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0aWZ5Ly4vc3JjL3NjcmlwdHMvY2hhcnQuanM/MTViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YSBmcm9tIFwiLi9vZmZpY2UuanNvblwiO1xuLy8gY29uc3Qgd2lkdGggPSA4MDA7XG4vLyBjb25zdCBoZWlnaHQgPSA3NTA7XG4vLyBjb25zdCBtYXJnaW4gPSB7IHRvcDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAgfTtcblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBtYXJnaW4pIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5tYXJnaW4gPSBtYXJnaW47XG4gIH1cblxuICBjcmVhdGVDaGFydChkYXRhLCBzZiA9IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFbaV0ucmF0ZSAqPSBzZjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIHRoaXMuc3ZnID0gZDNcbiAgICAgIC5zZWxlY3QoXCIjbWFpbi1jaGFydFwiKVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcInZpZXdCb3hcIiwgWzAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XSk7XG5cbiAgICB0aGlzLnggPSBkM1xuICAgICAgLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKGQzLnJhbmdlKGRhdGEubGVuZ3RoKSlcbiAgICAgIC5yYW5nZShbdGhpcy5tYXJnaW4ubGVmdCwgdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0XSlcbiAgICAgIC5wYWRkaW5nKDAuMSk7XG5cbiAgICB0aGlzLnkgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChEYXRhLm1hcCgoZSkgPT4gZS5yYXRlKSldKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSwgdGhpcy5tYXJnaW4udG9wXSk7XG5cbiAgICB0aGlzLnN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcInJveWFsYmx1ZVwiKVxuICAgICAgLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAuam9pbihcInJlY3RcIilcbiAgICAgIC5hdHRyKFwieFwiLCAoZCwgaSkgPT4gdGhpcy54KGkpKVxuICAgICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB0aGlzLnkoZC5yYXRlKSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiB0aGlzLnkoMCkgLSB0aGlzLnkoZC5yYXRlKSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy54LmJhbmR3aWR0aCgpKTtcblxuICAgIGZ1bmN0aW9uIHhBeGlzKGcpIHtcbiAgICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7dGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b219KWApXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KS50aWNrRm9ybWF0KChpKSA9PiBkYXRhW2ldLnRyYWRlKSlcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxMnB4XCIpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLm1hcmdpbik7XG4gICAgY29uc29sZS5sb2codGhpcy5tYXJnaW4ubGVmdCk7XG4gICAgZnVuY3Rpb24geUF4aXMoZykge1xuICAgICAgY29uc29sZS5sb2coZyk7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAwKWApXG4gICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkudGlja3MobnVsbCwgZGF0YS5mb3JtYXQpKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjEycHhcIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5jYWxsKHhBeGlzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIikuY2FsbCh5QXhpcy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnN2Zy5ub2RlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iXSwibmFtZXMiOlsiRGF0YSIsIkNoYXJ0IiwiY29uc3RydWN0b3IiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImNyZWF0ZUNoYXJ0IiwiZGF0YSIsInNmIiwiaSIsImxlbmd0aCIsInJhdGUiLCJjb25zb2xlIiwibG9nIiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwieCIsInNjYWxlQmFuZCIsImRvbWFpbiIsInJhbmdlIiwicGFkZGluZyIsInkiLCJzY2FsZUxpbmVhciIsIm1heCIsIm1hcCIsImUiLCJzZWxlY3RBbGwiLCJqb2luIiwiZCIsImJhbmR3aWR0aCIsInhBeGlzIiwiZyIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja0Zvcm1hdCIsInRyYWRlIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwiZm9ybWF0IiwiYmluZCIsIm5vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/chart.js\n");

/***/ }),

/***/ "./src/scripts/tradeselect.js":
/*!************************************!*\
  !*** ./src/scripts/tradeselect.js ***!
  \************************************/
/***/ (function() {

eval("let tradeSelected = document.getElementById(\"trades-selected\");\nlet trades = document.getElementById(\"trade-selector\");\nif (trades) trades.addEventListener(\"click\", addTrade);\nconsole.log(tradeSelected);\nconsole.log(trades);\nfunction addTrade(e) {\n  console.log(e.target.id);\n  tradeSelected.appendChild(trades);\n  tradeSelected.removeAttribute(e.target.id);\n  console.log(tradeSelected);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90cmFkZXNlbGVjdC5qcy5qcyIsIm5hbWVzIjpbInRyYWRlU2VsZWN0ZWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidHJhZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZFRyYWRlIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJpZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0aWZ5Ly4vc3JjL3NjcmlwdHMvdHJhZGVzZWxlY3QuanM/M2U4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdHJhZGVTZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhZGVzLXNlbGVjdGVkXCIpO1xubGV0IHRyYWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhZGUtc2VsZWN0b3JcIik7XG5pZiAodHJhZGVzKSB0cmFkZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRyYWRlKTtcblxuY29uc29sZS5sb2codHJhZGVTZWxlY3RlZCk7XG5jb25zb2xlLmxvZyh0cmFkZXMpO1xuZnVuY3Rpb24gYWRkVHJhZGUoZSkge1xuICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XG4gIHRyYWRlU2VsZWN0ZWQuYXBwZW5kQ2hpbGQodHJhZGVzKTtcbiAgdHJhZGVTZWxlY3RlZC5yZW1vdmVBdHRyaWJ1dGUoZS50YXJnZXQuaWQpO1xuICBjb25zb2xlLmxvZyh0cmFkZVNlbGVjdGVkKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztBQUM5RCxJQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0FBQ3RELElBQUlDLE1BQU0sRUFBRUEsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVDLFFBQVEsQ0FBQztBQUV0REMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLGFBQWEsQ0FBQztBQUMxQk0sT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQztBQUNuQixTQUFTRSxRQUFRLENBQUNHLENBQUMsRUFBRTtFQUNuQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLENBQUM7RUFDeEJWLGFBQWEsQ0FBQ1csV0FBVyxDQUFDUixNQUFNLENBQUM7RUFDakNILGFBQWEsQ0FBQ1ksZUFBZSxDQUFDSixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDO0VBQzFDSixPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsYUFBYSxDQUFDO0FBQzVCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/tradeselect.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0aWZ5Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/scripts/office.json":
/*!*********************************!*\
  !*** ./src/scripts/office.json ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"trade":"Gen Req","rate":20},{"trade":"Demo","rate":20},{"trade":"Conc","rate":20},{"trade":"Mas","rate":120},{"trade":"Mtls","rate":50},{"trade":"Woods","rate":20},{"trade":"Therm","rate":20},{"trade":"Fins","rate":20},{"trade":"Spec","rate":20},{"trade":"Furn","rate":20},{"trade":"Spec Cnst","rate":20},{"trade":"Conv","rate":20},{"trade":"Mech","rate":20},{"trade":"Plbg","rate":20},{"trade":"Elec","rate":20}]');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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