class ArtworkPreviewClass {
  constructor() {

  }
  showHidePreviewArtwork(active){
    if (active) {
      previewArtwork.style.display = "flex";
    }
    else {
      previewArtwork.style.display = "none";
    }
  }
  uploadArtwork(image){
    alert(image);
    for (var i = 0; i < drawArtworkOsNormal10mm.length; i++) {
      drawArtworkOsNormal10mm[i].style.backgroundImage = 'url("' + image + '")';

    }

  }

}

const drawArtworkOsNormal10mm = document.querySelectorAll(".draw-artwork-os-normal-10mm")
const previewArtwork = document.getElementById("previewArtwork");
const artworkPreviewClass = new ArtworkPreviewClass();
