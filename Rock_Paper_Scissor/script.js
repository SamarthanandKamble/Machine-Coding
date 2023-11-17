const gameArr = document.querySelectorAll(".li-items");
const compValText = document.querySelector("#cmp-val");
const ulCnt = document.querySelector("#ul-cnt");
const resultText = document.querySelector("#result-heading");
function checkWhoWin(uv, cv) {
  if (uv !== null) {
    if (uv === cv) {
      return `It's a tie`;
    } else if (uv === "Rock" && cv === "Scissor") {
      return `You win`;
    } else if (uv === "Paper" && cv === "Rock") {
      return `You win`;
    } else if (uv === "Scissor" && cv === "Paper") {
      return `You win`;
    } else {
      return `Computer wins`;
    }
  }
}

function compValIcon(attr) {
  let i = document.createElement("i");
  i.setAttribute("class", attr);
  compValText.replaceChild(i, compValText.lastElementChild);
}

ulCnt.addEventListener("click", (e) => {
  const uniqueId = Math.floor(Math.random() * 3);
  const compVal = gameArr[uniqueId].getAttribute("value");
  const userVal = e.target.parentElement.getAttribute("value");
  if (userVal) {
    const compValAttr = gameArr[uniqueId].children[0].getAttribute("class");
    compValIcon(compValAttr);
    const result = checkWhoWin(userVal, compVal);
    resultText.textContent = result;
  }
});
