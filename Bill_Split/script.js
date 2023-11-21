const billAmount = document.querySelector("#bill-money");
const tip = document.querySelector("#tip-amt-div");
const customTip = document.querySelector("#custom-tip");
const people = document.querySelector("#people-count");
const generateBillBtn = document.querySelector("#generate-bill");
let selectTip = document.querySelector(".tip-amt-div");
let tipAmount = document.querySelector("#tip-amt");
let totalBill = document.querySelector("#total-bill");
let splitBill = document.querySelector("#split-bill");
let resetBtn = document.querySelector("#reset-btn");
let tipAmountValue;

function generateBill() {
  let amount = Math.trunc(billAmount.value);
  let tipAmount = calculateTipAmount(amount);
  let sumAmount = tipAmount + amount;
  billForEachPerson(sumAmount);
  totalBill.textContent = `Total : ${sumAmount}`;
}

function billForEachPerson(totalAmount) {
  let peopleCount = people.value;
  let billForEach = totalAmount / peopleCount;
  splitBill.textContent = `Each person bill : ${Math.trunc(billForEach)}`;
  console.log(Math.trunc(billForEach));
}

function calculateTipAmount(totalAmount) {
  let finalAmount;
  if (customTip.value) {
    tipAmountValue = customTip.value;
  }
  finalAmount = (tipAmountValue / 100) * totalAmount;
  console.log(finalAmount);
  tipAmount.textContent = `Tip Amount : ${finalAmount} `;
  return finalAmount;
}

function reset() {
  billAmount.value = "";
  customTip.value = "";
  people.value = "";
  totalBill.textContent = "";
  splitBill.textContent = "";
  tipAmount.textContent = "";
}

generateBillBtn.addEventListener("click", generateBill);

selectTip.addEventListener("click", (e) => {
  if (e.target.id) {
    tipAmountValue = e.target.textContent.split("%")[0];
  }
});

resetBtn.addEventListener("click", reset);

billAmount.addEventListener("input", () => {
  if (billAmount.value > 0) {
    generateBillBtn.removeAttribute("disabled");
  }
});
