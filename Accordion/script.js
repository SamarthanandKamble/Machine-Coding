const multipleOpenToggler = document.querySelector("#multiple-open-toggler");
const accordionMainDiv = document.querySelector("#accordion-main-div");
const accordionText = document.querySelectorAll(".accordion-text");
let presentAccordion;

function checkMultipleOpenAllowed() {
  if (multipleOpenToggler.checked) {
    return true;
  } else {
    return false;
  }
}

function openAccordion(div) {
  div.classList.toggle("accordion-text-active");
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
        openAccordion(item);
      } else {
        closeAccordion(item);
      }
    });
  } else if (
    presentAccordion?.nextElementSibling?.nextElementSibling?.classList?.contains(
      "accordion-text"
    )
  ) {
    Array.from(accordionText).map((item) => {
      if (item === presentAccordion?.nextElementSibling?.nextElementSibling) {
        openAccordion(item);
      } else {
        closeAccordion(item);
      }
    });
  } else if (
    presentAccordion?.nextElementSibling?.classList?.contains("accordion-text")
  ) {
    Array.from(accordionText).map((item) => {
      if (item === presentAccordion?.nextElementSibling) {
        openAccordion(item);
      } else {
        closeAccordion(item);
      }
    });
  }
}

function check(e) {
  if (checkMultipleOpenAllowed()) {
    multipleAccordionDiv(e);
  } else {
    simpleAccordion(e);
  }
}

accordionMainDiv.addEventListener("click", check);
