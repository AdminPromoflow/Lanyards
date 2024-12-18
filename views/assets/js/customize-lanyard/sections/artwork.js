class Artwork {
  constructor() {
    for (let i = 0; i < clickUploadArtwork.length; i++) {
      clickUploadArtwork[i].addEventListener("click", function (){
        inputImageArtwork[i].click();
      //  alert(i);
      })
    }
    for (let i = 0; i < containerBoxesArtwork.length; i++) {
      containerBoxesArtwork[i].addEventListener("click", function () {
        artworkClass.borderWhite(i);
        artworkPreviewClass.borderWhite(i);
      })
    }
    for (let i = 0; i < inputImageArtwork.length; i++) {
    inputImageArtwork[i].addEventListener('change', function(event) {
      //alert("hola");
        //console.log('Evento change disparado');
        //alert(i);
        var file = event.target.files[0]; // Captura el archivo seleccionado
        console.log('Archivo seleccionado:', file);

        if (file && file.type.startsWith('image/')) { // Verifica que sea una imagen
            var reader = new FileReader();

            reader.onload = function(e) {
                console.log('Archivo leído:', e.target.result);
                var img = new Image();
                img.src = e.target.result;

                img.onload = function() {

                //  alert(img.src);
                    console.log('Dimensiones de la imagen:', img.width, img.height);
                    // Validar dimensiones mínimas de la imagen
                    //if (img.width >= 1287 && img.height >= 54) {
                      if (img.width >= 12 && img.height >= 4) {

                        // Si las dimensiones son correctas o mayores, establecer la imagen como fondo

                        imageArtworkRigthSection[i].style.backgroundImage = 'url("' + img.src + '")';

                        artworkPreviewClass.uploadArtwork(img.src, i);

                      artworkPreviewClassFinal.assignArtworkToLanyard(img.src, i);
                    } else {
                        alert('La imagen debe tener al menos 1287px de ancho y 54px de alto.');
                    }
                };
            };

            reader.readAsDataURL(file); // Lee el contenido del archivo como una URL
        } else {
            alert('Por favor, selecciona un archivo de imagen.');
        }
    });
}

  this.changeWidthRightPanel();

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
  changeWidthRightPanel() {
    var widthSelected = widthClass.getWidthSelected();
    const imageArtworkRigthSection = document.querySelectorAll(".image_artwork_rigth_section");

    var width;

    // Determine the width based on the selected width
    switch (widthSelected) {
      case "10mm":
        width = "5px";
        break;
      case "15mm":
        width = "7.5px";
        break;
      case "20mm":
        width = "10px";
        break;
      case "25mm":
        width = "12.5px";
        break;
      case "30mm":
        width = "15px";
        break;
      default:
        width = "15px"; // Default value if no match
    }

    // Apply the calculated width and a fixed height of 2px to all elements
    for (var i = 0; i < imageArtworkRigthSection.length; i++) {
      imageArtworkRigthSection[i].style.height = width;

    }
  }
  borderWhite(active){
    for (var i = 0; i < containerBoxesArtwork.length; i++) {
      containerBoxesArtwork[i].style.border ="2px solid transparent";
    }
    containerBoxesArtwork[active].style.border ="2px solid white";
  }
 hideShowOneOrTwoSidesPrinted(){

   var sidePrintedDisplay;
   if (sidePrintedClass.getSidePrintedSelected() == "one-side") {
      sidePrintedDisplay = "flex";
   }
   else {
     sidePrintedDisplay = "none";
   }
   for (var i = 0; i < artworkBackSide.length; i++) {
     artworkBackSide[i].style.display = sidePrintedDisplay;
   }
 }

}
const imageArtworkRigthSection = document.querySelectorAll(".image_artwork_rigth_section");
const inputImageArtwork = document.querySelectorAll(".input_image_artwork");
const containerBoxesArtwork = document.querySelectorAll(".container_boxes_artwork");
const artworkPHPClass = document.getElementById("artworkPHPClass");
const clickUploadArtwork = document.querySelectorAll(".click_upload_artwork");
const artworkBackSide = document.querySelectorAll(".artworkBackSide");

const artworkClass = new Artwork();
