let topLeft = document.querySelector("#top-left").value;
let topRight = document.querySelector("#top-right").value;
let bottomLeft = document.querySelector("#bottom-left").value;
let bottomRight = document.querySelector("#bottom-right").value;
let inputCnt = document.querySelector(".input-cnt");
let mainObj = document.querySelector(".main-obj");
let height = document.querySelector(".height-value");
let width = document.querySelector(".width-value");

function setProperty(x1, x2, y1, y2) {
  mainObj.style.borderRadius = `${x1}% ${100 - x1}% ${
    100 - y1
  }% ${y1}% / ${y2}% ${x2}% ${100 - x2}% ${100 - y2}%`;
}

inputCnt.addEventListener("input", (e) => {
  let inputBox = e.target.id;
  let value = e.target.value;
  switch (inputBox) {
    case "top-left":
      setProperty(value, topRight, bottomRight, bottomLeft);
      break;
    case "top-right":
      setProperty(topLeft, value, bottomRight, bottomLeft);
      break;
    case "bottom-right":
      setProperty(topLeft, topRight, value, bottomLeft);
      break;
    case "bottom-left":
      setProperty(topLeft, topRight, bottomRight, value);
      break;

    default:
      console.log("unknown");
      break;
  }
});

height.addEventListener("change", (e) => {
  mainObj.style.height = e.target.value + "px";
});
width.addEventListener("change", (e) => {
  mainObj.style.width = e.target.value + "px";
});
