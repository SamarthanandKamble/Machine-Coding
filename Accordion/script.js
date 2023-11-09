const multipleOpenToggler = document.querySelector("#multiple-open-toggler");
let multipleOpenAllowed;
let presentAccordion;
const accordionMainDiv = document.querySelector("#accordion-main-div");


function checkMultipleOpenAllowed() {
  if (multipleOpenToggler.checked) {
    multipleOpenAllowed = true;
  } else {
    multipleOpenAllowed = false;
  }
}

function toggleAccordionDiv() {
  let isDivOpen = false;
  if (isDivOpen) {
    // closeAccordion
    isDivOpen = false;
  } else {
    // make style  ->block
    // openAccordion
    isDivOpen = true;
  }
}
function openAccordion() {
  //make the display -> block
}
function closeAccordion() {
  //make the display -> none
}

function check(e) {
  if (checkMultipleOpenAllowed) {
    openAccordion();
  } else {
    toggleAccordionDiv();
  }
}

accordionMainDiv.addEventListener("click", check);
