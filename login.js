
const passwordInput = document.getElementById("password");
const toggleIcon = document.getElementById("toggle-password");
const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const errorMessages = document.querySelectorAll(".error-message");

// Hide all error messages initially
errorMessages.forEach(msg => {
    msg.style.display = "none";
    msg.style.opacity = "0";
});

// Toggle password visibility
toggleIcon.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
        passwordInput.type = "password";
        toggleIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
});

// Form validation
loginBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let valid = true;
    
    // Hide all error messages first
    errorMessages.forEach(msg => {
        msg.style.display = "none";
        msg.style.opacity = "0";
        msg.style.transform = "translateY(-10px)";
    });

    // Username validation
    if (usernameInput.value.trim() === "") {
        showError(0, "Please enter a valid username");
        valid = false;
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        showError(1, "Password must be at least 6 characters long");
        valid = false;
    }

    if (valid) {
        // Show loading state
        loginBtn.classList.add("loading");
        
        // Simulate API call (remove this in production)
        setTimeout(() => {
            loginBtn.classList.remove("loading");
            // Here you would normally submit the form
            // form.submit();
        }, 2000);
    }
});

// Function to show error with animation
function showError(index, message) {
    const errorElement = errorMessages[index];
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
        // Trigger reflow for animation
        errorElement.offsetHeight;
        errorElement.style.opacity = "1";
        errorElement.style.transform = "translateY(0)";
    }
}


