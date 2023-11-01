const sourceText = document.querySelector("#source-text");
const targetBox = document.querySelector("#target-box-cnt");

sourceText.addEventListener("dragstart", (e) => console.log(e.target));

sourceText.addEventListener("dragleave", (e) => {
  console.log("Drag leave triggered", e);
});

targetBox.addEventListener("dragover", (e) => {e.preventDefault()});

targetBox.addEventListener("drop", (e) => {
  
  e.target.appendChild(sourceText);
});
