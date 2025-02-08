function handleInputChange(event) {
    const { id, value } = event.target;
    document.getElementById(id + "Error").textContent = ""; // Clear error message
}

function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting

    let isValid = true;

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (fullName === "") {
        document.getElementById("nameError").textContent = "Full Name is required!";
        isValid = false;
    } else {
        if (fullName.length >= 5) {
            document.getElementById("nameError").textContent = "";
        } else {
            document.getElementById("nameError").textContent = "Name must be at least 5 characters!";
            isValid = false;
        }
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email!";
        isValid = false;
    }

    if (phone === "" || phone.length < 10) {
        document.getElementById("phoneError").textContent = "Enter a valid phone number!";
        isValid = false;
    }

    if (password.length <= 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters!";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match!";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}
