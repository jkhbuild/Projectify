import Chart from `chart.js/auto`

const xAxis = [
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
  "Mech",
  "Plbg",
  "Elec",
];

let form = document.getElementById("user-input");
if (form) form.addEventListener("submit", createBudget);