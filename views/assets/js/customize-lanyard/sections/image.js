class ImageClass {
    constructor() {
        const imageInput = document.getElementById('imageUpload');

        const imageContainers = document.querySelectorAll('.imageContent');

        // Add an event listener to the input file element
        imageInput.addEventListener('change', function(event){


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
}

// Create an instance of ImageClass
const imageClass = new ImageClass();
