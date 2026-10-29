const form = document.querySelector("#ticketForm");
const attendeeType = document.querySelector("#attendeeType");
const errors = document.querySelector("#errors");
const output = document.querySelector("#output");
const conditional=document.querySelector("#conditionalField");
const label =document.querySelector("#conditionalLabel");
const input =document.querySelector("#conditionalInput");
input.required = false;

// TODO: Select the hidden Student/Guest div and its label/input after adding them to the HTML.

// TODO: Add a change listener to attendeeType.
// For Student, show a Student # input and require exactly 9 digits.
// For Guest, show an Access Code input and require "EVENT131".
attendeeType.addEventListener('change',()=> {
   const selectedType= attendeeType.value;
    console.log(selectedType)
    if(selectedType ==='student' ){
        conditional.hidden=false;
        input.required=true;
        label.textContent = "Student #";
        console.log("Student selected.")
       
    }
    else if (selectedType === "guest"){
        conditional.hidden =false;
        input.required = true;
        label.textContent = "Access Code";
        console.log("Guest Selected.")
    }
    else{
        conditional.hidden=true;
        input.required = false;
        console.log("Please make a selection.")
    }
})

// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errors.textContent = "";
  output.textContent = "";
    const selectedType = attendeeType.value;
    const eventDate = form.eventDate.value;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();

   if (selectedType === "student" ) {
      // Requires exactly nine numeric digits.
        const studentNumberPattern = /^\d{9}$/;
        if (!studentNumberPattern.test(input.value.trim())) {
            errors.textContent = "Student # must contain exactly 9 digits.";
            return;
            }
        
    }
    if (selectedType == 'guest' && input.value !=="EVENT131") {
    errors.textContent = "Invalid access code. Please enter EVENT131.";
    return;
}

 if (isPastDate(eventDate)) {
    errors.textContent = "Please choose a later date.";
    return;
  }



  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${eventDate}</p>
  <p>Type: ${selectedType}</p>
`;

  form.reset();
  conditional.hidden = true;
  input.required = false;

});
          
