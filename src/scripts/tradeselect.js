let tradeSelected = document.getElementById("trades-selected");
let trades = document.getElementById("trade-selector");
if (trades) trades.addEventListener("click", addTrade);

console.log(tradeSelected);
console.log(trades);
function addTrade(e) {
  console.log(e.target.id);
  tradeSelected.appendChild(trades);
  tradeSelected.removeAttribute(e.target.id);
  console.log(tradeSelected);
}
