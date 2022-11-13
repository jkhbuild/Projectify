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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_example__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/chart */ \"./src/scripts/chart.js\");\n/* harmony import */ var _scripts_office_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/office.json */ \"./src/scripts/office.json\");\n\n\n\n\n// variable to store all x axis (construction trades)\n//\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   const main = document.getElementById(\"main\");\n//   // new Example(main);\n//   console.log(Data.rates[\"06-woodAndPlastics\"]);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0M7QUFDZjtBQUNnQjs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGlmeS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL2NoYXJ0XCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9zY3JpcHRzL29mZmljZS5qc29uXCI7XG5cbi8vIHZhcmlhYmxlIHRvIHN0b3JlIGFsbCB4IGF4aXMgKGNvbnN0cnVjdGlvbiB0cmFkZXMpXG4vL1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4vLyAgIC8vIG5ldyBFeGFtcGxlKG1haW4pO1xuLy8gICBjb25zb2xlLmxvZyhEYXRhLnJhdGVzW1wiMDYtd29vZEFuZFBsYXN0aWNzXCJdKTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/chart.js":
/*!******************************!*\
  !*** ./src/scripts/chart.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _office_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./office.json */ \"./src/scripts/office.json\");\n\n// import * as d3 from \"d3\";\nconst tradeNames = [\"Gen Reqs\", \"Demo\", \"Conc\", \"Mas\", \"Mtls\", \"Woods\", \"Therm Prot\", \"Wndws\", \"Fins\", \"Spec\", \"Furn\", \"Spec Const\", \"Conv Sys\", \"Mech/Plbg\", \"Elec\"];\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\nlet squareFootage;\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n  createAxisLeft(_office_json__WEBPACK_IMPORTED_MODULE_0__);\n\n  // console.log(maxHeight(rates, squareFootage));\n}\n\n// rates data from JSON\nconst rates = _office_json__WEBPACK_IMPORTED_MODULE_0__.rates;\n\n// rates keys stored for x Axis\nconst xAxis = Object.keys(_office_json__WEBPACK_IMPORTED_MODULE_0__.rates);\n\n// rates values stored in an array\nconst yAxis = Object.values(_office_json__WEBPACK_IMPORTED_MODULE_0__.rates);\nconsole.log(yAxis);\n\n// rates * squarefootage\nfor (let i = 0; i < yAxis.length; i++) {\n  console.log(Number(yAxis[i]));\n  console.log(typeof yAxis[i]);\n  console.log(Number(squareFootage));\n  console.log(typeof squareFootage);\n  yAxis[i] = parseInt(yAxis[i]) * parseInt(squareFootage);\n}\nconsole.log(yAxis);\n\n// Creating SVG\nlet svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"width\", 500).attr(\"height\", 800).attr(\"transform\", \"translate(\" + 100 + \",\" + 100 + \")\");\n\n// Creating Bar Chart\nlet y = d3.scaleLinear().range([500, 0]);\nfunction createAxisLeft(data) {\n  y.domain([0, d3.max(yAxis)]).nice();\n  svg.append(\"g\").call(d3.axisLeft(y));\n  console.log(yAxis);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQ1MsSUFBSSxDQUFDWCxFQUFFLENBQUNZLFFBQVEsQ0FBQ1IsQ0FBQyxDQUFDLENBQUM7RUFDcENYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLENBQUM7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0aWZ5Ly4vc3JjL3NjcmlwdHMvY2hhcnQuanM/MTViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YSBmcm9tIFwiLi9vZmZpY2UuanNvblwiO1xuLy8gaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5jb25zdCB0cmFkZU5hbWVzID0gW1xuICBcIkdlbiBSZXFzXCIsXG4gIFwiRGVtb1wiLFxuICBcIkNvbmNcIixcbiAgXCJNYXNcIixcbiAgXCJNdGxzXCIsXG4gIFwiV29vZHNcIixcbiAgXCJUaGVybSBQcm90XCIsXG4gIFwiV25kd3NcIixcbiAgXCJGaW5zXCIsXG4gIFwiU3BlY1wiLFxuICBcIkZ1cm5cIixcbiAgXCJTcGVjIENvbnN0XCIsXG4gIFwiQ29udiBTeXNcIixcbiAgXCJNZWNoL1BsYmdcIixcbiAgXCJFbGVjXCIsXG5dO1xuXG4vLyB1c2VyIGlucHV0IGV2ZW50IGxpc3RlbmVyIC8gc2V0IGlucHV0IHZhcmlhYmxlc1xubGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItaW5wdXRcIik7XG5pZiAoZm9ybSkgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNyZWF0ZUJ1ZGdldCk7XG5cbmxldCBzcXVhcmVGb290YWdlO1xuLy8gdXNlciBpbnB1dCBldmVudCBoYW5kbGVyXG5mdW5jdGlvbiBjcmVhdGVCdWRnZXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgc3F1YXJlRm9vdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ZcIikudmFsdWU7XG4gIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0XCIpLnZhbHVlO1xuICBjcmVhdGVBeGlzTGVmdChEYXRhKTtcblxuICAvLyBjb25zb2xlLmxvZyhtYXhIZWlnaHQocmF0ZXMsIHNxdWFyZUZvb3RhZ2UpKTtcbn1cblxuLy8gcmF0ZXMgZGF0YSBmcm9tIEpTT05cbmNvbnN0IHJhdGVzID0gRGF0YS5yYXRlcztcblxuLy8gcmF0ZXMga2V5cyBzdG9yZWQgZm9yIHggQXhpc1xuY29uc3QgeEF4aXMgPSBPYmplY3Qua2V5cyhEYXRhLnJhdGVzKTtcblxuLy8gcmF0ZXMgdmFsdWVzIHN0b3JlZCBpbiBhbiBhcnJheVxuY29uc3QgeUF4aXMgPSBPYmplY3QudmFsdWVzKERhdGEucmF0ZXMpO1xuY29uc29sZS5sb2coeUF4aXMpO1xuXG4vLyByYXRlcyAqIHNxdWFyZWZvb3RhZ2VcbmZvciAobGV0IGkgPSAwOyBpIDwgeUF4aXMubGVuZ3RoOyBpKyspIHtcbiAgY29uc29sZS5sb2coTnVtYmVyKHlBeGlzW2ldKSk7XG4gIGNvbnNvbGUubG9nKHR5cGVvZiB5QXhpc1tpXSk7XG4gIGNvbnNvbGUubG9nKE51bWJlcihzcXVhcmVGb290YWdlKSk7XG4gIGNvbnNvbGUubG9nKHR5cGVvZiBzcXVhcmVGb290YWdlKTtcbiAgeUF4aXNbaV0gPSBwYXJzZUludCh5QXhpc1tpXSkgKiBwYXJzZUludChzcXVhcmVGb290YWdlKTtcbn1cbmNvbnNvbGUubG9nKHlBeGlzKTtcblxuLy8gQ3JlYXRpbmcgU1ZHXG5sZXQgc3ZnID0gZDNcbiAgLnNlbGVjdChcIiNtYWluLWNoYXJ0XCIpXG4gIC5hcHBlbmQoXCJzdmdcIilcbiAgLmF0dHIoXCJ3aWR0aFwiLCA1MDApXG4gIC5hdHRyKFwiaGVpZ2h0XCIsIDgwMClcbiAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAxMDAgKyBcIixcIiArIDEwMCArIFwiKVwiKTtcblxuLy8gQ3JlYXRpbmcgQmFyIENoYXJ0XG5sZXQgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzUwMCwgMF0pO1xuXG5mdW5jdGlvbiBjcmVhdGVBeGlzTGVmdChkYXRhKSB7XG4gIHkuZG9tYWluKFswLCBkMy5tYXgoeUF4aXMpXSkubmljZSgpO1xuXG4gIHN2Zy5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuICBjb25zb2xlLmxvZyh5QXhpcyk7XG59XG4iXSwibmFtZXMiOlsiRGF0YSIsInRyYWRlTmFtZXMiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVCdWRnZXQiLCJzcXVhcmVGb290YWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJidWRnZXQiLCJjcmVhdGVBeGlzTGVmdCIsInJhdGVzIiwieEF4aXMiLCJPYmplY3QiLCJrZXlzIiwieUF4aXMiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsIk51bWJlciIsInBhcnNlSW50Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkYXRhIiwiZG9tYWluIiwibWF4IiwibmljZSIsImNhbGwiLCJheGlzTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/chart.js\n");

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
module.exports = JSON.parse('{"rates":{"01-generalRequirements":10,"02-demoltion":"10","03-concrete":"10","04-masonry":"10","05-metals":"10","06-woodAndPlastics":"10","07-thermalAndMoistureProtection":"10","08-openings":"10","09-finishes":"10","10-specialties":"10","11-equipment":"10","12-furnishings":"10","13-specialConstruction":"10","14-conveyingSystems":"10","15-mechanicalAndPlumbing":"40","16-electrical":"10"}}');

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