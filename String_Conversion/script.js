const form = document.querySelector("#form");
const inputBox = document.querySelector("#input-box");
const strings = document.querySelectorAll(".string-div");

function changeText(text) {
  let updatedText = text.toLowerCase().trim();

  Array.from(strings).map((item) => {
    let key = item.children[1].getAttribute("id");
    switch (key) {
      case "lower-case":
        item.children[1].textContent = updatedText.toLowerCase();
        break;
      case "upper-case":
        item.children[1].textContent = updatedText.toUpperCase();
        break;
      case "kebab-case":
        item.children[1].textContent = updatedText.split(" ").join("-");
        break;
      case "snake-case":
        item.children[1].textContent = updatedText.split(" ").join("_");
        break;
      case "camel-case":
        let newStr = "";
        updatedText.split(" ").map((item, index) => {
          index % 2 !== 0
            ? (newStr +=
                item[0]?.toUpperCase() + item.substring(1).toLowerCase())
            : (newStr += item[0].toLowerCase() + item.substring(1));
        });
        item.children[1].textContent = newStr;
        break;
      default:
        break;
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputBox.value.length >= 3 && isNaN(inputBox.value)) {
    changeText(inputBox.value);
  }
  inputBox.value = "";
});
