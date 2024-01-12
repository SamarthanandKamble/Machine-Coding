const drumBoard = document.querySelector("#drum-board-wrapper");
const displayKeys = document.querySelectorAll(".drum-keys");

const sounds = new Map([
  ["w", "https://www.fesliyanstudios.com/play-mp3/6708"],
  ["f", "https://www.fesliyanstudios.com/play-mp3/6685"],
  ["a", "https://www.fesliyanstudios.com/play-mp3/6665"],
  ["s", "https://www.fesliyanstudios.com/play-mp3/6716"],
  ["d", "https://www.fesliyanstudios.com/play-mp3/6743"],
]);

function playAudio(key) {
  const audio = new Audio(sounds.get(key));
  audio.play();
}

function checkForBtnPressed(key) {
  Array.from(displayKeys).map((element) => {
    if (element.textContent === key) {
      playAudio(key);
    }
  });
}

function changeTheColorOfPressedKey(key) {
  Array.from(displayKeys).map((item) => {
    if (item.textContent === key) {
      item.style.backgroundColor = "#aeaeae";
      console.log(`${key} matched`);
    } else {
      item.style.backgroundColor = "#fff";
    }
  });
}

document.addEventListener(
  "keypress",
  (e) => {
    checkForBtnPressed(e.key);
    changeTheColorOfPressedKey(e.key);
  },
  false
);

function playAfterClick(e) {
  checkForBtnPressed(e.target.textContent);
  changeTheColorOfPressedKey(e.target.textContent);
}

drumBoard.addEventListener("click", playAfterClick);
