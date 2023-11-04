const modeToggler = document.querySelector("#mode-toggler-btn");
const eachDivBtn = document.querySelector("#main-div-cnt");

const mainDiv = document.querySelector("#main-cnt");

let mainDivToggle = false;
function toggleMainCnt(e) {
  if (mainDivToggle) {
    mainDiv.style.backgroundColor = "#FFFFFF";
    mainDiv.style.color = "#000";
    mainDivToggle = false;
  } else {
    mainDiv.style.backgroundColor = "#000";
    mainDiv.style.color = "#FFFFFF";
    mainDivToggle = true;
  }
}

function selectDivToToggle(e) {
  console.log(e.target.textContent);
}
modeToggler.addEventListener("click", toggleMainCnt, false);
eachDivBtn.addEventListener("click", selectDivToToggle);
