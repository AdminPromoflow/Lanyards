// Define a class called "Register"
class Register {
  constructor() {
    this.closeRegister();
    this.hideRegister(0);
    // Event listener to close the register form
    closeRegister.addEventListener("click", function () {
      // Call the closeRegister method of the Register class
      registerClass.closeRegister();
      // Call the closeLogin method of the Login class (assuming there's a Login class)
      loginClass.closeLogin();
      // Show the login form with a sliding animation
      loginClass.showLogin(700);
      // Hide the register form with a sliding animation
      registerClass.hideRegister(700);
    });

    registerWithGoogle1.addEventListener("click", function(){
    })
    registerWithFacebook1.addEventListener("click", function(){
    })
    registerWithapple1.addEventListener("click", function(){
    })

    // Event listener to open the register form from the login screen
    openRegisterFromLogin.addEventListener("click", function () {
      // Hide the login form with a sliding animation
      loginClass.hideLogin(0);
      // Show the register form with a sliding animation
      registerClass.showRegister(0);
    });

    // Add an event listener to the registration button
    submitBtnRegister.addEventListener("click", function () {
      // Call validation functions and display error or success messages
      if (registerClass.validateName() && registerClass.validateEmail() && registerClass.validatePassword()) {
        // Define the URL and the JSON data you want to send
        const url = "../../controller/users/register.php"; // Replace with your API endpoint URL
        const data = {
          action: "register",
          nameRegister: nameRegister.value,
          emailRegister: emailRegister.value,
          passwordRegister: passwordRegister.value
        };

        // Make the AJAX request
        registerClass.makeAjaxRequestRegister(url, data);
      }
    });
  }

  // Method to open the register form
  openRegister() {
    // Set the position and transformation of the "register" element
    register.style.left = "50%";
    register.style.transform = "translate(-50%, -50%)";
  }

  // Method to close the register form
  closeRegister() {
    if (closeRegisterSide == "left") {
      register.style.left = "100%";
      closeRegisterSide = "right";
    } else if (closeRegisterSide == "right") {
      register.style.left = "-100%";
      closeRegisterSide = "left";
    }
    register.style.transform = "translateY(-50%)";
  }

  // Method to show the register form with a delay
  showRegister(time) {
    // Delay the animation to allow time for the transition
    setTimeout(function () {
      // Perform rotation animations on login and register elements
      containerRegister.style.transform = "perspective(600px) rotateY(-360deg)";

      // Control the visibility of the front and back faces of the elements
      containerRegister.style.backfaceVisibility = "visible";

      // Adjust the Z-index to display the register form on top
      register.style.zIndex = "14";
    }, time); // 700 milliseconds delay
  }

  // Method to hide the register form with a delay
  hideRegister(time) {
    setTimeout(function () {
      containerRegister.style.transform = "perspective(600px) rotateY(-180deg)";
      containerRegister.style.backfaceVisibility = "hidden";
      register.style.zIndex = "13";
    }, time); // 700 milliseconds delay
  }

  // Name validation function
  validateName() {
    // Get the value of the name input and remove leading/trailing whitespace
    const name = nameRegister.value.trim();
    if (name === "") {
      // If the name is empty, show an error message
      alert("Name field is required");
      nameRegister.style.border = "3px solid #8B0000";
      return false; // Validation fails
    }
    // Clear any previous error messages
    nameRegister.style.border = "3px solid transparent";

    return true; // Validation passes
  }

  // Email validation function
  validateEmail() {
    // Get the value of the email input and remove leading/trailing whitespace
    const email = emailRegister.value.trim();
    // Regular expression pattern to check for a valid email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      // If email doesn't match the pattern, show an error message
      alert("Please enter a valid email");
      emailRegister.style.border = "3px solid #8B0000";

      return false; // Validation fails
    }
    // Clear any previous error messages
    emailRegister.style.border = "3px solid transparent";
    return true; // Validation passes
  }

  // Password validation function
  validatePassword() {
    // Get the value of the password input and remove leading/trailing whitespace
    const password = passwordRegister.value.trim();
    if (password.length < 6) {
      // If password is too short, show an error message
      alert("Password must be at least 6 characters");
      passwordRegister.style.border = "3px solid #8B0000";

      return false; // Validation fails
    }
    // Clear any previous error messages
    passwordRegister.style.border = "3px solid transparent";
    return true; // Validation passes
  }

  // Function to make the AJAX request
  makeAjaxRequestRegister(url, data) {
    // Make the request using the Fetch API
    fetch(url, {
      method: "POST", // HTTP POST method to send data
      headers: {
        "Content-Type": "application/json" // Indicate that you're sending JSON
      },
      body: JSON.stringify(data) // Convert the JSON object to a JSON string and send it
    })
      .then(response => {
        if (response.ok) {
          return response.text(); // or response.json() if you expect a JSON response
        }
        throw new Error("Network error.");
      })
      .then(data => {
        alert(data);
       data = JSON.parse(data);

        if (data["message"] == 1) {
          alert('Successful registration. We welcome you to our community');
          loginClass.showLogin(700);
          registerClass.hideRegister(700);
        }
        else if  (data["message"] == -1) {
          alert('Successful registration. We welcome you to our community');
          loginClass.showLogin(0);
          registerClass.hideRegister(0);
        }
        else if  (data["message"] == 0) {
        //  alert('No successful registration. The user already exists');
        }
        else {
          alert('An error has occurred. Please try again');
        }
        // The code inside this function will run when the request is complete
        // Hide the register form with a sliding animation
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
}
// Get DOM elements for the register
const openRegisterFromLogin = document.getElementById("openRegisterFromLogin");
const closeRegister = document.getElementById("closeRegister");
const containerRegister = document.getElementById("containerRegister");
const register = document.getElementById("register");

const nameRegister = document.getElementById("nameRegister");
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRegister");

const registerWithGoogle1 = document.getElementById("registerWithGoogle1");
const registerWithFacebook1 = document.getElementById("registerWithFacebook1");
const registerWithapple1 = document.getElementById("registerWithapple1");



// Set the initial position of the "register" element
let closeRegisterSide = "left";

// Create an instance of the Register class
const registerClass = new Register();
