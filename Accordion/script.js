const multipleOpenToggler = document.querySelector("#multiple-open-toggler");
let multipleOpenAllowed;
let presentAccordion;
let isAccordionOpen = false;
const accordionMainDiv = document.querySelector("#accordion-main-div");
let previousAccordion = "";

function checkMultipleOpenAllowed() {
  if (multipleOpenToggler.checked) {
    multipleOpenAllowed = true;
    return true;
  } else {
    multipleOpenAllowed = false;
    return false;
  }
}

function toggleAccordionDiv(e) {
  presentAccordion = e.target;

  if (
    presentAccordion?.lastElementChild?.classList?.contains("accordion-text") ||
    presentAccordion?.lastElementChild?.classList?.contains(
      "accordion-text-active"
    )
  ) {
    isAccordionOpen
      ? closeAccordion(presentAccordion?.lastElementChild)
      : openAccordion(presentAccordion?.lastElementChild);
  } else if (
    presentAccordion?.nextElementSibling?.nextElementSibling?.classList?.contains(
      "accordion-text"
    ) ||
    presentAccordion?.nextElementSibling?.nextElementSibling?.classList?.contains(
      "accordion-text-active"
    )
  ) {
    isAccordionOpen
      ? openAccordion(presentAccordion?.nextElementSibling?.nextElementSibling)
      : closeAccordion(
          presentAccordion?.nextElementSibling?.nextElementSibling
        );
  } else if (
    presentAccordion?.nextElementSibling?.classList?.contains(
      "accordion-text"
    ) ||
    presentAccordion?.nextElementSibling?.classList?.contains(
      "accordion-text-active"
    )
  ) {
    isAccordionOpen
      ? openAccordion(presentAccordion?.nextElementSibling)
      : closeAccordion(presentAccordion?.nextElementSibling);
  } else {
    console.log(`not found`);
  }
  previousAccordion = presentAccordion;
  if (previousAccordion !== presentAccordion) {
    console.log(`Prev : ${presentAccordion} , Curr :${presentAccordion}`);
  }
}

function openAccordion(div) {
  div.classList.add("accordion-text-active");
  div.classList.remove("accordion-text");
  isAccordionOpen = false;
}
function closeAccordion(div) {
  div.classList.remove("accordion-text-active");
  div.classList.add("accordion-text");
  isAccordionOpen = true;
}

function check(e) {
  if (checkMultipleOpenAllowed()) {
    openAccordion();
  } else {
    toggleAccordionDiv(e);
  }
}

accordionMainDiv.addEventListener("click", check);
