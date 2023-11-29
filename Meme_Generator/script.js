let memeImg = document.querySelector(".meme-img");
let memeTitleInfo = document.querySelector(".title-info");
let memeAuthorInfo = document.querySelector(".author-info");
let generateMemeBtn = document.querySelector(".generate-meme-btn");
let src = `https://meme-api.com/gimme/wholesomememes`;
let loaderText = document.querySelectorAll(".loading-text");
let loaderImg = document.querySelector(".img-loading");

function getMemeResponse() {
  //    skeltonLoader();
  fetch(src)
    .then((res) => res.json())
    .then((res) => {
      removeSkeletonLoader();
      memeTitleInfo.innerText = res.title;
      memeImg.setAttribute("src", `${res.url}`);
      memeAuthorInfo.innerText = res.author;
    })
    .catch((err) => console.warn(err));
}

function addSkeletonLoader() {
  // loader.forEach((item) => (item.style.display = "block"));
  loaderText.forEach((item) => (item.style.display = "block"));
  loaderImg.style.display = "block";
  memeAuthorInfo.style.opacity = "0%";
  memeTitleInfo.style.opacity = "0%";
}
function removeSkeletonLoader() {
  // loader.forEach((item) => (item.style.display = "none"));
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
