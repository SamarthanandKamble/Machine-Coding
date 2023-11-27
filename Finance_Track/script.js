let dropdownBtn = document.querySelector("#dropdown-btn");
let dropdownItems = document.querySelectorAll(".ul-cnt");
let dropdownValue = document.querySelector("#dropdown-value");
let addTrnsBtn = document.querySelector("#add-trns");
let mainObj = document.querySelector(".main-cnt");
let description = document.querySelector("#description");
let amount = document.querySelector("#amount");
let mainAmount = document.querySelector("#main-amount");
let trnsListDisplay = document.querySelector(".display-tans");
let toggler = document.querySelector(".fa-angle-down");
let flag = false;
let finalAmount = 0;
function displayMode(e) {
  if (flag) {
    dropdownItems.forEach((item) => {
      item.style.display = "none";
      toggler.setAttribute("class", "fa solid fa-angle-down");
      flag = false;
    });
  } else {
    dropdownItems.forEach((item) => {
      item.style.display = "block";
      toggler.setAttribute("class", "fa-solid fa-angle-up");
      console.log(toggler);
      flag = true;
    });
  }

  dropdownItems.forEach((item) =>
    item.addEventListener("click", (e) => {
      dropdownValue.textContent = e.target.textContent;
      displayMode();
    })
  );
}

function displayTrns(e) {
  if (description.value && amount.value) {
    let div = document.createElement("div");
    div.classList.add("trns-display-items");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    span1.textContent = description.value;
    console.log(span1.textContent);
    let amt = checkExpenseIncome(amount.value, div);

    amount.value = "";

    span2.textContent = amt;

    div.append(span1);
    div.append(span2);
    trnsListDisplay.append(div);
  } else {
    alert("Fill the details first!!");
  }
}

function checkExpenseIncome(value, div) {
  let amount = 0;
  amount = value;
  if (dropdownValue.textContent === "Income") {
    mainAmount.textContent = `${+mainAmount.textContent + +amount}`;
    console.log(` inc main amt :${mainAmount.textContent}`);
    div.style.color = "green";
  } else {
    mainAmount.textContent = `${+mainAmount.textContent - amount}`;
    console.log(`dec main amt :${mainAmount.textContent}`);
    div.style.color = "red";
  }

  return amount;
}

dropdownBtn.addEventListener("click", displayMode);
addTrnsBtn.addEventListener("click", displayTrns);
