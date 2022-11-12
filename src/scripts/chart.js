const tradeNames = [
  "Gen Reqs",
  "Demo",
  "Conc",
  "Mas",
  "Mtls",
  "Woods",
  "Therm Prot",
  "Wndws",
  "Fins",
  "Spec",
  "Furn",
  "Spec Const",
  "Conv Sys",
  "Mech/Plbg",
  "Elec",
];

// user input event listener / set input variables
let form = document.getElementById("user-input");
if (form) form.addEventListener("submit", createBudget);

// user input event handler
function createBudget(e) {
  e.preventDefault();

  const squareFootage = document.getElementById("sf").value;
  const budget = document.getElementById("budget").value;
}

module.exports = Chart;
