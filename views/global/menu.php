<!-- Link to the CSS file for styling the menu -->
<link rel="stylesheet" href="../assets/css/global/menu.css">

<!-- Define a section for the menu -->
<section class="menu">

  <!-- Logo container with an image -->
  <div class="logo">
    <img src="../assets/img/global/menu/Logo.png" alt=""> <!-- Displays the logo image -->
  </div>

  <!-- Container for the main menu items -->
  <div class="containerItems">
    <h3 class="transparentLeftLine">Home </h3> <!-- Home menu item -->
    <h3 class="showItemsMenuLoginTrue">My Lanyards</h3> <!-- My Lanyards, visible when logged in -->
    <h3>About us</h3> <!-- About Us menu item -->
    <h3>Contact us</h3> <!-- Contact Us menu item -->
  </div>

  <!-- Container for secondary menu items -->
  <div class="containerItems2">
    <img class="showItemsMenuLoginTrue" src="../assets/img/global/menu/checkout.png" alt=""> <!-- Checkout icon, visible when logged in -->
    <h3 class="showItemsMenuLoginFalse">Register</h3> <!-- Register, visible when logged out -->
    <h3 class="openLogin showItemsMenuLoginFalse">Login</h3> <!-- Login button, visible when logged out -->
    <h3 id="openLogout" class="logoutButtons showItemsMenuLoginTrue">Logout</h3> <!-- Logout button, visible when logged in -->
  </div>

  <!-- Container for mobile menu icons -->
  <div class="containerItems3">
    <img id="openMenuMobile" src="../assets/img/global/menu/menu.png" alt=""> <!-- Menu icon for opening the mobile menu -->
    <img id="closeMenuMobile" src="../assets/img/global/menu/close.png" alt=""> <!-- Close icon for closing the mobile menu -->
  </div>

  <!-- Mobile menu section with duplicated menu items for small screen navigation -->
  <section id="menuMobile" class="menuMobile">
    <h3>Home </h3> <!-- Home menu item for mobile view -->
    <h3 class="showItemsMenuLoginTrue">My Lanyards </h3> <!-- My Lanyards menu item, visible when logged in, for mobile view -->
    <h3>About us </h3> <!-- About Us menu item for mobile view -->
    <h3>Contact us</h3> <!-- Contact Us menu item for mobile view -->
    <h3 class="openLogin showItemsMenuLoginFalse">Login</h3> <!-- Login button, visible when logged out, for mobile view -->
    <h3 class="transparentBottonLine showItemsMenuLoginTrue">Checkout </h3> <!-- Checkout option, visible when logged in, for mobile view -->
    <h3 class="showItemsMenuLoginTrue">Logout</h3> <!-- Logout button, visible when logged in, for mobile view -->
  </section>

</section>

<!-- Link to the JavaScript file for handling menu behavior and interactions -->
<script src="../assets/js/global/menu.js"></script>
