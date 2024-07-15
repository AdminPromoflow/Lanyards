<link rel="stylesheet" href="../../views/assets/css/global/customize-lanyard/sections/background.css">

<section class="backgroundSection section">
  <h2 class="name-section-customize-lanyard">Background</h2>

  <!-- Radio option for selecting preset background color -->
  <input type="radio" class="select-background-colour-option" id="backgroundColourFirstOption" name="option" checked>
  <label for="backgroundColourFirstOption">Select colour of the background:</label>
  <div class="opacity-background-option-first-option opacity-option-background-selected">
  </div>
  <div id="containers_boxes_background" class="containers_boxes_background">
    <div class="container_boxes_background" id="container_boxes_background">
      <!-- Container where dynamic background colors will be appended -->
    </div>
  </div>
  <br>

  <!-- Radio option for customizing background color if not in stock -->
  <input type="radio" class="select-background-colour-option" id="backgroundColourSecondOption" name="option">
  <label for="backgroundColourSecondOption">If your color isn't in stock, customize it for £25 more at checkout:</label>
  <br>
  <div class="opacity-background-option-second-option opacity-option-background-selected">
  </div>
  <input class="select-colour-second-option" id="optionColourBackground" type="color" value="white">

</section>

<script src="../../views/assets/js/customize-lanyard/sections/background.js"></script>
