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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_example__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/chart */ \"./src/scripts/chart.js\");\n/* harmony import */ var _scripts_chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_chart__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_office_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/office.json */ \"./src/scripts/office.json\");\n\n\n\n\n// variable to store all x axis (construction trades)\nconst tradeNames = [\"Gen Reqs\", \"Demo\", \"Conc\", \"Mas\", \"Mtls\", \"Woods\", \"Therm Prot\", \"Wndws\", \"Fins\", \"Spec\", \"Furn\", \"Spec Const\", \"Conv Sys\", \"Mech/Plbg\", \"Elec\"];\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  const squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n}\n\n//\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   const main = document.getElementById(\"main\");\n//   // new Example(main);\n//   console.log(Data.rates[\"06-woodAndPlastics\"]);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBQ0o7QUFDSzs7QUFFekM7QUFDQSxNQUFNRyxVQUFVLEdBQUcsQ0FDakIsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixPQUFPLEVBQ1AsWUFBWSxFQUNaLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLENBQ1A7O0FBRUQ7QUFDQSxJQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUNoRCxJQUFJRixJQUFJLEVBQUVBLElBQUksQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFFQyxZQUFZLENBQUM7O0FBRXZEO0FBQ0EsU0FBU0EsWUFBWSxDQUFDQyxDQUFDLEVBQUU7RUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0VBRWxCLE1BQU1DLGFBQWEsR0FBR04sUUFBUSxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUNNLEtBQUs7RUFDekQsTUFBTUMsTUFBTSxHQUFHUixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ00sS0FBSztBQUN4RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGlmeS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCIuL3NjcmlwdHMvY2hhcnRcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL3NjcmlwdHMvb2ZmaWNlLmpzb25cIjtcblxuLy8gdmFyaWFibGUgdG8gc3RvcmUgYWxsIHggYXhpcyAoY29uc3RydWN0aW9uIHRyYWRlcylcbmNvbnN0IHRyYWRlTmFtZXMgPSBbXG4gIFwiR2VuIFJlcXNcIixcbiAgXCJEZW1vXCIsXG4gIFwiQ29uY1wiLFxuICBcIk1hc1wiLFxuICBcIk10bHNcIixcbiAgXCJXb29kc1wiLFxuICBcIlRoZXJtIFByb3RcIixcbiAgXCJXbmR3c1wiLFxuICBcIkZpbnNcIixcbiAgXCJTcGVjXCIsXG4gIFwiRnVyblwiLFxuICBcIlNwZWMgQ29uc3RcIixcbiAgXCJDb252IFN5c1wiLFxuICBcIk1lY2gvUGxiZ1wiLFxuICBcIkVsZWNcIixcbl07XG5cbi8vIHVzZXIgaW5wdXQgZXZlbnQgbGlzdGVuZXIgLyBzZXQgaW5wdXQgdmFyaWFibGVzXG5sZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1pbnB1dFwiKTtcbmlmIChmb3JtKSBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlQnVkZ2V0KTtcblxuLy8gdXNlciBpbnB1dCBldmVudCBoYW5kbGVyXG5mdW5jdGlvbiBjcmVhdGVCdWRnZXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3Qgc3F1YXJlRm9vdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ZcIikudmFsdWU7XG4gIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0XCIpLnZhbHVlO1xufVxuXG4vL1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4vLyAgIC8vIG5ldyBFeGFtcGxlKG1haW4pO1xuLy8gICBjb25zb2xlLmxvZyhEYXRhLnJhdGVzW1wiMDYtd29vZEFuZFBsYXN0aWNzXCJdKTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJDaGFydCIsIkRhdGEiLCJ0cmFkZU5hbWVzIiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlQnVkZ2V0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3F1YXJlRm9vdGFnZSIsInZhbHVlIiwiYnVkZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/chart.js":
/*!******************************!*\
  !*** ./src/scripts/chart.js ***!
  \******************************/
/***/ (function(module) {

eval("const tradeNames = [\"Gen Reqs\", \"Demo\", \"Conc\", \"Mas\", \"Mtls\", \"Woods\", \"Therm Prot\", \"Wndws\", \"Fins\", \"Spec\", \"Furn\", \"Spec Const\", \"Conv Sys\", \"Mech/Plbg\", \"Elec\"];\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  const squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n}\nmodule.exports = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFydC5qcy5qcyIsIm5hbWVzIjpbInRyYWRlTmFtZXMiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVCdWRnZXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzcXVhcmVGb290YWdlIiwidmFsdWUiLCJidWRnZXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2hhcnQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RpZnkvLi9zcmMvc2NyaXB0cy9jaGFydC5qcz8xNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRyYWRlTmFtZXMgPSBbXG4gIFwiR2VuIFJlcXNcIixcbiAgXCJEZW1vXCIsXG4gIFwiQ29uY1wiLFxuICBcIk1hc1wiLFxuICBcIk10bHNcIixcbiAgXCJXb29kc1wiLFxuICBcIlRoZXJtIFByb3RcIixcbiAgXCJXbmR3c1wiLFxuICBcIkZpbnNcIixcbiAgXCJTcGVjXCIsXG4gIFwiRnVyblwiLFxuICBcIlNwZWMgQ29uc3RcIixcbiAgXCJDb252IFN5c1wiLFxuICBcIk1lY2gvUGxiZ1wiLFxuICBcIkVsZWNcIixcbl07XG5cbi8vIHVzZXIgaW5wdXQgZXZlbnQgbGlzdGVuZXIgLyBzZXQgaW5wdXQgdmFyaWFibGVzXG5sZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1pbnB1dFwiKTtcbmlmIChmb3JtKSBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlQnVkZ2V0KTtcblxuLy8gdXNlciBpbnB1dCBldmVudCBoYW5kbGVyXG5mdW5jdGlvbiBjcmVhdGVCdWRnZXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3Qgc3F1YXJlRm9vdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ZcIikudmFsdWU7XG4gIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0XCIpLnZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJ0O1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxVQUFVLEdBQUcsQ0FDakIsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixPQUFPLEVBQ1AsWUFBWSxFQUNaLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLENBQ1A7O0FBRUQ7QUFDQSxJQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUNoRCxJQUFJRixJQUFJLEVBQUVBLElBQUksQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFFQyxZQUFZLENBQUM7O0FBRXZEO0FBQ0EsU0FBU0EsWUFBWSxDQUFDQyxDQUFDLEVBQUU7RUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0VBRWxCLE1BQU1DLGFBQWEsR0FBR04sUUFBUSxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUNNLEtBQUs7RUFDekQsTUFBTUMsTUFBTSxHQUFHUixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ00sS0FBSztBQUN4RDtBQUVBRSxNQUFNLENBQUNDLE9BQU8sR0FBR0MsS0FBSyJ9\n//# sourceURL=webpack-internal:///./src/scripts/chart.js\n");

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
module.exports = JSON.parse('{"rates":{"01-generalRequirements":"10","02-demoltion":"10","03-concrete":"10","04-masonry":"10","05-metals":"10","06-woodAndPlastics":"10","07-thermalAndMoistureProtection":"10","08-openings":"10","09-finishes":"10","10-specialties":"10","11-equipment":"10","12-furnishings":"10","13-specialConstruction":"10","14-conveyingSystems":"10","15-mechanicalAndPlumbing":"10","16-electrical":"10"},"material":{"01-generalRequirements":".60","02-demoltion":".60","03-concrete":".60","04-masonry":".60","05-metals":".60","06-woodAndPlastics":".60","07-thermalAndMoistureProtection":".60","08-openings":".60","09-finishes":".60","10-specialties":".60","11-equipment":".60","12-furnishings":".60","13-specialConstruction":".60","14-conveyingSystems":".60","15-mechanicalAndPlumbing":".60","16-electrical":".60"},"labor":{"01-generalRequirements":".40","02-demoltion":".40","03-concrete":".40","04-masonry":".40","05-metals":".40","06-woodAndPlastics":".40","07-thermalAndMoistureProtection":".40","08-openings":".40","09-finishes":".40","10-specialties":".40","11-equipment":".40","12-furnishings":".40","13-specialConstruction":".40","14-conveyingSystems":".40","15-mechanicalAndPlumbing":".40","16-electrical":".40"}}');

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