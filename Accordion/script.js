const multipleOpenToggler = document.querySelector("#multiple-open-toggler");
const accordionMainDiv = document.querySelector("#accordion-main-div");
const accordionText = document.querySelectorAll(".accordion-text");
const accordionLogo = document.querySelectorAll(".accordion-logo");
let presentAccordion;

function checkMultipleOpenAllowed() {
  if (multipleOpenToggler.checked) {
    return true;
  } else {
    return false;
  }
}

function openAccordion(div, accordionPanel) {
  div.classList.toggle("accordion-text-active");
  if (
    accordionPanel?.classList.contains("fa-caret-down") ||
    div === accordionPanel
  ) {
    accordionPanel.classList.replace("fa-caret-down", "fa-caret-up");
  } else {
    accordionPanel?.classList.replace("fa-caret-up", "fa-caret-down");
  }
  console.log("div : ", div, "accordion : ", accordionPanel);
}
function closeAccordion(div, accordionPanel) {
  div.classList.remove("accordion-text-active");
  div.classList.add("accordion-text");
  div.previousElementSibling.classList.replace("fa-caret-up", "fa-caret-down");
}

function multipleAccordionDiv(e) {
  presentAccordion = e.target;
  if (
    presentAccordion?.lastElementChild?.classList?.contains("accordion-text")
  ) {
    openAccordion(
      presentAccordion?.lastElementChild,
      presentAccordion?.lastElementChild?.previousElementSibling
    );
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
    openAccordion(
      presentAccordion?.nextElementSibling?.nextElementSibling,
      presentAccordion?.nextElementSibling
    );
  } else if (
    presentAccordion?.nextElementSibling?.nextElementSibling?.classList?.contains(
      "accordion-text-active"
    )
  ) {
    closeAccordion(presentAccordion?.nextElementSibling?.nextElementSibling);
  } else if (
    presentAccordion?.nextElementSibling?.classList?.contains("accordion-text")
  ) {
    openAccordion(presentAccordion?.nextElementSibling, presentAccordion);
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
        openAccordion(
          item,
          presentAccordion.lastElementChild.previousElementSibling
        );
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
        openAccordion(item, presentAccordion?.nextElementSibling);
      } else {
        closeAccordion(item);
      }
    });
  } else if (
    presentAccordion?.nextElementSibling?.classList?.contains("accordion-text")
  ) {
    Array.from(accordionText).map((item) => {
      if (item === presentAccordion?.nextElementSibling) {
        openAccordion(item, presentAccordion);
      } else {
        closeAccordion(item, item);
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
