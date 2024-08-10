class Artwork {
  constructor() {
    for (let i = 0; i < containerBoxesArtwork.length; i++) {
      containerBoxesArtwork[i].addEventListener("click", function (){
        inputImageArtwork[i].click();
      })
    }
    for (let i = 0; i < inputImageArtwork.length; i++) {
      inputImageArtwork[i].addEventListener('change', function(event){
        var file = event.target.files[0]; // Captura el archivo seleccionado

          if (file && file.type.startsWith('image/')) { // Verifica que sea una imagen
              var reader = new FileReader();

              reader.onload = function(e) {
                  var imgSrc = e.target.result; // Obtiene la URL del archivo leído

                    imageArtworkRigthSection[i].style.backgroundImage = 'url("'+imgSrc+'")';

                  // Establece la URL como src de una imagen

              };

              reader.readAsDataURL(file); // Lee el contenido del archivo como una URL
          } else {
              alert('Por favor, selecciona un archivo de imagen.');
          }
      });
    }
  }
  showHideArtwork(active){
    if (active) {
      artworkPHPClass.style.display = "flex";
      sidePrintedClass.getSidePrintedSelected();
      //alert(sidePrintedClass.getSidePrintedSelected());
    }
    else {

    }
  }

}
const imageArtworkRigthSection = document.querySelectorAll(".image_artwork_rigth_section");
const inputImageArtwork = document.querySelectorAll(".input_image_artwork");
const containerBoxesArtwork = document.querySelectorAll(".container_boxes_artwork");
const artworkPHPClass = document.getElementById("artworkPHPClass");
const artworkClass = new Artwork();
