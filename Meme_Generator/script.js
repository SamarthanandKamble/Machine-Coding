let memeImg = document.querySelector(".meme-img");
let memeTitle = document.querySelector(".title-info");
let memeAuthor = document.querySelector(".author-info");
let generateMemeBtn = document.querySelector(".generate-meme-btn");
let src = `https://meme-api.com/gimme/wholesomememes`;

function getMemeResponse() {
  fetch(src)
    .then((res) => res.json())
    .then((res) => {
      memeTitle.innerText = res.title;
      memeImg.setAttribute("src", `${res.url}`);
      memeAuthor.innerText = res.author;
    })
    .catch((err) => console.warn(err));
}

function generateMeme(e) {
    e.preventDefault();
  getMemeResponse();
}

generateMemeBtn.addEventListener("click", generateMeme);
