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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _office_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./office.json */ \"./src/scripts/office.json\");\n\n// import * as d3 from \"d3\";\nconst tradeNames = [\"Gen Reqs\", \"Demo\", \"Conc\", \"Mas\", \"Mtls\", \"Woods\", \"Therm Prot\", \"Wndws\", \"Fins\", \"Spec\", \"Furn\", \"Spec Const\", \"Conv Sys\", \"Mech/Plbg\", \"Elec\"];\n\n// user input event listener / set input variables\nlet form = document.getElementById(\"user-input\");\nif (form) form.addEventListener(\"submit\", createBudget);\n\n// user input event handler\nfunction createBudget(e) {\n  e.preventDefault();\n  const squareFootage = document.getElementById(\"sf\").value;\n  const budget = document.getElementById(\"budget\").value;\n\n  // y-Axis values\n  const yAxis = Object.values(_office_json__WEBPACK_IMPORTED_MODULE_0__.rates);\n  for (let i = 0; i < yAxis.length; i++) {\n    yAxis[i] *= squareFootage;\n  }\n\n  // x-Axis values\n  const xAxis = Object.keys(_office_json__WEBPACK_IMPORTED_MODULE_0__.rates);\n\n  // Creating SVG\n  let svg = d3.select(\"#main-chart\").append(\"svg\").attr(\"width\", 500).attr(\"height\", 800).attr(\"transform\", \"translate(\" + 100 + \",\" + 100 + \")\");\n\n  // Creating y-Axis\n  let y = d3.scaleLinear().range([500, 0]);\n  function createAxisLeft(data) {\n    y.domain([0, d3.max(yAxis)]).nice();\n    svg.append(\"g\").call(d3.axisLeft(y));\n  }\n  createAxisLeft(_office_json__WEBPACK_IMPORTED_MODULE_0__);\n\n  //Creating x-Axis\n  let x = d3.scaleBand().range([0, 500]).padding(0.2);\n  function createAxisBottom(data) {\n    x.domain(xAxis);\n    const text = svg.append(\"g\").attr(\"transform\", `translate(0, 500)`).call(d3.axisBottom(x));\n  }\n  createAxisBottom(_office_json__WEBPACK_IMPORTED_MODULE_0__);\n\n  //Creating bars\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFpQztBQUNqQztBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUNqQixVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLE9BQU8sRUFDUCxZQUFZLEVBQ1osT0FBTyxFQUNQLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sQ0FDUDs7QUFFRDtBQUNBLElBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0FBQ2hELElBQUlGLElBQUksRUFBRUEsSUFBSSxDQUFDRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVDLFlBQVksQ0FBQzs7QUFFdkQ7QUFDQSxTQUFTQSxZQUFZLENBQUNDLENBQUMsRUFBRTtFQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7RUFFbEIsTUFBTUMsYUFBYSxHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sS0FBSztFQUN6RCxNQUFNQyxNQUFNLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDTSxLQUFLOztFQUV0RDtFQUNBLE1BQU1FLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUNkLCtDQUFVLENBQUM7RUFDdkMsS0FBSyxJQUFJZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixLQUFLLENBQUNLLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7SUFDckNKLEtBQUssQ0FBQ0ksQ0FBQyxDQUFDLElBQUlQLGFBQWE7RUFDM0I7O0VBRUE7RUFDQSxNQUFNUyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDbkIsK0NBQVUsQ0FBQzs7RUFFckM7RUFDQSxJQUFJb0IsR0FBRyxHQUFHQyxFQUFFLENBQ1RDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FDckJDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDYkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FDbEJBLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQ25CQSxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7O0VBRTFEO0VBQ0EsSUFBSUMsQ0FBQyxHQUFHSixFQUFFLENBQUNLLFdBQVcsRUFBRSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFFeEMsU0FBU0MsY0FBYyxDQUFDQyxJQUFJLEVBQUU7SUFDNUJKLENBQUMsQ0FBQ0ssTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFVCxFQUFFLENBQUNVLEdBQUcsQ0FBQ25CLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ29CLElBQUksRUFBRTtJQUVuQ1osR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNVLElBQUksQ0FBQ1osRUFBRSxDQUFDYSxRQUFRLENBQUNULENBQUMsQ0FBQyxDQUFDO0VBQ3RDO0VBRUFHLGNBQWMsQ0FBQzVCLHlDQUFJLENBQUM7O0VBRXBCO0VBQ0EsSUFBSW1DLENBQUMsR0FBR2QsRUFBRSxDQUFDZSxTQUFTLEVBQUUsQ0FBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUNVLE9BQU8sQ0FBQyxHQUFHLENBQUM7RUFFbkQsU0FBU0MsZ0JBQWdCLENBQUNULElBQUksRUFBRTtJQUM5Qk0sQ0FBQyxDQUFDTCxNQUFNLENBQUNaLEtBQUssQ0FBQztJQUVmLE1BQU1xQixJQUFJLEdBQUduQixHQUFHLENBQ2JHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDLFdBQVcsRUFBRyxtQkFBa0IsQ0FBQyxDQUN0Q1MsSUFBSSxDQUFDWixFQUFFLENBQUNtQixVQUFVLENBQUNMLENBQUMsQ0FBQyxDQUFDO0VBQzNCO0VBRUFHLGdCQUFnQixDQUFDdEMseUNBQUksQ0FBQzs7RUFFdEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RpZnkvLi9zcmMvc2NyaXB0cy9jaGFydC5qcz8xNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhIGZyb20gXCIuL29mZmljZS5qc29uXCI7XG4vLyBpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmNvbnN0IHRyYWRlTmFtZXMgPSBbXG4gIFwiR2VuIFJlcXNcIixcbiAgXCJEZW1vXCIsXG4gIFwiQ29uY1wiLFxuICBcIk1hc1wiLFxuICBcIk10bHNcIixcbiAgXCJXb29kc1wiLFxuICBcIlRoZXJtIFByb3RcIixcbiAgXCJXbmR3c1wiLFxuICBcIkZpbnNcIixcbiAgXCJTcGVjXCIsXG4gIFwiRnVyblwiLFxuICBcIlNwZWMgQ29uc3RcIixcbiAgXCJDb252IFN5c1wiLFxuICBcIk1lY2gvUGxiZ1wiLFxuICBcIkVsZWNcIixcbl07XG5cbi8vIHVzZXIgaW5wdXQgZXZlbnQgbGlzdGVuZXIgLyBzZXQgaW5wdXQgdmFyaWFibGVzXG5sZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1pbnB1dFwiKTtcbmlmIChmb3JtKSBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlQnVkZ2V0KTtcblxuLy8gdXNlciBpbnB1dCBldmVudCBoYW5kbGVyXG5mdW5jdGlvbiBjcmVhdGVCdWRnZXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3Qgc3F1YXJlRm9vdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ZcIikudmFsdWU7XG4gIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0XCIpLnZhbHVlO1xuXG4gIC8vIHktQXhpcyB2YWx1ZXNcbiAgY29uc3QgeUF4aXMgPSBPYmplY3QudmFsdWVzKERhdGEucmF0ZXMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHlBeGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgeUF4aXNbaV0gKj0gc3F1YXJlRm9vdGFnZTtcbiAgfVxuXG4gIC8vIHgtQXhpcyB2YWx1ZXNcbiAgY29uc3QgeEF4aXMgPSBPYmplY3Qua2V5cyhEYXRhLnJhdGVzKTtcblxuICAvLyBDcmVhdGluZyBTVkdcbiAgbGV0IHN2ZyA9IGQzXG4gICAgLnNlbGVjdChcIiNtYWluLWNoYXJ0XCIpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgNTAwKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDgwMClcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIDEwMCArIFwiLFwiICsgMTAwICsgXCIpXCIpO1xuXG4gIC8vIENyZWF0aW5nIHktQXhpc1xuICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzUwMCwgMF0pO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUF4aXNMZWZ0KGRhdGEpIHtcbiAgICB5LmRvbWFpbihbMCwgZDMubWF4KHlBeGlzKV0pLm5pY2UoKTtcblxuICAgIHN2Zy5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuICB9XG5cbiAgY3JlYXRlQXhpc0xlZnQoRGF0YSk7XG5cbiAgLy9DcmVhdGluZyB4LUF4aXNcbiAgbGV0IHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgNTAwXSkucGFkZGluZygwLjIpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUF4aXNCb3R0b20oZGF0YSkge1xuICAgIHguZG9tYWluKHhBeGlzKTtcblxuICAgIGNvbnN0IHRleHQgPSBzdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsIDUwMClgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSk7XG4gIH1cblxuICBjcmVhdGVBeGlzQm90dG9tKERhdGEpO1xuXG4gIC8vQ3JlYXRpbmcgYmFyc1xufVxuIl0sIm5hbWVzIjpbIkRhdGEiLCJ0cmFkZU5hbWVzIiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlQnVkZ2V0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3F1YXJlRm9vdGFnZSIsInZhbHVlIiwiYnVkZ2V0IiwieUF4aXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyYXRlcyIsImkiLCJsZW5ndGgiLCJ4QXhpcyIsImtleXMiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ5Iiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImNyZWF0ZUF4aXNMZWZ0IiwiZGF0YSIsImRvbWFpbiIsIm1heCIsIm5pY2UiLCJjYWxsIiwiYXhpc0xlZnQiLCJ4Iiwic2NhbGVCYW5kIiwicGFkZGluZyIsImNyZWF0ZUF4aXNCb3R0b20iLCJ0ZXh0IiwiYXhpc0JvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/chart.js\n");

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