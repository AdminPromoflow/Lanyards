class ArtworkManualClass {
  constructor() {
    this.artworkManual = "manual";

    containerBoxesArtworkManual[0].style.border = "2px solid white";


    for (let i = 0; i < containerBoxesArtworkManual.length; i++) {
      containerBoxesArtworkManual[i].addEventListener("click", function(event){

        if (i == 0) {
          containerBoxesArtworkManual[0].style.border = "2px solid white";
          containerBoxesArtworkManual[1].style.border = "2px solid transparent";
          artworkManualClass.setArtworkManual("manual");
          previewArtworkManualClass.showManualArtworkSeleted();



        }
        else if (i == 1) {
          containerBoxesArtworkManual[1].style.border = "2px solid white";
          containerBoxesArtworkManual[0].style.border = "2px solid transparent";

          artworkManualClass.setArtworkManual("artwork");
          previewArtworkManualClass.showManualArtworkSeleted();

        }
      });
    }


  }



  showArtworkManual(){

    var numberColourSelected = colourClass.getColourSelected();

    const showArtworkManualTwo = document.querySelectorAll(".showArtworkManual");

    if (numberColourSelected == "one-colour") {
      for (let i = 0; i < showArtworkManualTwo.length; i++) {
        showArtworkManualTwo[i].style.display = "none";
      }
    }
    else {
      for (let i = 0; i < showArtworkManualTwo.length; i++) {
        showArtworkManualTwo[i].style.display = "block";
      }
    }
  }

  setArtworkManual(value) {
      this.artworkManual = value;
  }

  // Getter method for the colourSelected property
  getArtworkManual() {
      return this.artworkManual;
  }

  createArtworkManual(){
    containersBoxesColour.innerHTML = "";
    var sidePrintedSelected = sidePrintedClass.getSidePrintedSelected();

    if (sidePrintedSelected == "one-side") {
      containersBoxesColour.innerHTML +=
      `<div class="container_boxes_colour" onclick='artworkManualClass.searchDataColourSelected("one-colour", "0");'>
        <h4 class="dataColour">one-colour</h4>
        <h3 class="priceDataColour">£0.0 per unit</h3>
      </div>
      <div class="container_boxes_colour" onclick='artworkManualClass.searchDataColourSelected("two-colour", "1");'>
        <h4 class="dataColour">two-colour</h4>
        <h3 class="priceDataColour">£0.2 per unit</h3>
      </div>`;
      ;

    }
    else if (sidePrintedSelected == "two-side") {
      containersBoxesColour.innerHTML +=
      `<div class="container_boxes_colour" onclick='artworkManualClass.searchDataColourSelected("full-colour", "0");'>
        <h4 class="dataColour">full-colour</h4>
        <h3 class="priceDataColour">£0 per unit</h3>
      </div>`;
      ;
    }
  }

  searchDataArtworkManual(index){


  //  this.setColourSelected(coloursQuantity);
    this.showSelectedArtworkManual(index);

  //  previewColourClass.showSelectedPreviewtColour();
  }

  showSelectedArtworkManual(index) {

  }
  showHideArtworkManual(active){
    if (active) {
      artworkManual.style.display = "flex";
    }
    else {
      artworkManual.style.display = "none";
    }
  }
    containerBoxesArtworkManual(){
      var artworkManualActive = artworkManualClass.getArtworkManual();
      if (artworkManualActive == "manual") {
      containerBoxesArtworkManual[0].style.display = "none";
      containerBoxesArtworkManual[1].style.display = "block";
      }
      else {
        containerBoxesArtworkManual[1].style.display = "none";
        containerBoxesArtworkManual[0].style.display = "block";
      }

    }











}

const containerBoxesArtworkManual = document.querySelectorAll(".container_boxes_artwork-manual");

const containersBoxesArtworkManual = document.getElementById("containers_boxes_artwork-manual");
const artworkManual = document.getElementById("artworkManual");
const artworkManualClass = new ArtworkManualClass();
