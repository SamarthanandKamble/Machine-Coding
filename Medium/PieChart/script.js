const inputRange = document.querySelector("#input-range");
const pieChart = document.querySelector("#pie-chart");

inputRange.addEventListener("input", (e) => {
  const inputRangeValue = e.target.value;
  pieChart.style= `--percent: ${inputRangeValue}%`;
});
