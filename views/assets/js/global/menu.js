class Menu {
  constructor() {
    // Loop through all 'openLogin' buttons and add a click event listener to each
    for (let i = 0; i < openLoginButtons.length; i++) {
      openLoginButtons[i].addEventListener("click", function() {
        // Open the login modal
        loginClass.openLogin();
        // Open the registration modal
        registerClass.openRegister();
      });
    }
      openLogout.addEventListener("click", function(){
        // Prepare the URL and data to check session login status
        const url = "../../controller/users/session-login.php";
        const data = {
          action: "logout" // Action to check if the session is active (login)
        };
        // Make an AJAX request to check if the user is authenticated
        this.makeAjaxRequestUserLogout(url, data);

      })

    // Loop through all 'logout' buttons and add a click event listener to each
    for (let i = 0; i < logoutButtons.length; i++) {
      logoutButtons[i].addEventListener("click", function() {
        const url = "../../controller/users/session-logout.php"; // URL for logout request
        const data = {
          action: "checkSessionLogout" // Data to send with the request
        };
        // Trigger an AJAX request to check session and handle logout (uncomment the line to activate)
        // menuClass.makeAjaxRequestCheckSessionLogout(url, data);
      });
    }

    // Prepare the URL and data to check session login status
    const url = "../../controller/users/session-login.php";
    const data = {
      action: "checkSessionLogin" // Action to check if the session is active (login)
    };
    // Make an AJAX request to check if the user is authenticated
    this.makeAjaxRequestUserAuthenticated(url, data);

    // Add event listeners to handle the mobile menu open/close buttons
    openMenuMobileButton.addEventListener("click", this.openMenuMobile.bind(this));
    closeMenuMobileButton.addEventListener("click", this.closeMenuMobile.bind(this));
    document.addEventListener("click", this.handleClickOutside.bind(this)); // Handle clicks outside the mobile menu
  }

  // Function to make an AJAX request to fetch data only if the user is authenticated
  makeAjaxRequestUserAuthenticated(url, data) {
    // Make a fetch request to the given URL with the specified data
    fetch(url, {
      method: "POST", // Set the request method to POST
      headers: {
        "Content-Type": "application/json" // Set the request content type to JSON
      },
      body: JSON.stringify(data) // Send the data as a JSON string
    })
      .then(response => {
        // Check if the response is okay (HTTP status 200-299), if so, return the response text
        if (response.ok) {
          return response.text();
        }

        // If the response status is 401 (Unauthorized), the user is not logged in
        if (response.status === 401) {
          throw new Error("User not authenticated.");
        }

        // If the response is not okay, throw a general network error
        throw new Error("Network error.");
      })
      .then(data => {
        // Parse the response data as JSON
        data = JSON.parse(data);

        // Show or hide menu items based on login status
        this.showItemsLoginMenu(data["message"]);
      })
      .catch(error => {
        // Handle errors: If the user is not authenticated or another error occurs
        if (error.message === "User not authenticated.") {
          alert("Please log in to access this data."); // Inform the user to log in
        } else {
          console.error("Error:", error); // Log any other errors
        }
      });
  }

  makeAjaxRequestUserLogout(url, data) {
    // Make a fetch request to the given URL with the specified data
    fetch(url, {
      method: "POST", // Set the request method to POST
      headers: {
        "Content-Type": "application/json" // Set the request content type to JSON
      },
      body: JSON.stringify(data) // Send the data as a JSON string
    })
      .then(response => {
        // Check if the response is okay (HTTP status 200-299), if so, return the response text
        if (response.ok) {
          return response.text();
        }

        // If the response status is 401 (Unauthorized), the user is not logged in
        if (response.status === 401) {
          throw new Error("User not authenticated.");
        }

        // If the response is not okay, throw a general network error
        throw new Error("Network error.");
      })
      .then(data => {
        alert(data);
        // Parse the response data as JSON
        data = JSON.parse(data);




      })
      .catch(error => {
        // Handle errors: If the user is not authenticated or another error occurs
        if (error.message === "User not authenticated.") {
          alert("Please log in to access this data."); // Inform the user to log in
        } else {
          console.error("Error:", error); // Log any other errors
        }
      });
  }



  // Function to open the mobile menu
  openMenuMobile() {
    closeMenuMobile.style.display = "block"; // Show the close button
    menuMobile.style.left = "calc(100% - 300px)"; // Slide the mobile menu in from the right
    openMenuMobile.style.display = "none"; // Hide the open button
  }

  // Function to close the mobile menu
  closeMenuMobile() {
    closeMenuMobile.style.display = "none"; // Hide the close button
    menuMobile.style.left = "calc(100%)"; // Slide the mobile menu out of view
    openMenuMobile.style.display = "block"; // Show the open button
  }

  // Function to close the mobile menu if the user clicks outside of it
  handleClickOutside(event) {
    // Check if the clicked element is outside the mobile menu and open button
    if (!openMenuMobile.contains(event.target)) {
      if (!menuMobile.contains(event.target)) {
        this.closeMenuMobile(); // Close the mobile menu
      }
    }
  }

  // Function to make an AJAX request to check the session login status
  makeAjaxRequestCheckSessionLogin(url, data) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Network error.");
      })
      .then(data => {
        data = JSON.parse(data);
        // Show or hide menu items based on login status
        this.showItemsLoginMenu(data["message"]);
      })
      .catch(error => {
        console.error("Error:", error); // Log any errors
      });
  }

  // Function to make an AJAX request to check the session logout status
  makeAjaxRequestCheckSessionLogout(url, data) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Network error.");
      })
      .then(data => {
        data = JSON.parse(data);

        // If logout is successful, hide login items and show logout items
        if (data["message"]) {
          this.showItemsLoginMenu(!data["message"]);
          alert("Come back soon!"); // Show a message after logout
        } else {
          alert("Network error. Trying again"); // Show an error if the logout fails
        }
      })
      .catch(error => {
        console.error("Error:", error); // Log any errors
      });
  }

  // Function to show or hide menu items based on login status
  showItemsLoginMenu(action) {
    if (action) {
      // Hide elements with the class 'showItemsMenuLoginFalse' when the user is logged in
      for (var i = 0; i < showItemsMenuLoginFalse.length; i++) {
        showItemsMenuLoginFalse[i].style.display = "none";
      }
      // Show elements with the class 'showItemsMenuLoginTrue' when the user is logged in
      for (var i = 0; i < showItemsMenuLoginTrue.length; i++) {
        showItemsMenuLoginTrue[i].style.display = "block";
      }
    } else {
      // Show elements with the class 'showItemsMenuLoginFalse' when the user is logged out
      for (var i = 0; i < showItemsMenuLoginFalse.length; i++) {
        showItemsMenuLoginFalse[i].style.display = "block";
      }
      // Hide elements with the class 'showItemsMenuLoginTrue' when the user is logged out
      for (var i = 0; i < showItemsMenuLoginTrue.length; i++) {
        showItemsMenuLoginTrue[i].style.display = "none";
      }
    }
  }
}

// DOM elements related to login, logout, and menu functionality
const openLoginButtons = document.querySelectorAll('.openLogin'); // All login buttons
const logoutButtons = document.querySelectorAll('.logoutButtons'); // All logout buttons
const openMenuMobileButton = document.getElementById("openMenuMobile"); // Mobile menu open button
const closeMenuMobileButton = document.getElementById("closeMenuMobile"); // Mobile menu close button
const openLogout = document.getElementById("openLogout"); // Mobile menu close button
const menuMobile = document.getElementById("menuMobile"); // Mobile menu element

// Elements for showing or hiding based on login status
const showItemsMenuLoginFalse = document.querySelectorAll(".showItemsMenuLoginFalse"); // Items shown when logged out
const showItemsMenuLoginTrue = document.querySelectorAll(".showItemsMenuLoginTrue"); // Items shown when logged in

// Create an instance of the 'Menu' class to initialize the menu
const menuClass = new Menu();
