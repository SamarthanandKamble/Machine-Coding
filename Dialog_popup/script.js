const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const popupCnt = document.querySelector("#popup-cnt");
let cntOpen = false;
function openCnt(e) {
  cntOpen = true;
  popupCnt.style.display = "flex";
  if (!cntOpen) {
    closeBtn.removeEventListener("click", closeCnt);
  }
}

function closeCnt(e) {
  popupCnt.style.display = "none";
  cntOpen = false;
  if (cntOpen) openBtn.removeEventListener("click", openCnt);
}

openBtn.addEventListener("click", openCnt);
closeBtn.addEventListener("click", closeCnt);
