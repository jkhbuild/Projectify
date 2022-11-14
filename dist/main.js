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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_example__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/chart */ \"./src/scripts/chart.js\");\n/* harmony import */ var _scripts_office_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/office.json */ \"./src/scripts/office.json\");\n\n\n\n\n// variable to store all x axis (construction trades)\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   const main = document.getElementById(\"main\");\n//   // new Example(main);\n//   console.log(Data.rates[\"06-woodAndPlastics\"]);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0M7QUFDZjtBQUNnQjs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RpZnkvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9jaGFydFwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vc2NyaXB0cy9vZmZpY2UuanNvblwiO1xuXG4vLyB2YXJpYWJsZSB0byBzdG9yZSBhbGwgeCBheGlzIChjb25zdHJ1Y3Rpb24gdHJhZGVzKVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4vLyAgIC8vIG5ldyBFeGFtcGxlKG1haW4pO1xuLy8gICBjb25zb2xlLmxvZyhEYXRhLnJhdGVzW1wiMDYtd29vZEFuZFBsYXN0aWNzXCJdKTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/chart.js":
/*!******************************!*\
  !*** ./src/scripts/chart.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _office_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./office.json */ \"./src/scripts/office.json\");\n\n// import * as d3 from \"d3\";\nconst tradeNames = [\"Gen Reqs\", \"Demo\", \"Conc\", \"Mas\", \"Mtls\", \"Woods\", \"Therm Prot\", \"Wndws\", \"Fins\", \"Spec\", \"Furn\", \"Spec Const\", \"Conv Sys\", \"Mech/Plbg\", \"Elec\"];\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  const squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n\n  // y-Axis values\n  const yAxis = Object.values(_office_json__WEBPACK_IMPORTED_MODULE_0__.rates);\n  for (let i = 0; i < yAxis.length; i++) {\n    yAxis[i] *= squareFootage.value;\n  }\n\n  // x-Axis values\n  const xAxis = Object.keys(_office_json__WEBPACK_IMPORTED_MODULE_0__.rates);\n\n  // Creating SVG\n  let HEIGHT = 500;\n  let WIDTH = 500;\n  let margin = {\n    top: 30,\n    right: 0,\n    bottom: 60,\n    left: 30\n  };\n  let svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"width\", 500).attr(\"height\", 50000).attr(\"transform\", \"translate(\" + 100 + \",\" + 100 + \")\");\n\n  // Creating y-Axis\n  let yScale = d3.scaleLinear().range([500, 0]);\n  function createAxisLeft(data) {\n    yScale.domain([0, d3.max(yAxis)]).nice();\n    svg.append(\"g\").call(d3.axisLeft(yScale));\n  }\n  console.log(yAxis);\n  console.log(xAxis);\n  createAxisLeft(_office_json__WEBPACK_IMPORTED_MODULE_0__);\n\n  //Creating x-Axis\n  let xScale = d3.scaleBand().range([0, 500]).padding(0.2);\n  function createAxisBottom(data) {\n    xScale.domain(xAxis);\n    const text = svg.append(\"g\").attr(\"transform\", `translate(0, 500)`).call(d3.axisBottom(xScale));\n  }\n  createAxisBottom(_office_json__WEBPACK_IMPORTED_MODULE_0__);\n  function createBars(data) {\n    let bars = svg.selectAll(\".bars\").data(xAxis).enter().append(\"g\").attr(\"class\", \"bars\").style(\"opacity\", 1);\n    bars.append(\"rect\").attr(\"class\", \"bar\").attr(\"x\", xAxis).attr(\"y\", 0).attr(\"width\", xScale.bandwidth()).attr(\"height\", 0).style(\"fill\", \"steelblue\").transition().duration(750).attr(\"y\", d => yScale(yAxis)).attr(\"height\", d => HEIGHT - yScale(d.value));\n    console.log(y);\n  }\n  createBars(_office_json__WEBPACK_IMPORTED_MODULE_0__);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDL0JtQixJQUFJLENBQUMsUUFBUSxFQUFHMkIsQ0FBQyxJQUFLdEMsTUFBTSxHQUFHWSxNQUFNLENBQUMwQixDQUFDLENBQUNoRCxLQUFLLENBQUMsQ0FBQztJQUNsRGdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0IsQ0FBQyxDQUFDO0VBQ2hCO0VBRUFULFVBQVUsQ0FBQ2xELHlDQUFJLENBQUM7QUFDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0aWZ5Ly4vc3JjL3NjcmlwdHMvY2hhcnQuanM/MTViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YSBmcm9tIFwiLi9vZmZpY2UuanNvblwiO1xuLy8gaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5jb25zdCB0cmFkZU5hbWVzID0gW1xuICBcIkdlbiBSZXFzXCIsXG4gIFwiRGVtb1wiLFxuICBcIkNvbmNcIixcbiAgXCJNYXNcIixcbiAgXCJNdGxzXCIsXG4gIFwiV29vZHNcIixcbiAgXCJUaGVybSBQcm90XCIsXG4gIFwiV25kd3NcIixcbiAgXCJGaW5zXCIsXG4gIFwiU3BlY1wiLFxuICBcIkZ1cm5cIixcbiAgXCJTcGVjIENvbnN0XCIsXG4gIFwiQ29udiBTeXNcIixcbiAgXCJNZWNoL1BsYmdcIixcbiAgXCJFbGVjXCIsXG5dO1xuXG4vLyB1c2VyIGlucHV0IGV2ZW50IGxpc3RlbmVyIC8gc2V0IGlucHV0IHZhcmlhYmxlc1xubGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItaW5wdXRcIik7XG5pZiAoZm9ybSkgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNyZWF0ZUJ1ZGdldCk7XG5cbi8vIHVzZXIgaW5wdXQgZXZlbnQgaGFuZGxlclxuZnVuY3Rpb24gY3JlYXRlQnVkZ2V0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHNxdWFyZUZvb3RhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNmXCIpLnZhbHVlO1xuICBjb25zdCBidWRnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldFwiKS52YWx1ZTtcblxuICAvLyB5LUF4aXMgdmFsdWVzXG4gIGNvbnN0IHlBeGlzID0gT2JqZWN0LnZhbHVlcyhEYXRhLnJhdGVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB5QXhpcy5sZW5ndGg7IGkrKykge1xuICAgIHlBeGlzW2ldICo9IHNxdWFyZUZvb3RhZ2UudmFsdWU7XG4gIH1cblxuICAvLyB4LUF4aXMgdmFsdWVzXG4gIGNvbnN0IHhBeGlzID0gT2JqZWN0LmtleXMoRGF0YS5yYXRlcyk7XG5cbiAgLy8gQ3JlYXRpbmcgU1ZHXG4gIGxldCBIRUlHSFQgPSA1MDA7XG4gIGxldCBXSURUSCA9IDUwMDtcbiAgbGV0IG1hcmdpbiA9IHsgdG9wOiAzMCwgcmlnaHQ6IDAsIGJvdHRvbTogNjAsIGxlZnQ6IDMwIH07XG4gIGxldCBzdmcgPSBkM1xuICAgIC5zZWxlY3QoXCIjbWFpbi1jaGFydFwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIDUwMClcbiAgICAuYXR0cihcImhlaWdodFwiLCA1MDAwMClcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIDEwMCArIFwiLFwiICsgMTAwICsgXCIpXCIpO1xuXG4gIC8vIENyZWF0aW5nIHktQXhpc1xuICBsZXQgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbNTAwLCAwXSk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXhpc0xlZnQoZGF0YSkge1xuICAgIHlTY2FsZS5kb21haW4oWzAsIGQzLm1heCh5QXhpcyldKS5uaWNlKCk7XG5cbiAgICBzdmcuYXBwZW5kKFwiZ1wiKS5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSkpO1xuICB9XG4gIGNvbnNvbGUubG9nKHlBeGlzKTtcbiAgY29uc29sZS5sb2coeEF4aXMpO1xuICBjcmVhdGVBeGlzTGVmdChEYXRhKTtcblxuICAvL0NyZWF0aW5nIHgtQXhpc1xuICBsZXQgeFNjYWxlID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIDUwMF0pLnBhZGRpbmcoMC4yKTtcblxuICBmdW5jdGlvbiBjcmVhdGVBeGlzQm90dG9tKGRhdGEpIHtcbiAgICB4U2NhbGUuZG9tYWluKHhBeGlzKTtcblxuICAgIGNvbnN0IHRleHQgPSBzdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsIDUwMClgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4U2NhbGUpKTtcbiAgfVxuXG4gIGNyZWF0ZUF4aXNCb3R0b20oRGF0YSk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQmFycyhkYXRhKSB7XG4gICAgbGV0IGJhcnMgPSBzdmdcbiAgICAgIC5zZWxlY3RBbGwoXCIuYmFyc1wiKVxuICAgICAgLmRhdGEoeEF4aXMpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJzXCIpXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXG4gICAgYmFyc1xuICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAgIC5hdHRyKFwieFwiLCB4QXhpcylcbiAgICAgIC5hdHRyKFwieVwiLCAwKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAwKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInN0ZWVsYmx1ZVwiKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyKFwieVwiLCAoZCkgPT4geVNjYWxlKHlBeGlzKSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiBIRUlHSFQgLSB5U2NhbGUoZC52YWx1ZSkpO1xuICAgIGNvbnNvbGUubG9nKHkpO1xuICB9XG5cbiAgY3JlYXRlQmFycyhEYXRhKTtcbn1cbiJdLCJuYW1lcyI6WyJEYXRhIiwidHJhZGVOYW1lcyIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUJ1ZGdldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNxdWFyZUZvb3RhZ2UiLCJ2YWx1ZSIsImJ1ZGdldCIsInlBeGlzIiwiT2JqZWN0IiwidmFsdWVzIiwicmF0ZXMiLCJpIiwibGVuZ3RoIiwieEF4aXMiLCJrZXlzIiwiSEVJR0hUIiwiV0lEVEgiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwiY3JlYXRlQXhpc0xlZnQiLCJkYXRhIiwiZG9tYWluIiwibWF4IiwibmljZSIsImNhbGwiLCJheGlzTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJ4U2NhbGUiLCJzY2FsZUJhbmQiLCJwYWRkaW5nIiwiY3JlYXRlQXhpc0JvdHRvbSIsInRleHQiLCJheGlzQm90dG9tIiwiY3JlYXRlQmFycyIsImJhcnMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInN0eWxlIiwiYmFuZHdpZHRoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/chart.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function() {

eval("// class Example {\n//   constructor(ele) {\n//     this.ele = ele;\n//     this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n\n//     this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n//   }\n\n//   handleClick() {\n//     this.ele.children[0].innerText = \"Ouch!\";\n//   }\n// }\n\n// export default Example;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGlmeS8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGFzcyBFeGFtcGxlIHtcbi8vICAgY29uc3RydWN0b3IoZWxlKSB7XG4vLyAgICAgdGhpcy5lbGUgPSBlbGU7XG4vLyAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+SXQncyBBTElWRSEhITwvaDE+XCI7XG5cbi8vICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbi8vICAgfVxuXG4vLyAgIGhhbmRsZUNsaWNrKCkge1xuLy8gICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaCFcIjtcbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

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
module.exports = JSON.parse('{"rates":{"01-generalRequirements":10,"02-demoltion":10,"03-concrete":10,"04-masonry":10,"05-metals":10,"06-woodAndPlastics":10,"07-thermalAndMoistureProtection":10,"08-openings":10,"09-finishes":10,"10-specialties":10,"11-equipment":10,"12-furnishings":10,"13-specialConstruction":10,"14-conveyingSystems":10,"15-mechanicalAndPlumbing":40,"16-electrical":10}}');

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