// const sourceText = document.querySelector("#source-text");
// const targetBox = document.querySelector("#target-box-cnt");
// const inputBox = document.querySelector("#input-box");
// // sourceText.addEventListener("dragstart", (e) => console.log(e.target));

// // sourceText.addEventListener("dragleave", (e) => {
// //   console.log("Drag leave triggered", e);
// // });

// targetBox.addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// targetBox.addEventListener("drop", (e) => {
//   e.preventDefault();
//   const image = e.dataTransfer.files[0];
//   console.log(image.type);
//   // e.target.appendChild(sourceText);
//   console.log(inputBox.value);
// });

// /*
// drag
// dragenter
// dragend
// dragover
// dragleave
// drop
// dragstart
// */

document.getElementById("uploadButton").addEventListener("click", function () {
  const fileInput = document.getElementById("fileInput");
  const resultDiv = document.getElementById("result");

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const formData = new FormData();

    formData.append("file", file);
    formData.append("file-02", "Samarth");

    // You can now use the formData object to send the file to a server using AJAX or fetch.
    // Example using fetch:

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((response) => {
        console.log(response);
        response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    resultDiv.innerHTML = "Please select a file to upload.";
  }
});
