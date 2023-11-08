const currencyValue = new Map([
  // Currency value w.r.t 1 USD.
  ["inr", "83.25"],
  ["eur", "0.94"],
  ["gbp", "0.81"],
  ["usd", "1"],
]);

const currencyCount = document.querySelector("#currency-in");
const toCurrency = document.querySelector("#currency-out-select");
const fromCurrency = document.querySelector("#currency-in-select");
const convertBtn = document.querySelector("#convert-btn");
let displayCurrency = document.querySelector("#currency-out");
const customCurrency = document.querySelector("#custom-convert");
const customCurrencyBtn = document.querySelector("#custom-currency-btn");

let newCurrency;
let newCurrencyValue;

function currencyConvert(currencyCount, fromCurrency) {
  let result =
    (currencyCount / currencyValue.get(fromCurrency)) *
    currencyValue.get(toCurrency.value);

  displayCurrency.value = result.toFixed(2);
  console.log(`from : ${fromCurrency}`);
  console.log(`to : ${toCurrency.value}`);
}

function addCustomCurrency(value) {
  if (isNaN(value)) {
    newCurrency = value;
    newCurrencyValue = +prompt(`Enter the amount wrt 1 USD`);

    if (!isNaN(newCurrencyValue)) {
      currencyValue.set(newCurrency, newCurrencyValue);

      const lastChildOFFromCurrency = fromCurrency.lastElementChild;
      console.log(`last from ${lastChildOFFromCurrency}`);
      const lastChildOFToCurrency = toCurrency.lastElementChild;
      console.log(`last to ${lastChildOFToCurrency}`);
      const optionDivTo = document.createElement("option");
      optionDivTo.value = newCurrency;
      optionDivTo.textContent = newCurrency;
      optionDivTo.classList.add("currency-out-options");

      toCurrency.insertBefore(optionDivTo, lastChildOFToCurrency);

      const optionDivFrom = optionDivTo.cloneNode(true);
      fromCurrency.appendChild(optionDivFrom);
    } else {
      alert(`Please enter the currency value in numbers`);
    }
  }
}

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currencyConvert(currencyCount.value, fromCurrency.value);
});

customCurrencyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addCustomCurrency(customCurrency.value);
  customCurrency.value = "";
});
