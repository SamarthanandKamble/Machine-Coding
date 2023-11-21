const multiWord = document.querySelector("#multi-word");
const constantText = document.querySelector("#const-text");

let words = ["Student", "Developer", "Engineer"];

function delay() {
  return new Promise((res) => setTimeout(res, 100));
}

async function displayWord(string) {
  string === "Engineer"
    ? (constantText.textContent = "I'am an")
    : (constantText.textContent = "I'am a");

  for (let i = 0; i < string.length; i++) {
    multiWord.textContent += string.charAt(i);
    // multiWord.style.color = "red";
    await delay();
  }
  await delay();
  
  for (let i = 0; i < string.length; i++) {
    multiWord.textContent = string.slice(0, string.length - 1 - i);
    // multiWord.style.color = "red";
    await delay();
  }
}

async function getWords() {
  for (const elements of words) {
    await displayWord(elements);
    await delay();
  }
  getWords();
}
getWords();
