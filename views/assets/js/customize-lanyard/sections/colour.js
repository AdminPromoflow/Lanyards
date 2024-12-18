class ColourClass {
  constructor() {
    this.colourSelected = "one-colour";
  }

  // Setter method for the colourSelected property
  setColourSelected(value) {
      this.colourSelected = value;
  }

  // Getter method for the colourSelected property
  getColourSelected() {  
      return this.colourSelected;
  }
  createColour(){
    containersBoxesColour.innerHTML = "";
    var sidePrintedSelected = sidePrintedClass.getSidePrintedSelected();

    if (sidePrintedSelected == "one-side") {
      containersBoxesColour.innerHTML +=
      `<div class="container_boxes_colour" onclick='colourClass.searchDataColourSelected("one-colour", "0");'>
        <h4 class="dataColour">one-colour</h4>
        <h3 class="priceDataColour">£0.0 per unit</h3>
      </div>
      <div class="container_boxes_colour" onclick='colourClass.searchDataColourSelected("two-colour", "1");'>
        <h4 class="dataColour">two-colour</h4>
        <h3 class="priceDataColour">£0.2 per unit</h3>
      </div>`;
      ;

    }
    else if (sidePrintedSelected == "two-side") {
      containersBoxesColour.innerHTML +=
      `<div class="container_boxes_colour" onclick='colourClass.searchDataColourSelected("full-colour", "0");'>
        <h4 class="dataColour">full-colour</h4>
        <h3 class="priceDataColour">£0 per unit</h3>
      </div>`;
      ;
    }
  }

  searchDataColourSelected(coloursQuantity, index){
    this.setColourSelected(coloursQuantity);
    this.showSelectedColour();

    previewColourClass.showSelectedPreviewtColour();
    this.getPriceClipSelected(index);


    colourSelectorClass.showColourSelector();

  }

  showSelectedColour() {
    // Get the selected colour value
    var data = colourClass.getColourSelected();

    // Select all elements with the class "container_boxes_colour"
    const containerBoxesColour = document.querySelectorAll(".container_boxes_colour");
    // Select all elements with the class "data_colour"
    const dataColour = document.querySelectorAll(".dataColour");

    // Initialize index variable to -1
    var index = -1;
    // Iterate through all elements in dataColour
    for (var i = 0; i < dataColour.length; i++) {
      // If the text content of the current element matches the selected data
      if (dataColour[i].textContent == data) {
        // Set the index to the current position
        index = i;
        // Exit the loop once the matching element is found
        break;
      }
    }

    // Iterate through all elements in containerBoxesColour
    for (var i = 0; i < containerBoxesColour.length; i++) {
      // If the current index matches the found index
      if (index == i) {
        // Set the border of the matching element to "2px solid white"
        containerBoxesColour[i].style.border = "2px solid white";
      } else {
        // Set the border of non-matching elements to "2px solid transparent"
        containerBoxesColour[i].style.border = "2px solid transparent";
      }
    }
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


const containersBoxesColour = document.getElementById("containers_boxes_colour");
const colourClass = new ColourClass();
