class PreviewArtworkManualClass {
  constructor() {

  }
  showArtworkManualPreview(action){
    previewArtworkManualContainer.style.display = action;
  }

  showSelectedPreviewtColour(){
    var artworkManual = colourClass.getColourSelected();
    var description;

    if (artworkManual == "one-colour") {
        description = " Professional lanyard with a background color and one additional color, perfect for events, conferences, and daily use.";
    }
    else if (artworkManual == "two-colour") {
      description = "Stylish lanyard with a background color and two additional colors for a vibrant, dynamic look, perfect for brand visibility and events.";
    }
    else if (artworkManual == "full-colour") {
      description = "Vibrant full-colour lanyard featuring multiple hues for a bold and eye-catching design. Great for promotional events, showcasing logos, and ensuring maximum visibility with a creative, colourful touch.";
    }


    previewColourContainer.innerHTML = "";

    previewColourContainer.innerHTML +=
    '<h3>'+artworkManual+'</h3>' +

    '<div class="img-preview-material">' +
      '<img src="../../views/assets/img/global/customize-lanyard/sections2/colour/'+artworkManual+'.png" alt="">' +
    '</div>' +
    '<div class="description-preview-material">' +
      '<p>' + description + '</p>' +
    '</div>'
    ;
  }

  showManualArtworkSeleted(action){
    if (action == "artwork") {
      previewArtworkContainer.style.display = "flex";
      previewManualContainer.style.display = "none";
    }
    else if(action == "manual"){
      previewArtworkContainer.style.display = "none";
      previewManualContainer.style.display = "flex";
    }
  }
}
const previewManualContainer = document.getElementById("preview-manual-container");
const previewArtworkContainer = document.getElementById("preview-artwork-container");



const previewArtworkManualContainer = document.getElementById("preview-artwork-manual-container");
const previewArtworkManualClass = new PreviewArtworkManualClass();
