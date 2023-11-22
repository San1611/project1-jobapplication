function validateAlphabets(input) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(input);
}

function validateEmail(email) {
    var regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

function validateJobRole(jobRole) {
    return jobRole !== "Select your Job Role...";
}

function validateCity(city) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(city);
}

function validatePincode(pincode) {
    var regex = /^\d{6}$/;
    return regex.test(pincode);
}

function validateDate(date) {
    return date !== "";
}

function validateCV(cv) {
    return cv !== "";
}

function validateForm() {
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var job_role = document.getElementById("job_role").value;
    var Address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pincode").value;
    var date = document.getElementById("date").value;
    var cv = document.getElementById("upload").value;

    // Check if any fields are empty
    if (first_name === "") {
        alert("Please enter First Name.");
        return false; 
    }

    if (last_name === "") {
        alert("Please enter Last Name.");
        return false;
    }

    if (!validateAlphabets(first_name) || !validateAlphabets(last_name)) {
        alert("First Name and Last Name should only contain alphabets.");
        return false;
    }


    if (email === "") {
        alert("Please enter your Email address.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please check your entered email address. Enter a valid email.");
        return false;
    }

    if (job_role === "Select your Job Role...") {
        alert("Please select a Job Role.");
        return false;
    }

    if (!validateJobRole(job_role)) {
        alert("Please select a valid job role.");
        return false;
    }

    if (Address === "") {
        alert("Please fill in the Address.");
        return false;
    }

    if (city === "") {
        alert("Please enter your City.");
        return false;
    }

    if (!validateCity(city)) {
        alert("City name must contain only alphabets.");
        return false;
    }

    if (pincode === "") {
        alert("Please enter your PinCode.");
        return false;
    }

    if (!validatePincode(pincode)) {
        alert("Pincode enter a valid 6 digit pincode.");
        return false;
    }


    if (date === "") {
        alert("Please select the date.");
        return false;
    }

    if (cv === "") {
        alert("upload your CV please.");
        return false;
    }

    alert("Form submitted successfully!");
    
    return true; // Allow form submission
}
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission
  //validateForm();
  if (!validateForm()) {
    // Validation failed, don't submit the form
    return;
  }

  // Form validation passed, submit the form using AJAX or other methods
  console.log('Form submitted successfully!');
});