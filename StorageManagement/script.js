// Get the output elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const courseError = document.getElementById("courseError");
const feedbackError = document.getElementById("feedbackError");

const storedFeedback = document.getElementById("storedFeedback");
const sessionUser = document.getElementById("sessionUser");


// Submit Feedback
function submitFeedback() {

    // Get values entered by the student
    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const feedback = document.getElementById("feedback").value.trim();


    // Clear previous error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    courseError.innerHTML = "";
    feedbackError.innerHTML = "";


    // Variable to check whether form is valid
    let isValid = true;


    // Check Student Name
    if (name === "") {

        nameError.innerHTML =
            "Name cannot be empty.";

        isValid = false;

    }


    // Check Email
    if (email === "") {

        emailError.innerHTML =
            "Email cannot be empty.";

        isValid = false;

    }
    else {

        // Regular expression for valid email
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            emailError.innerHTML =
                "Enter a valid email.";

            isValid = false;

        }

    }


    // Check Course
    if (course === "") {

        courseError.innerHTML =
            "Please select a course.";

        isValid = false;

    }


    // Check Feedback
    if (feedback === "") {

        feedbackError.innerHTML =
            "Please enter feedback.";

        isValid = false;

    }


    // Stop if validation fails
    if (isValid === false) {

        return;

    }


    // Store feedback details in Local Storage

    localStorage.setItem("studentName", name);

    localStorage.setItem("email", email);

    localStorage.setItem("course", course);

    localStorage.setItem("feedback", feedback);


    // Store only Student Name in Session Storage

    sessionStorage.setItem("currentUser", name);


    // Display success message

    displayStoredData();

    displaySessionUser();


    // Clear form after successful submission

    document.getElementById("studentName").value = "";

    document.getElementById("email").value = "";

    document.getElementById("course").value = "";

    document.getElementById("feedback").value = "";

}


// Display Local Storage data
function displayStoredData() {

    // Get data from Local Storage

    const name = localStorage.getItem("studentName");

    const email = localStorage.getItem("email");

    const course = localStorage.getItem("course");

    const feedback = localStorage.getItem("feedback");


    // Check whether feedback exists

    if (
        name !== null &&
        email !== null &&
        course !== null &&
        feedback !== null
    ) {

        storedFeedback.innerHTML =

            "Student Name : " + name + "<br>" +

            "Email : " + email + "<br>" +

            "Course : " + course + "<br>" +

            "Feedback : " + feedback;

    }
    else {

        storedFeedback.innerHTML =
            "No feedback stored.";

    }

}


// Display Session Storage data
function displaySessionUser() {

    // Get current user from Session Storage

    const currentUser =
        sessionStorage.getItem("currentUser");


    // Check whether session data exists

    if (currentUser !== null) {

        sessionUser.innerHTML =
            "Current Session User: " + currentUser;

    }
    else {

        sessionUser.innerHTML =
            "Current Session User:";

    }

}


// Delete Local Storage and Session Storage
function deleteStoredData() {

    // Remove all feedback details from Local Storage

    localStorage.removeItem("studentName");

    localStorage.removeItem("email");

    localStorage.removeItem("course");

    localStorage.removeItem("feedback");


    // Remove Student Name from Session Storage

    sessionStorage.removeItem("currentUser");


    // Display required message

    storedFeedback.innerHTML =
        "No feedback stored.";


    sessionUser.innerHTML =
        "Current Session User:";


    // Clear error messages

    nameError.innerHTML = "";

    emailError.innerHTML = "";

    courseError.innerHTML = "";

    feedbackError.innerHTML = "";

}


// Display stored data when page loads

displayStoredData();

displaySessionUser();


// Error messages disappear when valid input is entered

document.getElementById("studentName").addEventListener("input", function() {

    if (this.value.trim() !== "") {

        nameError.innerHTML = "";

    }

});


document.getElementById("email").addEventListener("input", function() {

    const email = this.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {

        emailError.innerHTML = "";

    }

});


document.getElementById("course").addEventListener("change", function() {

    if (this.value !== "") {

        courseError.innerHTML = "";

    }

});


document.getElementById("feedback").addEventListener("input", function() {

    if (this.value.trim() !== "") {

        feedbackError.innerHTML = "";

    }

});