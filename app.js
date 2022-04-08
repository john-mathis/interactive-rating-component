"use strict";

// Global Selectors
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let submitButton = document.querySelector(".submit__btn");
let userSelection = document.querySelector(".user__selection");

let userChoices = [one, two, three, four, five];

// Take the user's selection and add it to the after screen.
function scoreSelect() {
  document.addEventListener("click", (evt) => {
    // If the user clicks on one of the scores, add the selected score to the after screen.
    for (let i = 0; i < userChoices.length; i++) {
      let target = evt.target;
      if (target === userChoices[i]) {
        userSelection.textContent = evt.target.textContent;
        userChoices[i].classList.add("selected");
      } else {
        userChoices[i].classList.remove("selected");
      }
    }
  });
}

// When the submit button is clicked...
function submitSelection() {
  const beforeContainer = document.querySelector(".before");
  const afterContainer = document.querySelector(".after");
  let errorMessage = document.querySelector(".error__message");

  // If the user hasn't selected a score, display an error message.
  if (userSelection.textContent === "") {
    errorMessage.style.display = "block";
  } else {
    // If the user has selected a score, hide the before container, hide the error message, and display the after container.
    beforeContainer.style.display = "none";
    afterContainer.style.display = "block";
    errorMessage.style.display = "none";
  }
}

scoreSelect();
submitButton.addEventListener("click", submitSelection);
