const bars = document.querySelector(".humburger-logo");
const hamburgerMenu = document.querySelector(".hamburger");

bars.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hamburger-inactive");
  console.log("clicked");
});
