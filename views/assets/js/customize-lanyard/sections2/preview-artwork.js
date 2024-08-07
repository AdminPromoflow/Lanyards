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

}


const previewArtwork = document.getElementById("previewArtwork");
const artworkPreviewClass = new ArtworkPreviewClass();
