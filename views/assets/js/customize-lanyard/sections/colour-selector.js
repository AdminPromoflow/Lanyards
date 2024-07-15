class ColourSelectorClass {
  constructor() {
    this.colourSelectorOne = "black";
    this.colourSelectorTwo = "white";




    const containerCoxesColourSelector = document.querySelectorAll(".container_boxes_colour_selector");
    const inputColourSelector = document.querySelectorAll(".input_colour_selector");
    const previewColourSelector = document.querySelectorAll(".preview-colour-selector");




    for (let i = 0; i < inputColourSelector.length; i++) {
      inputColourSelector[i].addEventListener("change", function(event){
        containerCoxesColourSelector[i].style.border = "2px solid white";


        const selectedColor = event.target.value;
        previewColourSelector[i].style.background = `${selectedColor}`;


        if (i == 0) {
        //  alert(i);
          colourSelectorClass.setColourSelectorOne(`${selectedColor}`);
        }
        else if (i == 1) {
        //  alert(i);
          colourSelectorClass.setColourSelectorTwo(`${selectedColor}`);
        }
      })
    }

  }



  showColourSelector(){

    var numberColourSelected = colourClass.getColourSelected();

    const showColourSelectorTwo = document.querySelectorAll(".showColourSelectorTwo");

    if (numberColourSelected == "one-colour") {
      for (let i = 0; i < showColourSelectorTwo.length; i++) {
        showColourSelectorTwo[i].style.display = "none";
      }
    }
    else {
      for (let i = 0; i < showColourSelectorTwo.length; i++) {
        showColourSelectorTwo[i].style.display = "block";
      }
    }
  }
  // Setter method for the colourSelected property
  setColourSelectorOne(value) {
      this.colourSelectorOne = value;
  }
  // Getter method for the colourSelected property
  getColourSelectorOne() {
      return this.colourSelectorOne;
  }
  setColourSelectorTwo(value) {
      this.colourSelectorTwo = value;
  }

  // Getter method for the colourSelected property
  getColourSelectorTwo() {
      return this.colourSelectorTwo;
  }

  createColourSelector(){
    containersBoxesColour.innerHTML = "";
    var sidePrintedSelected = sidePrintedClass.getSidePrintedSelected();

    if (sidePrintedSelected == "one-side") {
      containersBoxesColour.innerHTML +=
      `<div class="container_boxes_colour" onclick='colourSelectorClass.searchDataColourSelected("one-colour", "0");'>
        <h4 class="dataColour">one-colour</h4>
        <h3 class="priceDataColour">£0.0 per unit</h3>
      </div>
      <div class="container_boxes_colour" onclick='colourSelectorClass.searchDataColourSelected("two-colour", "1");'>
        <h4 class="dataColour">two-colour</h4>
        <h3 class="priceDataColour">£0.2 per unit</h3>
      </div>`;
      ;

    }
    else if (sidePrintedSelected == "two-side") {
      containersBoxesColour.innerHTML +=
      `<div class="container_boxes_colour" onclick='colourSelectorClass.searchDataColourSelected("full-colour", "0");'>
        <h4 class="dataColour">full-colour</h4>
        <h3 class="priceDataColour">£0 per unit</h3>
      </div>`;
      ;
    }
  }

  searchDataColourSelector(index){


  //  this.setColourSelected(coloursQuantity);
    this.showSelectedColourSelector(index);

  //  previewColourClass.showSelectedPreviewtColour();
  }

  showSelectedColourSelector(index) {
    // Get the selected colour value

    // Select all elements with the class "container_boxes_colour"




        // Set the border of the matching element to "2px solid white"

}

  getPriceClipSelected(index){
  const priceDataColour = document.querySelectorAll(".priceDataColour");
  for (var i = 0; i < priceDataColour.length; i++) {

    if (i == index) {

      let text = priceDataColour[i].innerHTML+"";
      let number = +text.match(/-?\d+\.\d+|\d+/); // Finds the first number (float or integer), which can be negative.
      if (number >= 0) {

       let lanyardType = oneTwoEndsClass.getTypeLanyardSelected() + "";

          let result = number.toFixed(2);

          priceClass.setPriceColour(result); // Displays the positive float number with two decimals.
          priceClass.changePricePerLanyard();
      } else {
        console.log("The number clip is negative or no numbers were found. Error: (clip.js line 58)");
      }
    }
  }
}












}


const containersBoxesColour2 = document.getElementById("containers_boxes_colour");
const colourSelectorClass = new ColourSelectorClass();
