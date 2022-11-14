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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/chart */ \"./src/scripts/chart.js\");\n/* harmony import */ var _scripts_office_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/office.json */ \"./src/scripts/office.json\");\n\n\n\n// variable to store all x axis (construction trades)\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   const main = document.getElementById(\"main\");\n//   // new Example(main);\n//   console.log(Data.rates[\"06-woodAndPlastics\"]);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXlCO0FBQ2dCOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGlmeS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc2NyaXB0cy9jaGFydFwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vc2NyaXB0cy9vZmZpY2UuanNvblwiO1xuXG4vLyB2YXJpYWJsZSB0byBzdG9yZSBhbGwgeCBheGlzIChjb25zdHJ1Y3Rpb24gdHJhZGVzKVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4vLyAgIC8vIG5ldyBFeGFtcGxlKG1haW4pO1xuLy8gICBjb25zb2xlLmxvZyhEYXRhLnJhdGVzW1wiMDYtd29vZEFuZFBsYXN0aWNzXCJdKTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbIkRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/chart.js":
/*!******************************!*\
  !*** ./src/scripts/chart.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _office_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./office.json */ \"./src/scripts/office.json\");\n\n// import * as d3 from \"d3\";\nconst tradeNames = [\"Gen Reqs\", \"Demo\", \"Conc\", \"Mas\", \"Mtls\", \"Woods\", \"Therm Prot\", \"Wndws\", \"Fins\", \"Spec\", \"Furn\", \"Spec Const\", \"Conv Sys\", \"Mech/Plbg\", \"Elec\"];\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  const squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n\n  // y-Axis values\n  console.log(_office_json__WEBPACK_IMPORTED_MODULE_0__.rates);\n  const yAxis = Object.values(_office_json__WEBPACK_IMPORTED_MODULE_0__.rates);\n  for (let i = 0; i < yAxis.length; i++) {\n    yAxis[i] *= squareFootage;\n  }\n\n  // x-Axis values\n  const xAxis = Object.keys(_office_json__WEBPACK_IMPORTED_MODULE_0__.rates);\n\n  // Creating SVG\n  let HEIGHT = 500;\n  let WIDTH = 500;\n  let margin = {\n    top: 30,\n    right: 0,\n    bottom: 60,\n    left: 30\n  };\n  let svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"width\", 500).attr(\"height\", 500).attr(\"transform\", \"translate(\" + 100 + \",\" + 100 + \")\");\n\n  // Creating y-Axis\n  let yScale = d3.scaleLinear().range([500, 0]);\n  function createAxisLeft(data) {\n    yScale.domain([0, d3.max(yAxis)]).nice();\n    svg.append(\"g\").call(d3.axisLeft(yScale));\n  }\n  console.log(yAxis);\n  console.log(xAxis);\n  createAxisLeft(_office_json__WEBPACK_IMPORTED_MODULE_0__);\n\n  //Creating x-Axis\n  let xScale = d3.scaleBand().range([0, 500]).padding(0.2);\n  function createAxisBottom(data) {\n    xScale.domain(xAxis);\n    const text = svg.append(\"g\").attr(\"transform\", `translate(0, 500)`).call(d3.axisBottom(xScale));\n  }\n  createAxisBottom(_office_json__WEBPACK_IMPORTED_MODULE_0__);\n  function createBars(data) {\n    let bars = svg.selectAll(\".bars\").data(xAxis).enter().append(\"g\").attr(\"class\", \"bars\").style(\"opacity\", 1);\n    bars.append(\"rect\").attr(\"class\", \"bar\").attr(\"x\", xAxis).attr(\"y\", 0).attr(\"width\", xScale.bandwidth()).attr(\"height\", 0).style(\"fill\", \"steelblue\").transition().duration(750).attr(\"y\", d => yScale(yAxis)).attr(\"height\", d => HEIGHT - yScale(d.value));\n    console.log(yScale);\n  }\n  createBars(_office_json__WEBPACK_IMPORTED_MODULE_0__);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQ25CLEtBQUssQ0FBQyxDQUFDLENBQy9Ca0IsSUFBSSxDQUFDLFFBQVEsRUFBR3lCLENBQUMsSUFBS3BDLE1BQU0sR0FBR1ksTUFBTSxDQUFDd0IsQ0FBQyxDQUFDaEQsS0FBSyxDQUFDLENBQUM7SUFDbERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcUIsTUFBTSxDQUFDO0VBQ3JCO0VBRUFnQixVQUFVLENBQUNsRCx5Q0FBSSxDQUFDO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGlmeS8uL3NyYy9zY3JpcHRzL2NoYXJ0LmpzPzE1YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGEgZnJvbSBcIi4vb2ZmaWNlLmpzb25cIjtcbi8vIGltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuY29uc3QgdHJhZGVOYW1lcyA9IFtcbiAgXCJHZW4gUmVxc1wiLFxuICBcIkRlbW9cIixcbiAgXCJDb25jXCIsXG4gIFwiTWFzXCIsXG4gIFwiTXRsc1wiLFxuICBcIldvb2RzXCIsXG4gIFwiVGhlcm0gUHJvdFwiLFxuICBcIlduZHdzXCIsXG4gIFwiRmluc1wiLFxuICBcIlNwZWNcIixcbiAgXCJGdXJuXCIsXG4gIFwiU3BlYyBDb25zdFwiLFxuICBcIkNvbnYgU3lzXCIsXG4gIFwiTWVjaC9QbGJnXCIsXG4gIFwiRWxlY1wiLFxuXTtcblxuLy8gdXNlciBpbnB1dCBldmVudCBsaXN0ZW5lciAvIHNldCBpbnB1dCB2YXJpYWJsZXNcbmxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWlucHV0XCIpO1xuaWYgKGZvcm0pIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBjcmVhdGVCdWRnZXQpO1xuXG4vLyB1c2VyIGlucHV0IGV2ZW50IGhhbmRsZXJcbmZ1bmN0aW9uIGNyZWF0ZUJ1ZGdldChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc3F1YXJlRm9vdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ZcIikudmFsdWU7XG4gIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0XCIpLnZhbHVlO1xuXG4gIC8vIHktQXhpcyB2YWx1ZXNcbiAgY29uc29sZS5sb2coRGF0YS5yYXRlcyk7XG4gIGNvbnN0IHlBeGlzID0gT2JqZWN0LnZhbHVlcyhEYXRhLnJhdGVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB5QXhpcy5sZW5ndGg7IGkrKykge1xuICAgIHlBeGlzW2ldICo9IHNxdWFyZUZvb3RhZ2U7XG4gIH1cblxuICAvLyB4LUF4aXMgdmFsdWVzXG4gIGNvbnN0IHhBeGlzID0gT2JqZWN0LmtleXMoRGF0YS5yYXRlcyk7XG5cbiAgLy8gQ3JlYXRpbmcgU1ZHXG4gIGxldCBIRUlHSFQgPSA1MDA7XG4gIGxldCBXSURUSCA9IDUwMDtcbiAgbGV0IG1hcmdpbiA9IHsgdG9wOiAzMCwgcmlnaHQ6IDAsIGJvdHRvbTogNjAsIGxlZnQ6IDMwIH07XG4gIGxldCBzdmcgPSBkM1xuICAgIC5zZWxlY3QoXCIjbWFpbi1jaGFydFwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIDUwMClcbiAgICAuYXR0cihcImhlaWdodFwiLCA1MDApXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAxMDAgKyBcIixcIiArIDEwMCArIFwiKVwiKTtcblxuICAvLyBDcmVhdGluZyB5LUF4aXNcbiAgbGV0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzUwMCwgMF0pO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUF4aXNMZWZ0KGRhdGEpIHtcbiAgICB5U2NhbGUuZG9tYWluKFswLCBkMy5tYXgoeUF4aXMpXSkubmljZSgpO1xuXG4gICAgc3ZnLmFwcGVuZChcImdcIikuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpKTtcbiAgfVxuICBjb25zb2xlLmxvZyh5QXhpcyk7XG4gIGNvbnNvbGUubG9nKHhBeGlzKTtcbiAgY3JlYXRlQXhpc0xlZnQoRGF0YSk7XG5cbiAgLy9DcmVhdGluZyB4LUF4aXNcbiAgbGV0IHhTY2FsZSA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCA1MDBdKS5wYWRkaW5nKDAuMik7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXhpc0JvdHRvbShkYXRhKSB7XG4gICAgeFNjYWxlLmRvbWFpbih4QXhpcyk7XG5cbiAgICBjb25zdCB0ZXh0ID0gc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCA1MDApYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeFNjYWxlKSk7XG4gIH1cblxuICBjcmVhdGVBeGlzQm90dG9tKERhdGEpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJhcnMoZGF0YSkge1xuICAgIGxldCBiYXJzID0gc3ZnXG4gICAgICAuc2VsZWN0QWxsKFwiLmJhcnNcIilcbiAgICAgIC5kYXRhKHhBeGlzKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyc1wiKVxuICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblxuICAgIGJhcnNcbiAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAuYXR0cihcInhcIiwgeEF4aXMpXG4gICAgICAuYXR0cihcInlcIiwgMClcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMClcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJzdGVlbGJsdWVcIilcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0cihcInlcIiwgKGQpID0+IHlTY2FsZSh5QXhpcykpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gSEVJR0hUIC0geVNjYWxlKGQudmFsdWUpKTtcbiAgICBjb25zb2xlLmxvZyh5U2NhbGUpO1xuICB9XG5cbiAgY3JlYXRlQmFycyhEYXRhKTtcbn1cbiJdLCJuYW1lcyI6WyJEYXRhIiwidHJhZGVOYW1lcyIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUJ1ZGdldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNxdWFyZUZvb3RhZ2UiLCJ2YWx1ZSIsImJ1ZGdldCIsImNvbnNvbGUiLCJsb2ciLCJyYXRlcyIsInlBeGlzIiwiT2JqZWN0IiwidmFsdWVzIiwiaSIsImxlbmd0aCIsInhBeGlzIiwia2V5cyIsIkhFSUdIVCIsIldJRFRIIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImNyZWF0ZUF4aXNMZWZ0IiwiZGF0YSIsImRvbWFpbiIsIm1heCIsIm5pY2UiLCJjYWxsIiwiYXhpc0xlZnQiLCJ4U2NhbGUiLCJzY2FsZUJhbmQiLCJwYWRkaW5nIiwiY3JlYXRlQXhpc0JvdHRvbSIsInRleHQiLCJheGlzQm90dG9tIiwiY3JlYXRlQmFycyIsImJhcnMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInN0eWxlIiwiYmFuZHdpZHRoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/chart.js\n");

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