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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_tradeselect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/tradeselect.js */ \"./src/scripts/tradeselect.js\");\n/* harmony import */ var _scripts_tradeselect_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_tradeselect_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_office_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/office.json */ \"./src/scripts/office.json\");\n/* harmony import */ var _scripts_chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/chart.js */ \"./src/scripts/chart.js\");\n/* harmony import */ var _scripts_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/data.js */ \"./src/scripts/data.js\");\n// import \"./scripts/chartrf.js\";\n\n\n\n\n\nlet dup = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_scripts_office_json__WEBPACK_IMPORTED_MODULE_1__);\nconst width = 1400;\nconst height = 1000;\nconst margin = {\n  top: 50,\n  bottom: 50,\n  left: 50,\n  right: 50\n};\nlet chart = new _scripts_chart_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](width, height, margin);\nchart.createChart(dup);\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  const squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n  chart.deleteChart();\n  let dup = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_scripts_office_json__WEBPACK_IMPORTED_MODULE_1__);\n  chart.createChart(dup, squareFootage);\n  console.log(chart.getTotal(dup));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDa0M7QUFDTztBQUNDO0FBQ0g7QUFDQztBQUV4QyxJQUFJSSxHQUFHLEdBQUdELDREQUFPLENBQUNILGlEQUFJLENBQUM7QUFFdkIsTUFBTUssS0FBSyxHQUFHLElBQUk7QUFDbEIsTUFBTUMsTUFBTSxHQUFHLElBQUk7QUFDbkIsTUFBTUMsTUFBTSxHQUFHO0VBQUVDLEdBQUcsRUFBRSxFQUFFO0VBQUVDLE1BQU0sRUFBRSxFQUFFO0VBQUVDLElBQUksRUFBRSxFQUFFO0VBQUVDLEtBQUssRUFBRTtBQUFHLENBQUM7QUFFM0QsSUFBSUMsS0FBSyxHQUFHLElBQUlWLHlEQUFLLENBQUNHLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLENBQUM7QUFDNUNLLEtBQUssQ0FBQ0MsV0FBVyxDQUFDVCxHQUFHLENBQUM7O0FBRXRCO0FBQ0EsSUFBSVUsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFDaEQsSUFBSUYsSUFBSSxFQUFFQSxJQUFJLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBRUMsWUFBWSxDQUFDOztBQUV2RDtBQUNBLFNBQVNBLFlBQVksQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3ZCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtFQUNsQixNQUFNQyxhQUFhLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDTSxLQUFLO0VBQ3pELE1BQU1DLE1BQU0sR0FBR1IsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNNLEtBQUs7RUFFdERWLEtBQUssQ0FBQ1ksV0FBVyxFQUFFO0VBQ25CLElBQUlwQixHQUFHLEdBQUdELDREQUFPLENBQUNILGlEQUFJLENBQUM7RUFDdkJZLEtBQUssQ0FBQ0MsV0FBVyxDQUFDVCxHQUFHLEVBQUVpQixhQUFhLENBQUM7RUFDckNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxLQUFLLENBQUNlLFFBQVEsQ0FBQ3ZCLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGlmeS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4vc2NyaXB0cy9jaGFydHJmLmpzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvdHJhZGVzZWxlY3QuanNcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL3NjcmlwdHMvb2ZmaWNlLmpzb25cIjtcbmltcG9ydCBEYXRhMiBmcm9tIFwiLi9zY3JpcHRzL29mZmljZS5qc29uXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vc2NyaXB0cy9jaGFydC5qc1wiO1xuaW1wb3J0IGR1cERhdGEgZnJvbSBcIi4vc2NyaXB0cy9kYXRhLmpzXCI7XG5cbmxldCBkdXAgPSBkdXBEYXRhKERhdGEpO1xuXG5jb25zdCB3aWR0aCA9IDE0MDA7XG5jb25zdCBoZWlnaHQgPSAxMDAwO1xuY29uc3QgbWFyZ2luID0geyB0b3A6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCwgcmlnaHQ6IDUwIH07XG5cbmxldCBjaGFydCA9IG5ldyBDaGFydCh3aWR0aCwgaGVpZ2h0LCBtYXJnaW4pO1xuY2hhcnQuY3JlYXRlQ2hhcnQoZHVwKTtcblxuLy8gdXNlciBpbnB1dCBldmVudCBsaXN0ZW5lciAvIHNldCBpbnB1dCB2YXJpYWJsZXNcbmxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWlucHV0XCIpO1xuaWYgKGZvcm0pIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBjcmVhdGVCdWRnZXQpO1xuXG4vLyB1c2VyIGlucHV0IGV2ZW50IGhhbmRsZXJcbmZ1bmN0aW9uIGNyZWF0ZUJ1ZGdldChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc3F1YXJlRm9vdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ZcIikudmFsdWU7XG4gIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0XCIpLnZhbHVlO1xuXG4gIGNoYXJ0LmRlbGV0ZUNoYXJ0KCk7XG4gIGxldCBkdXAgPSBkdXBEYXRhKERhdGEpO1xuICBjaGFydC5jcmVhdGVDaGFydChkdXAsIHNxdWFyZUZvb3RhZ2UpO1xuICBjb25zb2xlLmxvZyhjaGFydC5nZXRUb3RhbChkdXApKTtcbn1cbiJdLCJuYW1lcyI6WyJEYXRhIiwiRGF0YTIiLCJDaGFydCIsImR1cERhdGEiLCJkdXAiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImNoYXJ0IiwiY3JlYXRlQ2hhcnQiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVCdWRnZXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzcXVhcmVGb290YWdlIiwidmFsdWUiLCJidWRnZXQiLCJkZWxldGVDaGFydCIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb3RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/chart.js":
/*!******************************!*\
  !*** ./src/scripts/chart.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _office_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./office.json */ \"./src/scripts/office.json\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/scripts/data.js\");\n\n\n\n// const width = 800;\n// const height = 750;\n// const margin = { top: 50, bottom: 50, left: 50, right: 50 };\n\nclass Chart {\n  constructor(width, height, margin) {\n    this.width = width;\n    this.height = height;\n    this.margin = margin;\n  }\n  createChart(data) {\n    let sf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    for (let i = 0; i < data.length; i++) {\n      data[i].rate *= sf;\n    }\n    this.svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"height\", this.height - this.margin.top - this.margin.bottom).attr(\"width\", this.width - this.margin.left - this.margin.right).attr(\"viewBox\", [0, 0, this.width, this.height]);\n    this.x = d3.scaleBand().domain(d3.range(data.length)).range([this.margin.left, this.width - this.margin.right]).padding(0.1);\n    this.y = d3.scaleLinear().domain([0, d3.max(data.map(e => e.rate))]).range([this.height - this.margin.bottom, this.margin.top]);\n    this.svg.append(\"g\").attr(\"fill\", \"royalblue\").selectAll(\"rect\").data(data).join(\"rect\").attr(\"x\", (d, i) => this.x(i)).attr(\"y\", d => this.y(d.rate)).attr(\"height\", d => this.y(0) - this.y(d.rate)).attr(\"width\", this.x.bandwidth());\n    function xAxis(g) {\n      g.attr(\"transform\", `translate(0, ${this.height - this.margin.bottom})`).call(d3.axisBottom(this.x).tickFormat(i => data[i].trade)).attr(\"font-size\", \"15px\");\n    }\n    function yAxis(g) {\n      g.attr(\"transform\", `translate(${this.margin.left}, 0)`).call(d3.axisLeft(this.y).ticks(null, data.format)).attr(\"font-size\", \"12px\");\n    }\n    this.svg.append(\"g\").call(xAxis.bind(this));\n    this.svg.append(\"g\").call(yAxis.bind(this));\n    this.svg.node();\n  }\n  deleteChart() {\n    let mainChartDiv = document.getElementById(\"main-chart\");\n    mainChartDiv.innerHTML = \"\";\n  }\n  getTotal(data) {\n    let total = 0;\n    for (let i = 0; i < data.length; i++) {\n      total += data[i].rate;\n    }\n    return total;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDc0IsSUFBSSxDQUFDSSxLQUFLLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUNqQyxHQUFHLENBQUNrQyxJQUFJLEVBQUU7RUFDakI7RUFFQUMsV0FBVyxHQUFHO0lBQ1osSUFBSUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7SUFDeERGLFlBQVksQ0FBQ0csU0FBUyxHQUFHLEVBQUU7RUFDN0I7RUFFQUMsUUFBUSxDQUFDN0MsSUFBSSxFQUFFO0lBQ2IsSUFBSThDLEtBQUssR0FBRyxDQUFDO0lBQ2IsS0FBSyxJQUFJNUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixJQUFJLENBQUNHLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDcEM0QyxLQUFLLElBQUk5QyxJQUFJLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxJQUFJO0lBQ3ZCO0lBQ0EsT0FBTzBDLEtBQUs7RUFDZDtBQUNGO0FBRUEsK0RBQWVwRCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGlmeS8uL3NyYy9zY3JpcHRzL2NoYXJ0LmpzPzE1YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGEgZnJvbSBcIi4vb2ZmaWNlLmpzb25cIjtcbmltcG9ydCBEYXRhMiBmcm9tIFwiLi9vZmZpY2UuanNvblwiO1xuaW1wb3J0IGR1cERhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xuLy8gY29uc3Qgd2lkdGggPSA4MDA7XG4vLyBjb25zdCBoZWlnaHQgPSA3NTA7XG4vLyBjb25zdCBtYXJnaW4gPSB7IHRvcDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAgfTtcblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBtYXJnaW4pIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5tYXJnaW4gPSBtYXJnaW47XG4gIH1cblxuICBjcmVhdGVDaGFydChkYXRhLCBzZiA9IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFbaV0ucmF0ZSAqPSBzZjtcbiAgICB9XG5cbiAgICB0aGlzLnN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KFwiI21haW4tY2hhcnRcIilcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFswLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodF0pO1xuXG4gICAgdGhpcy54ID0gZDNcbiAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbihkMy5yYW5nZShkYXRhLmxlbmd0aCkpXG4gICAgICAucmFuZ2UoW3RoaXMubWFyZ2luLmxlZnQsIHRoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodF0pXG4gICAgICAucGFkZGluZygwLjEpO1xuXG4gICAgdGhpcy55ID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YS5tYXAoKGUpID0+IGUucmF0ZSkpXSlcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20sIHRoaXMubWFyZ2luLnRvcF0pO1xuXG4gICAgdGhpcy5zdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJyb3lhbGJsdWVcIilcbiAgICAgIC5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAuZGF0YShkYXRhKVxuICAgICAgLmpvaW4oXCJyZWN0XCIpXG4gICAgICAuYXR0cihcInhcIiwgKGQsIGkpID0+IHRoaXMueChpKSlcbiAgICAgIC5hdHRyKFwieVwiLCAoZCkgPT4gdGhpcy55KGQucmF0ZSkpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gdGhpcy55KDApIC0gdGhpcy55KGQucmF0ZSkpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMueC5iYW5kd2lkdGgoKSk7XG5cbiAgICBmdW5jdGlvbiB4QXhpcyhnKSB7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tfSlgKVxuICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkudGlja0Zvcm1hdCgoaSkgPT4gZGF0YVtpXS50cmFkZSkpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMTVweFwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB5QXhpcyhnKSB7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAwKWApXG4gICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkudGlja3MobnVsbCwgZGF0YS5mb3JtYXQpKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjEycHhcIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5jYWxsKHhBeGlzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIikuY2FsbCh5QXhpcy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnN2Zy5ub2RlKCk7XG4gIH1cblxuICBkZWxldGVDaGFydCgpIHtcbiAgICBsZXQgbWFpbkNoYXJ0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNoYXJ0XCIpO1xuICAgIG1haW5DaGFydERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgZ2V0VG90YWwoZGF0YSkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbCArPSBkYXRhW2ldLnJhdGU7XG4gICAgfVxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJuYW1lcyI6WyJEYXRhIiwiRGF0YTIiLCJkdXBEYXRhIiwiQ2hhcnQiLCJjb25zdHJ1Y3RvciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwiY3JlYXRlQ2hhcnQiLCJkYXRhIiwic2YiLCJpIiwibGVuZ3RoIiwicmF0ZSIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIngiLCJzY2FsZUJhbmQiLCJkb21haW4iLCJyYW5nZSIsInBhZGRpbmciLCJ5Iiwic2NhbGVMaW5lYXIiLCJtYXgiLCJtYXAiLCJlIiwic2VsZWN0QWxsIiwiam9pbiIsImQiLCJiYW5kd2lkdGgiLCJ4QXhpcyIsImciLCJjYWxsIiwiYXhpc0JvdHRvbSIsInRpY2tGb3JtYXQiLCJ0cmFkZSIsInlBeGlzIiwiYXhpc0xlZnQiLCJ0aWNrcyIsImZvcm1hdCIsImJpbmQiLCJub2RlIiwiZGVsZXRlQ2hhcnQiLCJtYWluQ2hhcnREaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZ2V0VG90YWwiLCJ0b3RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/chart.js\n");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction dupData(data) {\n  return JSON.parse(JSON.stringify(data));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (dupData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSxPQUFPLENBQUNDLElBQUksRUFBRTtFQUNyQixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNILElBQUksQ0FBQyxDQUFDO0FBQ3pDO0FBRUEsK0RBQWVELE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0aWZ5Ly4vc3JjL3NjcmlwdHMvZGF0YS5qcz9mYmQxIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGR1cERhdGEoZGF0YSkge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGR1cERhdGE7XG4iXSwibmFtZXMiOlsiZHVwRGF0YSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/data.js\n");

/***/ }),

/***/ "./src/scripts/tradeselect.js":
/*!************************************!*\
  !*** ./src/scripts/tradeselect.js ***!
  \************************************/
/***/ (function() {

eval("const tradesExcludedDiv = document.getElementById(\"trades-excluded\");\nconst tradesSelectedDiv = document.getElementById(\"trade-selector\");\nif (tradesSelectedDiv) tradesSelectedDiv.addEventListener(\"click\", excludeTrade);\nfunction excludeTrade(e) {\n  let clicked = e.target;\n  console.log(clicked.className);\n  if (clicked.className === \"trade\") {\n    tradesExcludedDiv.appendChild(e.target);\n  }\n}\nlet tradesExcluded = document.getElementById(\"trades-excluded\");\nif (tradesExcluded) tradesExcluded.addEventListener(\"click\", includeTrade);\nfunction includeTrade(e) {\n  let clicked = e.target;\n  console.log(clicked.classList);\n  if (clicked.className === \"trade\") {\n    tradesSelectedDiv.appendChild(e.target);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90cmFkZXNlbGVjdC5qcy5qcyIsIm5hbWVzIjpbInRyYWRlc0V4Y2x1ZGVkRGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRyYWRlc1NlbGVjdGVkRGl2IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4Y2x1ZGVUcmFkZSIsImUiLCJjbGlja2VkIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwidHJhZGVzRXhjbHVkZWQiLCJpbmNsdWRlVHJhZGUiLCJjbGFzc0xpc3QiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RpZnkvLi9zcmMvc2NyaXB0cy90cmFkZXNlbGVjdC5qcz8zZTg0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRyYWRlc0V4Y2x1ZGVkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFkZXMtZXhjbHVkZWRcIik7XG5jb25zdCB0cmFkZXNTZWxlY3RlZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhZGUtc2VsZWN0b3JcIik7XG5cbmlmICh0cmFkZXNTZWxlY3RlZERpdilcbiAgdHJhZGVzU2VsZWN0ZWREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4Y2x1ZGVUcmFkZSk7XG5cbmZ1bmN0aW9uIGV4Y2x1ZGVUcmFkZShlKSB7XG4gIGxldCBjbGlja2VkID0gZS50YXJnZXQ7XG4gIGNvbnNvbGUubG9nKGNsaWNrZWQuY2xhc3NOYW1lKTtcbiAgaWYgKGNsaWNrZWQuY2xhc3NOYW1lID09PSBcInRyYWRlXCIpIHtcbiAgICB0cmFkZXNFeGNsdWRlZERpdi5hcHBlbmRDaGlsZChlLnRhcmdldCk7XG4gIH1cbn1cblxubGV0IHRyYWRlc0V4Y2x1ZGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFkZXMtZXhjbHVkZWRcIik7XG5pZiAodHJhZGVzRXhjbHVkZWQpIHRyYWRlc0V4Y2x1ZGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmNsdWRlVHJhZGUpO1xuXG5mdW5jdGlvbiBpbmNsdWRlVHJhZGUoZSkge1xuICBsZXQgY2xpY2tlZCA9IGUudGFyZ2V0O1xuICBjb25zb2xlLmxvZyhjbGlja2VkLmNsYXNzTGlzdCk7XG4gIGlmIChjbGlja2VkLmNsYXNzTmFtZSA9PT0gXCJ0cmFkZVwiKSB7XG4gICAgdHJhZGVzU2VsZWN0ZWREaXYuYXBwZW5kQ2hpbGQoZS50YXJnZXQpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztBQUNwRSxNQUFNQyxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7QUFFbkUsSUFBSUMsaUJBQWlCLEVBQ25CQSxpQkFBaUIsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7QUFFM0QsU0FBU0EsWUFBWSxDQUFDQyxDQUFDLEVBQUU7RUFDdkIsSUFBSUMsT0FBTyxHQUFHRCxDQUFDLENBQUNFLE1BQU07RUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUNJLFNBQVMsQ0FBQztFQUM5QixJQUFJSixPQUFPLENBQUNJLFNBQVMsS0FBSyxPQUFPLEVBQUU7SUFDakNYLGlCQUFpQixDQUFDWSxXQUFXLENBQUNOLENBQUMsQ0FBQ0UsTUFBTSxDQUFDO0VBQ3pDO0FBQ0Y7QUFFQSxJQUFJSyxjQUFjLEdBQUdaLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0FBQy9ELElBQUlXLGNBQWMsRUFBRUEsY0FBYyxDQUFDVCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVVLFlBQVksQ0FBQztBQUUxRSxTQUFTQSxZQUFZLENBQUNSLENBQUMsRUFBRTtFQUN2QixJQUFJQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsTUFBTTtFQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE9BQU8sQ0FBQ1EsU0FBUyxDQUFDO0VBQzlCLElBQUlSLE9BQU8sQ0FBQ0ksU0FBUyxLQUFLLE9BQU8sRUFBRTtJQUNqQ1IsaUJBQWlCLENBQUNTLFdBQVcsQ0FBQ04sQ0FBQyxDQUFDRSxNQUFNLENBQUM7RUFDekM7QUFDRiJ9\n//# sourceURL=webpack-internal:///./src/scripts/tradeselect.js\n");

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
module.exports = JSON.parse('[{"trade":"Gen Req","rate":20},{"trade":"Demo","rate":10},{"trade":"Conc","rate":5},{"trade":"Mas","rate":4},{"trade":"Mtls","rate":50},{"trade":"Woods","rate":20},{"trade":"Therm","rate":20},{"trade":"Fins","rate":18},{"trade":"Spec","rate":10},{"trade":"Furn","rate":15},{"trade":"Spec Cnst","rate":2},{"trade":"Conv","rate":25},{"trade":"Mech","rate":14},{"trade":"Plbg","rate":20},{"trade":"Elec","rate":22},{"trade":"FP","rate":2.75}]');

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