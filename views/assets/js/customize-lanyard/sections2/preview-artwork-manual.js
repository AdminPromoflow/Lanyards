class PreviewArtworkManualClass {
  constructor() {
    var openBackgroundColour = document.getElementById("open-background-colour");

    openBackgroundColour.addEventListener("click", function(){
      customizeLanyard.openBackgroundColour();
    });
  }
  showArtworkManualPreview(action){
    previewArtworkManualContainer.style.display = action;
  }

  showSelectedPreviewtColour(){
    var artworkManual = colourClass.getColourSelected();
    var description;




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

  showManualArtworkSeleted(){
    const action = artworkManualClass.getArtworkManual();
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
