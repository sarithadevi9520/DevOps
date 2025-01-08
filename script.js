function validateForm() {
    // Clear previous error messages
    var errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(function (msg) {
        msg.textContent = '';
    });

    // Getting the values of input fields
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    let valid = true;

    // Validating Full Name
    if (fullName.trim() === "") {
        document.getElementById('fullNameError').textContent = "Full Name is required.";
        valid = false;
    }

    // Validating Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email.";
        valid = false;
    }

    // Validating Phone Number (10 digits)
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = "Phone number should be exactly 10 digits.";
        valid = false;
    }

    // Validating Password (at least 6 characters)
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = "Password should be at least 6 characters long.";
        valid = false;
    }

    // Validating Confirm Password (must match the password)
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
        valid = false;
    }

    // Validating Gender selection
    if (!gender) {
        document.getElementById('genderError').textContent = "Please select your gender.";
        valid = false;
    }

    // Return false if any validation fails, otherwise true
    return valid;
}
