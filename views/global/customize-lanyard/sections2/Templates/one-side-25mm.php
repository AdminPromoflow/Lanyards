<!-- Main container for the lanyard preview section with ID "one-side-25mm" and class "one-side-25mm" -->
<div id="one-side-25mm" class="one-side-25mm">

  <!-- Inner container for the one-sided 25mm lanyard design -->
  <div class="container-one-side-25mm">

    <!-- Section that contains the drawing of the lanyard -->
    <div class="draw-lanyard">

      <!-- Standard design for a one-sided 25mm lanyard -->
      <div class="draw-lanyard-normal standar">

        <!-- Back clip area with two images showing the neck clip -->
        <div class="back-clip-one-end-25mm">
          <img src="../../views/assets/img/global/customize-lanyard/sections2/templates/clip-neck-1.png" alt="">
          <img src="../../views/assets/img/global/customize-lanyard/sections2/templates/clip-neck-2.png" alt="">
        </div>

        <!-- Left side of the lanyard with a background color and text/artwork sections -->
        <div class="one-end-normal-left-25mm backgroundColour">
          <!-- Container for text on the left side -->
          <div class="draw-os-normal-left-25mm text-container draw-os-25mm"></div>
          <!-- Container for artwork on the left side -->
          <div class="artwork-os-normal-left-25mm" id="artwork-os-normal-left-25mm"></div>
        </div>

        <!-- Right side of the lanyard with a background color and text/artwork sections -->
        <div class="one-end-normal-right-25mm backgroundColour">
          <!-- Container for text on the right side -->
          <div class="draw-os-normal-right-25mm text-container draw-os-25mm"></div>
          <!-- Container for artwork on the right side -->
          <div class="artwork-os-normal-right-25mm" id="artwork-os-normal-right-25mm"></div>
        </div>

        <!-- Container for a two-sided printed version of the 25mm lanyard -->
        <div class="container-one-side-25mm twoSidePrinted standar">

          <!-- Back clip area for two-sided lanyard with two images -->
          <div class="back-clip-one-end-25mm">
            <img src="../../views/assets/img/global/customize-lanyard/sections2/templates/clip-neck-1.png" alt="">
            <img src="../../views/assets/img/global/customize-lanyard/sections2/templates/clip-neck-2.png" alt="">
          </div>

          <!-- Left side of the two-sided lanyard with background color -->
          <div class="one-end-normal-left-25mm backgroundColour">
            <!-- Container for text on the left side -->
            <div class="draw-os-normal-left-25mm text-container draw-os-25mm"></div>
            <!-- Container for additional artwork on the left side for two-sided print -->
            <div class="artwork-os-normal-left-25mm-tp" id="artwork-os-normal-left-25mm-tp"></div>
          </div>

          <!-- Right side of the two-sided lanyard with background color -->
          <div class="one-end-normal-right-25mm backgroundColour">
            <!-- Container for text on the right side -->
            <div class="draw-os-normal-right-25mm text-container draw-os-25mm"></div>
            <!-- Container for additional artwork on the right side for two-sided print -->
            <div class="artwork-os-normal-right-25mm-tp" id="artwork-os-normal-right-25mm-tp"></div>
          </div>
        </div>
      </div>

      <!-- Include PHP file for additional lanyard template with attachment -->
      <?php include "../../views/global/customize-lanyard/sections2/Templates/one-side-with-attachment-25mm.php" ?>
    </div>

    <!-- Attachment section outside the main lanyard design -->
    <div class="attachmentThing os-attachment-25">
      <!-- Image showing a quick-release attachment -->
      <img src="../../views/assets/img/global/customize-lanyard/sections/attachment/quick-release-black.png" alt="">
      <!-- Image for a specific lanyard attachment -->
      <img class="attachment" src="../../views/assets/img/global/customize-lanyard/sections2/templates/25-one-end-attachment.png" alt="">
    </div>

    <!-- Clip section for the lanyard -->
    <div class="os25-clip img-clip os25-clip-25mm">
      <!-- Image showing the clip used for the 25mm lanyard -->
      <img src="../../views/assets/img/global/customize-lanyard/sections2/clips/25-one-end-clip.png" alt="">
    </div>
  </div>
</div>
