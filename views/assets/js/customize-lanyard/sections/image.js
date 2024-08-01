class ImageClass {
    constructor() {
        const imageInput = document.getElementById('imageUpload');

        const imageContainers = document.querySelectorAll('.imageContent');

         this.linkImage = "";
         this.sizeImage = "medium";
         this.spacingBetweenImage = "normal";
         this.rotationImage = "0deg";

        // Add an event listener to the input file element
        imageInput.addEventListener('change', function(event){
        //  const imageContainers = customizeLanyard.getLanyardsActive();

          const file = event.target.files[0]; // Captura el archivo seleccionado

            if (file && file.type.startsWith('image/')) { // Verifica que sea una imagen
                const reader = new FileReader();

                reader.onload = function(e) {
                    const imgSrc = e.target.result; // Obtiene la URL del archivo leído
                    alert(imageContainers.length); // Muestra la URL en un alert
                    for (var i = 0; i < imageContainers.length; i++) {
                      imageContainers[i].style.backgroundImage = 'url("'+imgSrc+'")';

                    }
                    // Establece la URL como src de una imagen

                };

                reader.readAsDataURL(file); // Lee el contenido del archivo como una URL
            } else {
                alert('Por favor, selecciona un archivo de imagen.');
            }



        });
    }


        // Link image
     getLinkImage() {
       return this.linkImage;
     }

     setLinkImage(value) {
       this.linkImage = value;
     }

     // Size image
     getSizeImage() {
       return this.sizeImage;
     }

     setSizeImage(value) {
       this.sizeImage = value;
     }

     // Spacing between image
     getSpacingBetweenImage() {
       return this.spacingBetweenImage;
     }

     setSpacingBetweenImage(value) {
       this.spacingBetweenImage = value;
     }

     // Rotation image
     getRotationImage() {
       return this.rotationImage;
     }

     setRotationImage(value) {
       this.rotationImage = value;
     }


}

// Create an instance of ImageClass
const imageClass = new ImageClass();
