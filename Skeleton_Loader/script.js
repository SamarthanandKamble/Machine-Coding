const userLogo = document.querySelector("#user-logo");
const userShortInfo = document.querySelector("#user-short-info-text");
const userDetailInfo = document.querySelectorAll(".user-info-detail");
const userEmail = document.querySelector("#user-email");
const skeletonLoader = document.querySelectorAll(".skeleton-text");
const userLogoDiv = document.querySelector("#user-logo-div");

let commentUsers = [];

function getDataFromApi() {
  fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, index) => {
        if (index === 0) {
          console.log(element.email);
          console.log(element.name);
          userShortInfo.innerText = `${element.name}`;
          userEmail.textContent = ` ${element.email}`;
          Array.from(userDetailInfo).map(
            (item) => (item.textContent = `${element.body} `)
          );
          userLogo.setAttribute("src", "/Skeleton_Loader/images/user-logo.jpg");
          userLogo.style.opacity = "0.8";
          skeletonLoader.forEach((div) => {
            div.classList.remove("skeleton-text");
          });
          userDetailInfo.forEach((div) => {
            div.style.animation = "none";
          });
          userEmail.style.animation = "none";
          userLogoDiv.style.animation = "none";
          userShortInfo.style.animation = "none";
        } else {
          return;
        }
      });
    });
}

function applyTheChanges(data) {
  //   data.forEach((element) => {
  //     console.log(element.id);
  //   });
  console.log(data);
}

getDataFromApi();
applyTheChanges(commentUsers);
