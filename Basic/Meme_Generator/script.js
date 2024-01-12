let memeImg = document.querySelector(".meme-img");
let memeTitleInfo = document.querySelector(".title-info");
let memeAuthorInfo = document.querySelector(".author-info");
let generateMemeBtn = document.querySelector(".generate-meme-btn");
let loaderText = document.querySelectorAll(".loading-text");
let loaderImg = document.querySelector(".img-loading");
let src = `https://meme-api.com/gimme/wholesomememes`;

function displayMeme(title, url, author) {
  memeTitleInfo.innerText = title;
  memeImg.setAttribute("src", url);
  memeAuthorInfo.innerText = author;
}
function getMemeResponse() {
  fetch(src)
    .then((res) => res.json())
    .then((res) => {
      removeSkeletonLoader();
      displayMeme(res.title, res.url, res.author);
    })
    .catch((err) => console.warn(err));
}

function addSkeletonLoader() {
  loaderText.forEach((item) => (item.style.display = "block"));
  loaderImg.style.display = "block";
  memeAuthorInfo.style.opacity = "0%";
  memeTitleInfo.style.opacity = "0%";
}
function removeSkeletonLoader() {
  loaderText.forEach((item) => (item.style.display = "none"));
  loaderImg.style.display = "none";
  memeAuthorInfo.style.opacity = "100%";
  memeTitleInfo.style.opacity = "100%";
}

function generateMeme(e) {
  e.preventDefault();
  addSkeletonLoader();
  getMemeResponse();
}

generateMemeBtn.addEventListener("click", generateMeme);
getMemeResponse();
