const multipleOpenToggler = document.querySelector("#multiple-open-toggler");
const accordionMainDiv = document.querySelector("#accordion-main-div");
const accordionText = document.querySelectorAll(".accordion-text");
let isAccordionOpen = false;
let multipleOpenAllowed;
let presentAccordion;
let item;

function checkMultipleOpenAllowed() {
  if (multipleOpenToggler.checked) {
    multipleOpenAllowed = true;
    return true;
  } else {
    multipleOpenAllowed = false;
    return false;
  }
}

function openAccordion(div) {
  div.classList.add("accordion-text-active");
  div.classList.remove("accordion-text");
}
function closeAccordion(div) {
  div.classList.remove("accordion-text-active");
  div.classList.add("accordion-text");
}

function multipleAccordionDiv(e) {
  presentAccordion = e.target;
  if (
    presentAccordion?.lastElementChild?.classList?.contains("accordion-text")
  ) {
    openAccordion(presentAccordion?.lastElementChild);
  } else if (
    presentAccordion?.lastElementChild?.classList?.contains(
      "accordion-text-active"
    )
  ) {
    closeAccordion(presentAccordion?.lastElementChild);
  } else if (
    presentAccordion?.nextElementSibling?.nextElementSibling?.classList?.contains(
      "accordion-text"
    )
  ) {
    openAccordion(presentAccordion?.nextElementSibling?.nextElementSibling);
  } else if (
    presentAccordion?.nextElementSibling?.nextElementSibling?.classList?.contains(
      "accordion-text-active"
    )
  ) {
    closeAccordion(presentAccordion?.nextElementSibling?.nextElementSibling);
  } else if (
    presentAccordion?.nextElementSibling?.classList?.contains("accordion-text")
  ) {
    openAccordion(presentAccordion?.nextElementSibling);
  } else if (
    presentAccordion?.nextElementSibling?.classList?.contains(
      "accordion-text-active"
    )
  ) {
    closeAccordion(presentAccordion?.nextElementSibling);
  } else {
    console.log(`element not found`);
  }
}

function simpleAccordion(e) {
  presentAccordion = e.target;
  if (
    presentAccordion?.lastElementChild?.classList?.contains("accordion-text")
  ) {
    Array.from(accordionText).map((item) => {
      if (item === presentAccordion?.lastElementChild) {
        item?.classList?.remove("accordion-text");
        item?.classList?.add("accordion-text-active");
      } else {
        item?.classList?.remove("accordion-text-active");
        item?.classList?.add("accordion-text");
      }
    });
  } else if (
    presentAccordion?.nextElementSibling?.nextElementSibling?.classList?.contains(
      "accordion-text"
    )
  ) {
    Array.from(accordionText).map((item) => {
      if (item === presentAccordion?.nextElementSibling?.nextElementSibling) {
        item?.classList?.remove("accordion-text");
        item?.classList?.add("accordion-text-active");
      } else {
        item?.classList?.remove("accordion-text-active");
        item?.classList?.add("accordion-text");
      }
    });
  } else if (
    presentAccordion?.nextElementSibling?.classList?.contains("accordion-text")
  ) {
    Array.from(accordionText).map((item) => {
      if (item === presentAccordion?.nextElementSibling) {
        item?.classList?.remove("accordion-text");
        item?.classList?.add("accordion-text-active");
      } else {
        item?.classList?.remove("accordion-text-active");
        item?.classList?.add("accordion-text");
      }
    });
  }
}

function check(e) {
  if (checkMultipleOpenAllowed()) {
    multipleAccordionDiv(e);
    // close all open accordions.
  } else {
    simpleAccordion(e);
  }
}

accordionMainDiv.addEventListener("click", check);
