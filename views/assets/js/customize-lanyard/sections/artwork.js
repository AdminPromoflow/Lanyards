class Artwork {
  constructor() {

  }
  showHideArtwork(active){
    if (active) {
      artworkPHPClass.style.display = "flex";
      sidePrintedClass.getSidePrintedSelected();
      alert(sidePrintedClass.getSidePrintedSelected());
    }
    else {

    }
  }

}
const artworkPHPClass = document.getElementById("artworkPHPClass");
const artworkClass = new Artwork();
