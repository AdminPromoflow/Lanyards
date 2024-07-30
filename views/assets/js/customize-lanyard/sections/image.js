class ImageClass {
    constructor() {
        const imageInput = document.getElementById('imageUpload');

        const imageContainers = document.querySelectorAll('.imageContent');

        // Add an event listener to the input file element
        imageInput.addEventListener('change', function(event) {
          const file = event.target.files[0];
          if (file) {
              const reader = new FileReader();

              reader.onload = function(e) {
                  const imageUrl = e.target.result;
                  for (var i = 0; i < imageContainers.length; i++) {
                    imageContainers[i].style.backgroundImage = "../../../../../../views/assets/img/global/customize-lanyard/sections/attachment/quick-release-metal.png";
                  }
                  
              };

              reader.readAsDataURL(file);
          }
        });
    }
}

// Create an instance of ImageClass
const imageClass = new ImageClass();
