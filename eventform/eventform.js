const form = document.querySelector("#ticketForm");
const attendeeType = document.querySelector("#attendeeType");
const errors = document.querySelector("#errors");
const output = document.querySelector("#output");

// TODO: Select the hidden Student/Guest div and its label/input after adding them to the HTML.

// TODO: Add a change listener to attendeeType.
// For Student, show a Student # input and require exactly 9 digits.
// For Guest, show an Access Code input and require "EVENT131".

// TODO: Set the date input's minimum to today, then validate that the chosen date
// is later than today when the form is submitted.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errors.textContent = "";
  output.textContent = "";

  // TODO: Read the form values and validate the conditional input.
  // TODO: Put errors inside #errors and return early when validation fails.
  // TODO: If valid, display Ticket Created and the ticket details in #output.
  // TODO: Reset the form after a successful submission.
});
