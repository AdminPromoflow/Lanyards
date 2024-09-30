class ArtworkPreviewClass {
  constructor() {
    for (let i = 0; i < boxPreviewArtwork.length; i++) {
      boxPreviewArtwork[i].addEventListener("click", function () {
        artworkClass.borderWhite(i);
        artworkPreviewClass.borderWhite(i);
      })
    }
  }
  showHidePreviewArtwork(active){
    if (active) {
      previewArtwork.style.display = "flex";
    }
    else {
      previewArtwork.style.display = "none";
    }
  }
  uploadArtwork(image,index){

      lanyardArtwork[index].style.backgroundImage = 'url("' + image + '")';

  }
  borderWhite(active){
    for (var i = 0; i < boxPreviewArtwork.length; i++) {
      boxPreviewArtwork[i].style.border ="2px solid transparent";
    }
    boxPreviewArtwork[active].style.border ="2px solid white";
  }
  hideShowOneOrTwoSidesPrinted(){
    var sidePrintedSelected = sidePrintedClass.getSidePrintedSelected();

    if (sidePrintedSelected == "two-side") {
      for (var i = 0; i < previewArtworkBackSide.length; i++) {
         previewArtworkBackSide[i].style.display = "none";
      }
    } else {
      for (var i = 0; i < previewArtworkBackSide.length; i++) {
         previewArtworkBackSide[i].style.display = "flex";
      }
    }
       
  }

}


const boxPreviewArtwork = document.querySelectorAll(".box-previewArtwork");
const lanyardArtwork = document.querySelectorAll(".lanyard-artwork");
const previewArtworkBackSide = document.querySelectorAll(".previewArtworkBackSide");
const drawArtworkOsNormal10mm = document.querySelectorAll(".draw-artwork-os-normal-10mm");
const previewArtwork = document.getElementById("previewArtwork");
const artworkPreviewClass = new ArtworkPreviewClass();
