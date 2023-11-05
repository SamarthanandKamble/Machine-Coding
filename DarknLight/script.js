const modeToggler = document.querySelector("#mode-toggler-btn");
const eachDivBtn = document.querySelector("#main-div-cnt");

const mainDiv = document.querySelector("#main-cnt");

function toggleMainCnt(isChecked) {
  if (isChecked) {
    mainDiv.style.backgroundColor = "#000";
    mainDiv.style.color = "#FFFFFF";
  } else {
    mainDiv.style.backgroundColor = "#FFFFFF";
    mainDiv.style.color = "#000";
  }
}

function selectDivToToggle(e) {
  let parentNode = e.target.parentNode;
  let isChecked = e.target.checked;
  if (isChecked) {
    parentNode.style.backgroundColor = "#000";
    parentNode.style.color = "#FFF";
  } else {
    parentNode.style.backgroundColor = "#FFF";
    parentNode.style.color = "#000";
  }
}
modeToggler.addEventListener(
  "click",
  (e) => toggleMainCnt(e.target.checked),
  false
);

eachDivBtn.addEventListener("click", (e) => selectDivToToggle(e), false);
