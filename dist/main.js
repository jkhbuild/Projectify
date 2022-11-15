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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_tradeselect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/tradeselect.js */ \"./src/scripts/tradeselect.js\");\n/* harmony import */ var _scripts_tradeselect_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_tradeselect_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_office_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/office.json */ \"./src/scripts/office.json\");\n// import \"./scripts/chartrf.js\";\n\n\n// import { _ } from \"core-js\";\n\nconst width = 800;\nconst height = 750;\nconst margin = {\n  top: 50,\n  bottom: 50,\n  left: 50,\n  right: 50\n};\nconst svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"height\", height - margin.top - margin.bottom).attr(\"width\", width - margin.left - margin.right).attr(\"viewBox\", [0, 0, width, height]);\nconst x = d3.scaleBand().domain(d3.range(_scripts_office_json__WEBPACK_IMPORTED_MODULE_1__.length)).range([margin.left, width - margin.right]).padding(0.1);\nconst y = d3.scaleLinear().domain([0, d3.max(_scripts_office_json__WEBPACK_IMPORTED_MODULE_1__.map(e => e.rate))]).range([height - margin.bottom, margin.top]);\nsvg.append(\"g\").attr(\"fill\", \"royalblue\").selectAll(\"rect\").data(_scripts_office_json__WEBPACK_IMPORTED_MODULE_1__).join(\"rect\").attr(\"x\", (d, i) => x(i)).attr(\"y\", d => y(d.rate)).attr(\"height\", d => y(0) - y(d.rate)).attr(\"width\", x.bandwidth());\nfunction xAxis(g) {\n  // g.attr(\"transform\", \"translate(0, ${height - margin.bottom})\");\n  g.attr(\"transform\", `translate(0, ${height - margin.bottom})`).call(d3.axisBottom(x).tickFormat(i => _scripts_office_json__WEBPACK_IMPORTED_MODULE_1__[i].trade)).attr(\"font-size\", \"12px\");\n}\nfunction yAxis(g) {\n  g.attr(\"transform\", `translate(${margin.left}, 0)`).call(d3.axisLeft(y).ticks(null, _scripts_office_json__WEBPACK_IMPORTED_MODULE_1__.format)).attr(\"font-size\", \"16px\");\n}\nsvg.append(\"g\").call(yAxis);\nsvg.append(\"g\").call(xAxis);\nsvg.node();\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  const squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQ0wsQ0FBQyxFQUFFO0VBQ2hCQSxDQUFDLENBQUNwQixJQUFJLENBQUMsV0FBVyxFQUFHLGFBQVlULE1BQU0sQ0FBQ0csSUFBSyxNQUFLLENBQUMsQ0FDaEQyQixJQUFJLENBQUN4QixFQUFFLENBQUM2QixRQUFRLENBQUNuQixDQUFDLENBQUMsQ0FBQ29CLEtBQUssQ0FBQyxJQUFJLEVBQUV2Qyx3REFBVyxDQUFDLENBQUMsQ0FDN0NZLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO0FBQzlCO0FBRUFKLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDc0IsSUFBSSxDQUFDSSxLQUFLLENBQUM7QUFDM0I3QixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ3NCLElBQUksQ0FBQ0YsS0FBSyxDQUFDO0FBQzNCdkIsR0FBRyxDQUFDaUMsSUFBSSxFQUFFOztBQUVWO0FBQ0EsSUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFDaEQsSUFBSUYsSUFBSSxFQUFFQSxJQUFJLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBRUMsWUFBWSxDQUFDOztBQUV2RDtBQUNBLFNBQVNBLFlBQVksQ0FBQ3ZCLENBQUMsRUFBRTtFQUN2QkEsQ0FBQyxDQUFDd0IsY0FBYyxFQUFFO0VBQ2xCLE1BQU1DLGFBQWEsR0FBR0wsUUFBUSxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUNLLEtBQUs7RUFDekQsTUFBTUMsTUFBTSxHQUFHUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ0ssS0FBSztBQUN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RpZnkvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL3NjcmlwdHMvY2hhcnRyZi5qc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL3RyYWRlc2VsZWN0LmpzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9zY3JpcHRzL29mZmljZS5qc29uXCI7XG4vLyBpbXBvcnQgeyBfIH0gZnJvbSBcImNvcmUtanNcIjtcblxuY29uc3Qgd2lkdGggPSA4MDA7XG5jb25zdCBoZWlnaHQgPSA3NTA7XG5jb25zdCBtYXJnaW4gPSB7IHRvcDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAgfTtcblxuY29uc3Qgc3ZnID0gZDNcbiAgLnNlbGVjdChcIiNtYWluLWNoYXJ0XCIpXG4gIC5hcHBlbmQoXCJzdmdcIilcbiAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20pXG4gIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodClcbiAgLmF0dHIoXCJ2aWV3Qm94XCIsIFswLCAwLCB3aWR0aCwgaGVpZ2h0XSk7XG5cbmNvbnN0IHggPSBkM1xuICAuc2NhbGVCYW5kKClcbiAgLmRvbWFpbihkMy5yYW5nZShEYXRhLmxlbmd0aCkpXG4gIC5yYW5nZShbbWFyZ2luLmxlZnQsIHdpZHRoIC0gbWFyZ2luLnJpZ2h0XSlcbiAgLnBhZGRpbmcoMC4xKTtcblxuY29uc3QgeSA9IGQzXG4gIC5zY2FsZUxpbmVhcigpXG4gIC5kb21haW4oWzAsIGQzLm1heChEYXRhLm1hcCgoZSkgPT4gZS5yYXRlKSldKVxuICAucmFuZ2UoW2hlaWdodCAtIG1hcmdpbi5ib3R0b20sIG1hcmdpbi50b3BdKTtcblxuc3ZnXG4gIC5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwiZmlsbFwiLCBcInJveWFsYmx1ZVwiKVxuICAuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAuZGF0YShEYXRhKVxuICAuam9pbihcInJlY3RcIilcbiAgLmF0dHIoXCJ4XCIsIChkLCBpKSA9PiB4KGkpKVxuICAuYXR0cihcInlcIiwgKGQpID0+IHkoZC5yYXRlKSlcbiAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHkoMCkgLSB5KGQucmF0ZSkpXG4gIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSk7XG5cbmZ1bmN0aW9uIHhBeGlzKGcpIHtcbiAgLy8gZy5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsICR7aGVpZ2h0IC0gbWFyZ2luLmJvdHRvbX0pXCIpO1xuICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodCAtIG1hcmdpbi5ib3R0b219KWApXG4gICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KS50aWNrRm9ybWF0KChpKSA9PiBEYXRhW2ldLnRyYWRlKSlcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjEycHhcIik7XG59XG5cbmZ1bmN0aW9uIHlBeGlzKGcpIHtcbiAgZy5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sIDApYClcbiAgICAuY2FsbChkMy5heGlzTGVmdCh5KS50aWNrcyhudWxsLCBEYXRhLmZvcm1hdCkpXG4gICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxNnB4XCIpO1xufVxuXG5zdmcuYXBwZW5kKFwiZ1wiKS5jYWxsKHlBeGlzKTtcbnN2Zy5hcHBlbmQoXCJnXCIpLmNhbGwoeEF4aXMpO1xuc3ZnLm5vZGUoKTtcblxuLy8gdXNlciBpbnB1dCBldmVudCBsaXN0ZW5lciAvIHNldCBpbnB1dCB2YXJpYWJsZXNcbmxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWlucHV0XCIpO1xuaWYgKGZvcm0pIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBjcmVhdGVCdWRnZXQpO1xuXG4vLyB1c2VyIGlucHV0IGV2ZW50IGhhbmRsZXJcbmZ1bmN0aW9uIGNyZWF0ZUJ1ZGdldChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc3F1YXJlRm9vdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ZcIikudmFsdWU7XG4gIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0XCIpLnZhbHVlO1xufVxuIl0sIm5hbWVzIjpbIkRhdGEiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIngiLCJzY2FsZUJhbmQiLCJkb21haW4iLCJyYW5nZSIsImxlbmd0aCIsInBhZGRpbmciLCJ5Iiwic2NhbGVMaW5lYXIiLCJtYXgiLCJtYXAiLCJlIiwicmF0ZSIsInNlbGVjdEFsbCIsImRhdGEiLCJqb2luIiwiZCIsImkiLCJiYW5kd2lkdGgiLCJ4QXhpcyIsImciLCJjYWxsIiwiYXhpc0JvdHRvbSIsInRpY2tGb3JtYXQiLCJ0cmFkZSIsInlBeGlzIiwiYXhpc0xlZnQiLCJ0aWNrcyIsImZvcm1hdCIsIm5vZGUiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVCdWRnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInNxdWFyZUZvb3RhZ2UiLCJ2YWx1ZSIsImJ1ZGdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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