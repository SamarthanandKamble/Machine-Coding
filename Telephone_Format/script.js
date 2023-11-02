const inputValue = document.querySelector("#input-box");
let prevVal = "";
let threeLnVal = "";
inputValue.addEventListener("keyup", (e) => {
  if (
    inputValue.value.length === 3 &&
    prevVal.length < inputValue.value.length
  ) {
    threeLnVal = inputValue.value;
    inputValue.value = `+(${threeLnVal}) `;
  } else if (
    inputValue.value.length === 7 &&
    prevVal.length > inputValue.value.length
  ) {
    inputValue.value = threeLnVal;
  }
  prevVal = inputValue.value;
});
