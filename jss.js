// script.js

// JavaScript Validation

// Function to validate the email format
function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
    }
    return true;
}

// Function to validate the phone number format
function validatePhoneNumber() {
    const phoneInput = document.getElementById("phone");
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        alert("Please enter a valid phone number (10 digits).");
        phoneInput.focus();
        return false;
    }
    return true;
}

// Function to perform overall form validation
function validateForm() {
    const isValidEmail = validateEmail();
    const isValidPhone = validatePhoneNumber();

    if (isValidEmail && isValidPhone) {
        // Additional validation or form submission logic can be added here
        alert("Form submitted successfully!");
    }
}
