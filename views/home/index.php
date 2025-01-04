<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Include Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

  <title>Lanyards for you</title>

  <!-- Add the CSS file -->
  <link rel="stylesheet" type="text/css" href="../assets/css/home/style.css">
  <link rel="stylesheet" href="../assets/css/home/sectons/1-slider.css">
  <link rel="stylesheet" href="../assets/css/home/sectons/2-choose-create-lanyard.css">
  <link rel="stylesheet" href="../assets/css/home/sectons/3-materials.css">


  <link rel="stylesheet" href="../assets/css/global/login.css">
  <link rel="stylesheet" href="../assets/css/global/register.css">


</head>
<body>
  <section>
    <!-- Background section -->
    <div class="background">

      <!-- Container for content -->
      <div class="container" id="dad-customize-lanyard">

        <!-- Content section -->
        <div class="content" >
          <?php include "../../views/global/customize-lanyard/customize-lanyard.php" ?>


          <!-- Include the menu component -->
          <?php include "../../views/global/menu.php" ?>
          <div class="bgLanyards">

          <!-- Include the slider component for the index page -->
          <?php include "../../views/home/sections/1-slider.php" ?>

            <?php include "../../views/home/sections/2-choose-create-lanyard.php" ?>

            <?php include "../../views/home/sections/3-materials.php" ?>
          </div>



        </div>

        <!-- Include the login component -->
        <?php include "../../views/global/login.php" ?>

        <!-- Include the register component -->
        <?php include "../../views/global/register.php" ?>

      </div>
    </div>
  </section>

  <!-- Add the JS file -->
  <script src="../assets/js/global/login.js"></script>
  <script src="../assets/js/home/app.js"></script>
  <script src="../assets/js/home/sectons/1-slider.js"></script>
  <script src="../assets/js/home/sectons/2-choose-create-lanyard.js"></script>
  <script src="../assets/js/home/sectons/3-materials.js"></script>
</body>
</html>
