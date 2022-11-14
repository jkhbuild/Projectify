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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_office2_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/office2.json */ \"./src/scripts/office2.json\");\n// import \"./scripts/chartrf.js\";\n\n\n// CREATE SVG\nlet HEIGHT = 500;\nlet WIDTH = 500;\nlet margin = {\n  top: 30,\n  right: 0,\n  bottom: 60,\n  left: 30\n};\nlet svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"height\", HEIGHT - margin.top - margin.bottom).attr(\"width\", WIDTH - margin.left - margin.right).attr(\"transform\", \"translate(\" + 100 + \",\" + 100 + \")\");\n\n// CREATING Y-AXIS\nlet yScale = d3.scaleLinear().range([500, 0]);\nfunction createAxisLeft(yAxis) {\n  yScale.domain([0, d3.max(yAxis)]).nice();\n  svg.append(\"g\").call(d3.axisLeft(yScale));\n}\n\n//CREATING X-AXIS\nlet xScale = d3.scaleBand().range([0, WIDTH]).padding(0.2);\nfunction createAxisBottom(xAxis) {\n  xScale.domain(xAxis);\n  const text = svg.append(\"g\").attr(\"transform\", `translate(0, 500)`).call(d3.axisBottom(xScale));\n}\nfunction createBars(data) {\n  let bars = svg.selectAll(\".bars\").data(data, d => d.trade).enter().append(\"g\").attr(\"class\", \"bars\").style(\"opacity\", 1);\n  bars.append(\"rect\").attr(\"class\", \"bar\").attr(\"x\", d => xScale(d.trade)).attr(\"y\", d => yScale(0)).attr(\"width\", xScale.bandwidth()).attr(\"height\", 0).style(\"fill\", \"steelblue\").transition().duration(750).attr(\"y\", d => yScale(d.rate)).attr(\"height\", d => HEIGHT - yScale(d.rate));\n}\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  const squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n\n  // define xAxis and yAxis\n  const xAxis = [];\n  const yAxis = [];\n  _scripts_office2_json__WEBPACK_IMPORTED_MODULE_0__.forEach(el => {\n    xAxis.push(el.trade);\n    yAxis.push(el.rate);\n  });\n  console.log(yAxis);\n  console.log(xAxis);\n  // y-Axis values\n  for (let i = 0; i < yAxis.length; i++) {\n    yAxis[i] *= squareFootage;\n  }\n  console.log(yAxis);\n  createAxisLeft(yAxis);\n  createAxisBottom(xAxis);\n  createBars(_scripts_office2_json__WEBPACK_IMPORTED_MODULE_0__);\n  console.log(yAxis);\n  console.log(xAxis);\n  console.log(yScale);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLElBQUk4QixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd4QyxLQUFLLENBQUN5QyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3JDeEMsS0FBSyxDQUFDd0MsQ0FBQyxDQUFDLElBQUlSLGFBQWE7RUFDM0I7RUFDQU0sT0FBTyxDQUFDQyxHQUFHLENBQUN2QyxLQUFLLENBQUM7RUFFbEJELGNBQWMsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3JCUyxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3ZCRyxVQUFVLENBQUM5QixrREFBSSxDQUFDO0VBRWhCdUQsT0FBTyxDQUFDQyxHQUFHLENBQUN2QyxLQUFLLENBQUM7RUFDbEJzQyxPQUFPLENBQUNDLEdBQUcsQ0FBQzdCLEtBQUssQ0FBQztFQUNsQjRCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDM0MsTUFBTSxDQUFDO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGlmeS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4vc2NyaXB0cy9jaGFydHJmLmpzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9zY3JpcHRzL29mZmljZTIuanNvblwiO1xuXG4vLyBDUkVBVEUgU1ZHXG5sZXQgSEVJR0hUID0gNTAwO1xubGV0IFdJRFRIID0gNTAwO1xubGV0IG1hcmdpbiA9IHsgdG9wOiAzMCwgcmlnaHQ6IDAsIGJvdHRvbTogNjAsIGxlZnQ6IDMwIH07XG5sZXQgc3ZnID0gZDNcbiAgLnNlbGVjdChcIiNtYWluLWNoYXJ0XCIpXG4gIC5hcHBlbmQoXCJzdmdcIilcbiAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20pXG4gIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodClcbiAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAxMDAgKyBcIixcIiArIDEwMCArIFwiKVwiKTtcblxuLy8gQ1JFQVRJTkcgWS1BWElTXG5sZXQgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbNTAwLCAwXSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUF4aXNMZWZ0KHlBeGlzKSB7XG4gIHlTY2FsZS5kb21haW4oWzAsIGQzLm1heCh5QXhpcyldKS5uaWNlKCk7XG5cbiAgc3ZnLmFwcGVuZChcImdcIikuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpKTtcbn1cblxuLy9DUkVBVElORyBYLUFYSVNcbmxldCB4U2NhbGUgPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgV0lEVEhdKS5wYWRkaW5nKDAuMik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUF4aXNCb3R0b20oeEF4aXMpIHtcbiAgeFNjYWxlLmRvbWFpbih4QXhpcyk7XG5cbiAgY29uc3QgdGV4dCA9IHN2Z1xuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCA1MDApYClcbiAgICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCYXJzKGRhdGEpIHtcbiAgbGV0IGJhcnMgPSBzdmdcbiAgICAuc2VsZWN0QWxsKFwiLmJhcnNcIilcbiAgICAuZGF0YShkYXRhLCAoZCkgPT4gZC50cmFkZSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhcnNcIilcbiAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXG4gIGJhcnNcbiAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAuYXR0cihcInhcIiwgKGQpID0+IHhTY2FsZShkLnRyYWRlKSlcbiAgICAuYXR0cihcInlcIiwgKGQpID0+IHlTY2FsZSgwKSlcbiAgICAuYXR0cihcIndpZHRoXCIsIHhTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICAuYXR0cihcImhlaWdodFwiLCAwKVxuICAgIC5zdHlsZShcImZpbGxcIiwgXCJzdGVlbGJsdWVcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDc1MClcbiAgICAuYXR0cihcInlcIiwgKGQpID0+IHlTY2FsZShkLnJhdGUpKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiBIRUlHSFQgLSB5U2NhbGUoZC5yYXRlKSk7XG59XG5cbi8vIHVzZXIgaW5wdXQgZXZlbnQgbGlzdGVuZXIgLyBzZXQgaW5wdXQgdmFyaWFibGVzXG5sZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1pbnB1dFwiKTtcbmlmIChmb3JtKSBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlQnVkZ2V0KTtcblxuLy8gdXNlciBpbnB1dCBldmVudCBoYW5kbGVyXG5mdW5jdGlvbiBjcmVhdGVCdWRnZXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHNxdWFyZUZvb3RhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNmXCIpLnZhbHVlO1xuICBjb25zdCBidWRnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldFwiKS52YWx1ZTtcblxuICAvLyBkZWZpbmUgeEF4aXMgYW5kIHlBeGlzXG4gIGNvbnN0IHhBeGlzID0gW107XG4gIGNvbnN0IHlBeGlzID0gW107XG4gIERhdGEuZm9yRWFjaCgoZWwpID0+IHtcbiAgICB4QXhpcy5wdXNoKGVsLnRyYWRlKTtcbiAgICB5QXhpcy5wdXNoKGVsLnJhdGUpO1xuICB9KTtcbiAgY29uc29sZS5sb2coeUF4aXMpO1xuICBjb25zb2xlLmxvZyh4QXhpcyk7XG4gIC8vIHktQXhpcyB2YWx1ZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB5QXhpcy5sZW5ndGg7IGkrKykge1xuICAgIHlBeGlzW2ldICo9IHNxdWFyZUZvb3RhZ2U7XG4gIH1cbiAgY29uc29sZS5sb2coeUF4aXMpO1xuXG4gIGNyZWF0ZUF4aXNMZWZ0KHlBeGlzKTtcbiAgY3JlYXRlQXhpc0JvdHRvbSh4QXhpcyk7XG4gIGNyZWF0ZUJhcnMoRGF0YSk7XG5cbiAgY29uc29sZS5sb2coeUF4aXMpO1xuICBjb25zb2xlLmxvZyh4QXhpcyk7XG4gIGNvbnNvbGUubG9nKHlTY2FsZSk7XG59XG4iXSwibmFtZXMiOlsiRGF0YSIsIkhFSUdIVCIsIldJRFRIIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImNyZWF0ZUF4aXNMZWZ0IiwieUF4aXMiLCJkb21haW4iLCJtYXgiLCJuaWNlIiwiY2FsbCIsImF4aXNMZWZ0IiwieFNjYWxlIiwic2NhbGVCYW5kIiwicGFkZGluZyIsImNyZWF0ZUF4aXNCb3R0b20iLCJ4QXhpcyIsInRleHQiLCJheGlzQm90dG9tIiwiY3JlYXRlQmFycyIsImRhdGEiLCJiYXJzIiwic2VsZWN0QWxsIiwiZCIsInRyYWRlIiwiZW50ZXIiLCJzdHlsZSIsImJhbmR3aWR0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJhdGUiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVCdWRnZXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzcXVhcmVGb290YWdlIiwidmFsdWUiLCJidWRnZXQiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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