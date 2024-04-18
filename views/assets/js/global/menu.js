class Menu {
  constructor() {
    for (let i = 0; i < openLoginButtons.length; i++) {
      openLoginButtons[i].addEventListener("click", function() {
        loginClass.openLogin();
        registerClass.openRegister();
      });
    }
    for (let i = 0; i < logoutButtons.length; i++) {
      logoutButtons[i].addEventListener("click", function() {
        const url = "../../controller/users/session-logout.php";
        const data = {
          action: "checkSessionLogout"
        };
        menuClass.makeAjaxRequestCheckSessionLogout(url, data);
      });
    }

    const url = "../../controller/users/session-login.php";
    const data = {
      action: "checkSessionLogin"
    };
    this.makeAjaxRequestCheckSessionLogin(url, data);

    openMenuMobileButton.addEventListener("click", this.openMenuMobile.bind(this));
    closeMenuMobileButton.addEventListener("click", this.closeMenuMobile.bind(this));
    document.addEventListener("click", this.handleClickOutside.bind(this));
  }

  openMenuMobile() {
    closeMenuMobile.style.display = "block";
    menuMobile.style.left = "calc(100% - 300px)";
    openMenuMobile.style.display = "none";
  }

  closeMenuMobile() {
    closeMenuMobile.style.display = "none";
    menuMobile.style.left = "calc(100%)";
    openMenuMobile.style.display = "block";
  }

  handleClickOutside(event) {
    if (!openMenuMobile.contains(event.target)) {
      if (!menuMobile.contains(event.target)) {
        this.closeMenuMobile();
      }
    }
  }

  makeAjaxRequestCheckSessionLogin(url, data){
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
        this.showItemsLoginMenu(data["message"]);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  makeAjaxRequestCheckSessionLogout(url, data){
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

        if (data["message"]) {
          this.showItemsLoginMenu(!data["message"]);
          alert("Come back soon!");
        }
        else {
          alert("Network error. Trying again");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  showItemsLoginMenu(action){
    if (action) {
      for (var i = 0; i < showItemsMenuLoginFalse.length; i++) {
        showItemsMenuLoginFalse[i].style.display = "none";
      }
      for (var i = 0; i < showItemsMenuLoginTrue.length; i++) {
        showItemsMenuLoginTrue[i].style.display = "block";
      }
    }
    else {
      for (var i = 0; i < showItemsMenuLoginFalse.length; i++) {
        showItemsMenuLoginFalse[i].style.display = "block";
      }
      for (var i = 0; i < showItemsMenuLoginTrue.length; i++) {
        showItemsMenuLoginTrue[i].style.display = "none";
      }
    }
  }
}

const openLoginButtons = document.querySelectorAll('.openLogin');
const logoutButtons = document.querySelectorAll('.logoutButtons');
const openMenuMobileButton = document.getElementById("openMenuMobile");
const closeMenuMobileButton = document.getElementById("closeMenuMobile");
const menuMobile = document.getElementById("menuMobile");

const showItemsMenuLoginFalse = document.querySelectorAll(".showItemsMenuLoginFalse");
const showItemsMenuLoginTrue = document.querySelectorAll(".showItemsMenuLoginTrue");

const menuClass = new Menu();
