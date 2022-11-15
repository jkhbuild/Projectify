const tradesExcludedDiv = document.getElementById("trades-excluded");
const tradesSelectedDiv = document.getElementById("trade-selector");

if (tradesSelectedDiv)
  tradesSelectedDiv.addEventListener("click", excludeTrade);

function excludeTrade(e) {
  let clicked = e.target;
  console.log(clicked.className);
  if (clicked.className === "trade") {
    tradesExcludedDiv.appendChild(e.target);
  }
}

let tradesExcluded = document.getElementById("trades-excluded");
if (tradesExcluded) tradesExcluded.addEventListener("click", includeTrade);

function includeTrade(e) {
  let clicked = e.target;
  console.log(clicked.classList);
  if (clicked.className === "trade") {
    tradesSelectedDiv.appendChild(e.target);
  }
}
