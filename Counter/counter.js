const incBtn = document.querySelector("#inc-btn");
const decBtn = document.querySelector("#dec-btn");
const finalValue = document.querySelector("#final-value");
const inputValue = document.querySelector("#input-value");
const resetBtn = document.querySelector("#reset-btn");
let inputAddedNumber = 1;
function increaseCount(number) {
  finalValue.textContent = +finalValue.textContent + +number;
}
function decreaseCount(number) {
  finalValue.textContent = +finalValue.textContent - +number;
}

incBtn.addEventListener("click", () => increaseCount(inputAddedNumber));
decBtn.addEventListener("click", () => decreaseCount(inputAddedNumber));
inputValue.addEventListener("change", (e) => {
  inputAddedNumber = e.target.value;
});
resetBtn.addEventListener("click", () => {
  finalValue.textContent = 0;
  inputValue.value = 1;
  inputAddedNumber = 1;

  incBtn.removeEventListener("click", increaseCount);
  decBtn.removeEventListener("click", decreaseCount);
});
