const form = document.querySelector("#ticketForm");
const attendeeType = document.querySelector("#attendeeType");
const errors = document.querySelector("#errors");
const output = document.querySelector("#output");
const conditional=document.querySelector("#conditionalField");
const label =document.querySelector("#conditionalLabel");
const input =document.querySelector("#conditionalInput");

// TODO: Select the hidden Student/Guest div and its label/input after adding them to the HTML.

// TODO: Add a change listener to attendeeType.
// For Student, show a Student # input and require exactly 9 digits.
// For Guest, show an Access Code input and require "EVENT131".
attendeeType.addEventListener('change',()=> {
   const selectedType= attendeeType.value
    console.log(selectedType)
    if(selectedType ==='student' ){
        conditional.hidden=false;
        label.textContent = "Student I#";
        console.log("Student selected.")
       
    }
    else if (selectedType === "guest"){
        conditional.hidden =false;
        label.textContent = "Access Code";
        console.log("Guest Selected.")
    }
    else{
        conditional.hidden=true;
        console.log("Please make a selection.")
    }
})

// TODO: Set the date input's minimum to today, then validate that the chosen date
// is later than today when the form is submitted.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errors.textContent = "";
  output.textContent = "";
    const selectedType = attendeeType.value;

    if (selectedType === "student") {
        if (input.value.length !== 9) {
            console.log("Student I# must have 9 digits");
        }
    }
   
  // TODO: Read the form values and validate the conditional input.
  // TODO: Put errors inside #errors and return early when validation fails.
  // TODO: If valid, display Ticket Created and the ticket details in #output.
  // TODO: Reset the form after a successful submission.
});
