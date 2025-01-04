// Class to manage the behavior of the login and registration forms
class Classlogin2 {
  constructor() {
    // Adds a listener to the 'openRegister2' button to switch to the registration form when clicked
    openRegister2.addEventListener("click", () => {
      // Close the login form
      this.openLogin(false);
      // Open the registration form using 'classRegister' instance
      classRegister.openRegister(true);
      // Change the preview image to the registration image
      classPreviewLogin.changeImage("register");
    });

    // Adds a listener to the 'enterLogin2' button for login validation and submission
    enterLogin2.addEventListener("click", () => {
      // If both email and password are valid, send the login request
      if (this.validateEmail() && this.validatePassword()) {
        const url = "../../controller/users/login.php"; // API endpoint for login
        const data = {
          action: "login",
          emailLogin: login2Email.value,
          passwordLogin: login2Password.value
        };
        // Make the AJAX request for login
        loginClass.makeAjaxRequestLogin(url, data);
      }
    });

    loginWithGoogle2.addEventListener("click", function(){
    })

    loginWithFacebook2.addEventListener("click", function(){
    })

    loginWithApple2.addEventListener("click", function(){
    })

  }

  // Method to show or hide the login form
  openLogin(action) {
    if (action) {
      login2.style.display = "block"; // Show the login form
    } else {
      login2.style.display = "none"; // Hide the login form
    }
  }

  // Email validation for login
  validateEmail() {
    const email = login2Email.value.trim(); // Get email and remove extra spaces
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Regex for valid email format
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email"); // Show error if email is invalid
      login2Email.style.border = "3px solid #8B0000"; // Highlight field in red
      return false; // Validation fails
    }
    login2Email.style.border = "3px solid transparent"; // Reset border if valid
    return true; // Validation passes
  }

  // Password validation for login
  validatePassword() {
    const password = login2Password.value.trim(); // Get password and remove extra spaces
    if (password.length < 6) {
      alert("Password must be at least 6 characters"); // Show error if password is too short
      login2Password.style.border = "3px solid #8B0000"; // Highlight field in red
      return false; // Validation fails
    }
    login2Password.style.border = "3px solid transparent"; // Reset border if valid
    return true; // Validation passes
  }
}

// DOM elements for login and registration forms
const login2 = document.getElementById("login2");

const loginWithGoogle2 = document.getElementById("loginWithGoogle2");
const loginWithFacebook2 = document.getElementById("loginWithFacebook2");
const loginWithApple2 = document.getElementById("loginWithApple2");

const enterLogin2 = document.getElementById("enterLogin2");
const login2Password = document.getElementById("login2Password");
const login2Email = document.getElementById("login2Email");
const openRegister2 = document.getElementById("openRegister2");

// Create an instance of the Classlogin2 class
const classlogin2 = new Classlogin2();
