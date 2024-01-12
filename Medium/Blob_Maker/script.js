let topLeft = document.querySelector("#top-left").value;
let topRight = document.querySelector("#top-right").value;
let bottomLeft = document.querySelector("#bottom-left").value;
let bottomRight = document.querySelector("#bottom-right").value;
let inputCnt = document.querySelector(".input-cnt");
let mainObj = document.querySelector(".main-obj");
let height = document.querySelector(".height-value");
let width = document.querySelector(".width-value");
let borderRadiusProp = document.querySelector("#border-radius-prop");
let borderRadiusPropLabel = document.querySelector("#border-radius-prop-label");

function setProperty(x1, x2, y1, y2) {
  mainObj.style.borderRadius = `${x1}% ${100 - x1}% ${
    100 - y1
  }% ${y1}% / ${y2}% ${x2}% ${100 - x2}% ${100 - y2}%`;
  borderRadiusProp.value = mainObj.style.borderRadius;
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

function displayRadiusProperties() {
  if (mainObj.style.borderRadius) {
    borderRadiusProp.select();
    navigator.clipboard.writeText(borderRadiusProp.value);
    alert("Copied the border-radius value");
  } else {
    alert("The border-radius is 50%");
  }
}

height.addEventListener("change", (e) => {
  mainObj.style.height = e.target.value + "px";
});
width.addEventListener("change", (e) => {
  mainObj.style.width = e.target.value + "px";
});

borderRadiusPropLabel.addEventListener("click", displayRadiusProperties);
