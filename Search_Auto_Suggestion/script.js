// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

// Create an Auto Suggestion Box in Vanilla JS
// Create a suggestion area bottom to the input box that shows the suggestion list.
// The list is visible when the input box is in focus or when user types, it hides when the input box is blurred
// getSuggestions(text); method will act as mock server and will return random text based on the inputs with 0 - 200 millisceond latency and may fail.
// if a suggestion is clicked, populate the input box with its value and bring input box in focus

(() => {
  const input = document.querySelector(".input");
  const searchSuggestions = document.querySelector(".search-suggestions");

  const onFocus = () => {
    searchSuggestions.style.display = "block";
  };
  const onBlur = (e) => {
    console.log("for blur", e.target);
    if (e.target.tagName === "LI") {
      input.value = e.target.textContent;
      // searchSuggestions.style.display = "none";
    }
  };

  const generateSearchSuggestions = (e) => {
    const data = e.target.value;
    processData(data);
  };

  const processData = async (value) => {
    if (!value) {
      searchSuggestions.innerHTML = "";
      return;
    }
    try {
      const data = await getSuggestions(value);
      if (data.length > 0) {
        const list = document.createElement("ul");
        data.forEach((element) => {
          const li = document.createElement("li");
          li.textContent = element;
          li.style.cursor = "pointer";
          list.appendChild(li);
        });
        searchSuggestions.appendChild(list);
      }
    } catch (error) {
      console.warn(error?.message);
    }
  };
  const displayTheSearchQuery = (e) => {
    if (e.target.tagName === "LI") {
      console.log(e.target.textContent);
      input.value = e.target.textContent;
    }
    searchSuggestions.style.display = "none";
  };

  input.addEventListener("focus", onFocus);
  input.addEventListener("keyup", (e) => generateSearchSuggestions(e));
  searchSuggestions.addEventListener("click", displayTheSearchQuery, true);
  input.addEventListener("blur", onBlur);
})();
