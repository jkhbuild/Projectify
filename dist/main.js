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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_office2_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/office2.json */ \"./src/scripts/office2.json\");\n// import \"./scripts/chartrf.js\";\n\n\n// CREATE SVG\nlet HEIGHT = 500;\nlet WIDTH = 500;\nlet margin = {\n  top: 30,\n  right: 0,\n  bottom: 30,\n  left: 30\n};\nlet svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"height\", HEIGHT - margin.top - margin.bottom).attr(\"width\", WIDTH - margin.left - margin.right).attr(\"transform\", \"translate(\" + 100 + \",\" + 100 + \")\");\n\n// CREATING Y-AXIS\nlet yScale = d3.scaleLinear().range([HEIGHT, 0]);\nfunction createAxisLeft(yAxis) {\n  yScale.domain([0, d3.max(yAxis)]).nice();\n  svg.append(\"g\").call(d3.axisLeft(yScale));\n}\n\n//CREATING X-AXIS\nlet xScale = d3.scaleBand().range([0, WIDTH]).padding(0.2);\nfunction createAxisBottom(xAxis) {\n  debugger;\n  xScale.domain(xAxis).nice();\n  const text = svg.append(\"g\").attr(\"transform\", `translate(0, 500)`).call(d3.axisBottom(xScale));\n}\n\n//CREATING BARS\nfunction createBars(data) {\n  let bars = svg.selectAll(\".bars\").data(data, d => d.trade).enter().append(\"g\").attr(\"class\", \"bars\").style(\"opacity\", 1);\n  bars.append(\"rect\").attr(\"class\", \"bar\").attr(\"x\", d => xScale(d.trade)).attr(\"y\", d => yScale(0)).attr(\"width\", xScale.bandwidth()).attr(\"height\", 0).style(\"fill\", \"steelblue\").transition().duration(750).attr(\"y\", d => yScale(d.rate)).attr(\"height\", d => HEIGHT - yScale(d.rate));\n}\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  const squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n\n  // define xAxis and yAxis\n  const xAxis = [];\n  const yAxis = [];\n  _scripts_office2_json__WEBPACK_IMPORTED_MODULE_0__.forEach(el => {\n    xAxis.push(el.trade);\n    yAxis.push(el.rate);\n  });\n\n  // y-Axis values\n  for (let i = 0; i < yAxis.length; i++) {\n    yAxis[i] *= squareFootage;\n  }\n  createAxisLeft(yAxis);\n  createAxisBottom(xAxis);\n  createBars(_scripts_office2_json__WEBPACK_IMPORTED_MODULE_0__);\n  console.log(yAxis);\n  console.log(xAxis);\n  console.log(yScale);\n  console.log(xScale);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUMsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUNyQ3RDLEtBQUssQ0FBQ3NDLENBQUMsQ0FBQyxJQUFJTixhQUFhO0VBQzNCO0VBRUFqQyxjQUFjLENBQUNDLEtBQUssQ0FBQztFQUNyQlMsZ0JBQWdCLENBQUNDLEtBQUssQ0FBQztFQUN2QkcsVUFBVSxDQUFDOUIsa0RBQUksQ0FBQztFQUVoQnlELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDekMsS0FBSyxDQUFDO0VBQ2xCd0MsT0FBTyxDQUFDQyxHQUFHLENBQUMvQixLQUFLLENBQUM7RUFDbEI4QixPQUFPLENBQUNDLEdBQUcsQ0FBQzdDLE1BQU0sQ0FBQztFQUNuQjRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbkMsTUFBTSxDQUFDO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGlmeS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4vc2NyaXB0cy9jaGFydHJmLmpzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9zY3JpcHRzL29mZmljZTIuanNvblwiO1xuXG4vLyBDUkVBVEUgU1ZHXG5sZXQgSEVJR0hUID0gNTAwO1xubGV0IFdJRFRIID0gNTAwO1xubGV0IG1hcmdpbiA9IHsgdG9wOiAzMCwgcmlnaHQ6IDAsIGJvdHRvbTogMzAsIGxlZnQ6IDMwIH07XG5sZXQgc3ZnID0gZDNcbiAgLnNlbGVjdChcIiNtYWluLWNoYXJ0XCIpXG4gIC5hcHBlbmQoXCJzdmdcIilcbiAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20pXG4gIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodClcbiAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAxMDAgKyBcIixcIiArIDEwMCArIFwiKVwiKTtcblxuLy8gQ1JFQVRJTkcgWS1BWElTXG5sZXQgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbSEVJR0hULCAwXSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUF4aXNMZWZ0KHlBeGlzKSB7XG4gIHlTY2FsZS5kb21haW4oWzAsIGQzLm1heCh5QXhpcyldKS5uaWNlKCk7XG5cbiAgc3ZnLmFwcGVuZChcImdcIikuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpKTtcbn1cblxuLy9DUkVBVElORyBYLUFYSVNcbmxldCB4U2NhbGUgPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgV0lEVEhdKS5wYWRkaW5nKDAuMik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUF4aXNCb3R0b20oeEF4aXMpIHtcbiAgZGVidWdnZXI7XG4gIHhTY2FsZS5kb21haW4oeEF4aXMpLm5pY2UoKTtcblxuICBjb25zdCB0ZXh0ID0gc3ZnXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsIDUwMClgKVxuICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeFNjYWxlKSk7XG59XG5cbi8vQ1JFQVRJTkcgQkFSU1xuZnVuY3Rpb24gY3JlYXRlQmFycyhkYXRhKSB7XG4gIGxldCBiYXJzID0gc3ZnXG4gICAgLnNlbGVjdEFsbChcIi5iYXJzXCIpXG4gICAgLmRhdGEoZGF0YSwgKGQpID0+IGQudHJhZGUpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJzXCIpXG4gICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblxuICBiYXJzXG4gICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgLmF0dHIoXCJ4XCIsIChkKSA9PiB4U2NhbGUoZC50cmFkZSkpXG4gICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB5U2NhbGUoMCkpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB4U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgMClcbiAgICAuc3R5bGUoXCJmaWxsXCIsIFwic3RlZWxibHVlXCIpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbig3NTApXG4gICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB5U2NhbGUoZC5yYXRlKSlcbiAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gSEVJR0hUIC0geVNjYWxlKGQucmF0ZSkpO1xufVxuXG4vLyB1c2VyIGlucHV0IGV2ZW50IGxpc3RlbmVyIC8gc2V0IGlucHV0IHZhcmlhYmxlc1xubGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItaW5wdXRcIik7XG5pZiAoZm9ybSkgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNyZWF0ZUJ1ZGdldCk7XG5cbi8vIHVzZXIgaW5wdXQgZXZlbnQgaGFuZGxlclxuZnVuY3Rpb24gY3JlYXRlQnVkZ2V0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzcXVhcmVGb290YWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZlwiKS52YWx1ZTtcbiAgY29uc3QgYnVkZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXRcIikudmFsdWU7XG5cbiAgLy8gZGVmaW5lIHhBeGlzIGFuZCB5QXhpc1xuICBjb25zdCB4QXhpcyA9IFtdO1xuICBjb25zdCB5QXhpcyA9IFtdO1xuICBEYXRhLmZvckVhY2goKGVsKSA9PiB7XG4gICAgeEF4aXMucHVzaChlbC50cmFkZSk7XG4gICAgeUF4aXMucHVzaChlbC5yYXRlKTtcbiAgfSk7XG5cbiAgLy8geS1BeGlzIHZhbHVlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHlBeGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgeUF4aXNbaV0gKj0gc3F1YXJlRm9vdGFnZTtcbiAgfVxuXG4gIGNyZWF0ZUF4aXNMZWZ0KHlBeGlzKTtcbiAgY3JlYXRlQXhpc0JvdHRvbSh4QXhpcyk7XG4gIGNyZWF0ZUJhcnMoRGF0YSk7XG5cbiAgY29uc29sZS5sb2coeUF4aXMpO1xuICBjb25zb2xlLmxvZyh4QXhpcyk7XG4gIGNvbnNvbGUubG9nKHlTY2FsZSk7XG4gIGNvbnNvbGUubG9nKHhTY2FsZSk7XG59XG4iXSwibmFtZXMiOlsiRGF0YSIsIkhFSUdIVCIsIldJRFRIIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImNyZWF0ZUF4aXNMZWZ0IiwieUF4aXMiLCJkb21haW4iLCJtYXgiLCJuaWNlIiwiY2FsbCIsImF4aXNMZWZ0IiwieFNjYWxlIiwic2NhbGVCYW5kIiwicGFkZGluZyIsImNyZWF0ZUF4aXNCb3R0b20iLCJ4QXhpcyIsInRleHQiLCJheGlzQm90dG9tIiwiY3JlYXRlQmFycyIsImRhdGEiLCJiYXJzIiwic2VsZWN0QWxsIiwiZCIsInRyYWRlIiwiZW50ZXIiLCJzdHlsZSIsImJhbmR3aWR0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJhdGUiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVCdWRnZXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzcXVhcmVGb290YWdlIiwidmFsdWUiLCJidWRnZXQiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0aWZ5Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/scripts/office2.json":
/*!**********************************!*\
  !*** ./src/scripts/office2.json ***!
  \**********************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"trade":"Gen Reqs","rate":10},{"trade":"Demo","rate":10},{"trade":"Conc","rate":10},{"trade":"Mas","rate":10},{"trade":"Mtls","rate":10},{"trade":"Woods","rate":10},{"trade":"Therm","rate":10},{"trade":"Fins","rate":10},{"trade":"Spec","rate":10},{"trade":"Furn","rate":10},{"trade":"Spec Const","rate":10},{"trade":"Conv Sys","rate":10},{"trade":"Mech","rate":10},{"trade":"Plbg","rate":10},{"trade":"Elec","rate":10}]');

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