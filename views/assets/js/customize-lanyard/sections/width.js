class Width {
  constructor(){
    this.widthSelected = "10mm";
    var jsonWidth = {};
  }
  setWidthSelected(value) {
    this.widthSelected = value;
  }

  getWidthSelected() {
    return this.widthSelected;
  }
  setJsonWidth(jsonWidth) {
    this.jsonWidth = jsonWidth;
  }
  getJsonWidth() {
   return this.jsonWidth;
 }

  createWidth(data, index){

    containersBoxesWidth.innerHTML +=
        '<div class="container_boxes_width"   onclick="widthClass.searchDataWidthSelected(\'' + data['width']  + '\', \' '+ index +'  \');">'+
          '<img src="../../'+data["imgLink"]+'" alt="">'+
          '<h4 class="dataWidth">'+data["width"]+'</h4>'+
          '<h3 class="priceDataWidth">+£0 per unit</h3>'+
        '</div>'
    ;
  }

  selectWidth(){
    var data = this.getJsonWidth();
    // Clean the width options
    widthClass.cleanWidth();

    // Iterate through the allWidth and create width elements
    for (var i = 0; i < data.length; i++) {
      widthClass.createWidth(data[i], i);
    }

    // Update the price based on the width
    widthClass.updatePriceWidth();

    // Show the selected width
    widthClass.showSelectedWidth();

  }

  searchDataWidthSelected(width, index) {

    // Set the selected material.
    this.setWidthSelected(width);

    //artworkPreviewClass.changeAllSettingsWidth();

    previewLanyardType.showSelectedPreviewtTemplate();

    this.showSelectedWidth();

    const priceDataWidth = document.querySelectorAll(".priceDataWidth");

    for (var i = 0; i < priceDataWidth.length; i++) {
      if (i == index) {

        let text = priceDataWidth[i].innerHTML+"";
        let number = +text.match(/-?\d+\.\d+|\d+/); // Finds the first number (float or integer), which can be negative.

      //  alert(number);
        if (number >= 0) {
        //  alert("hi, I just enter in if");
            let result = number.toFixed(2);
            priceClass.setPriceWidth(result); // Displays the positive float number with two decimals.
            priceClass.changePricePerLanyard();
        } else {
          throw new Error("The number width is negative or no numbers were found.");
          //alert("hi, I just enter in else too");
        }
      }
    }

    sidePrintedClass.cleanSidePrinted();

    // Draw SidePrinted available:
    let sidePrintedAvailable = sidePrintedClass.getDataSidePrintedAvailable();

    for (var i = 0; i < sidePrintedAvailable.length; i++) {
      sidePrintedClass.drawSidePrintedAvailable(sidePrintedAvailable[i], i);
    }

    sidePrintedClass.updatePriceSidePrinted();
  //  artworkClass.changeWidthRightPanel();

  }

  updatePriceWidth() {
    // Get the JSON data for the lanyards
    var json = customizeLanyard.getJsonLanyards();

    // Get the selected values for material, side printed, color, and amount
    var materialSelected = material.getMaterialSelected();
    var sidePrintedSelected = sidePrintedClass.getSidePrintedSelected();
    var noColourSelected = colourClass.getColourSelected();
    var amountSelected = priceClass.getAmountSelected();

    let priceDataWidthResult = [];
    let equalsSidePrinted = false; // Initialize equalsSidePrinted variable
    let equalsNoColour = false; // Initialize equalsNoColour variable

    // Iterate through the JSON data
    for (let i = 0; i < json.length; i++) {
      let material = json[i].materials.material;

      // Check if the selected material matches the current material in the loop
      if (materialSelected == material) {

        // Iterate through the widths of the current material
        for (let j = 0; j < json[i].materials.width.length; j++) {
          let width = json[i].materials.width[j].width;

          // Iterate through the side printed options of the current width
          for (let k = 0; k < json[i].materials.width[j].sidePrinted.length; k++) {
            let sidePrinted = json[i].materials.width[j].sidePrinted[k].noSides;
            equalsSidePrinted = false;

            // Check if the selected side printed matches the current side printed in the loop
            if (sidePrintedSelected == sidePrinted) {
              equalsSidePrinted = true;
            } else {
              sidePrintedSelected = json[i].materials.width[j].sidePrinted[0].noSides;
              if (sidePrintedSelected == sidePrinted) {
                equalsSidePrinted = true;
              }
            }

            // If the side printed matches, proceed to check colors
            if (equalsSidePrinted) {

              // Iterate through the color options of the current side printed
              for (let l = 0; l < json[i].materials.width[j].sidePrinted[k].noColours.length; l++) {
                let noColour = json[i].materials.width[j].sidePrinted[k].noColours[l].noColour;
                equalsNoColour = false;

                // Check if the selected color matches the current color in the loop
                if (noColourSelected == noColour) {
                  equalsNoColour = true;
                } else {
                  noColourSelected = json[i].materials.width[j].sidePrinted[k].noColours[0].noColour;
                  if (noColourSelected == noColour) {
                    equalsNoColour = true;
                  }
                }

                // If the color matches, proceed to check the amount ranges
                if (equalsNoColour) {
                  let maxAmountExceeded = true; // Flag to check if amountSelected exceeds max-amount

                  // Iterate through the amount ranges of the current color
                  for (let m = 0; m < json[i].materials.width[j].sidePrinted[k].noColours[l].amount.length; m++) {
                    let amount = json[i].materials.width[j].sidePrinted[k].noColours[l].amount[m];

                    // Check if the selected amount falls within the current amount range
                    if (amountSelected >= amount['min-amount'] && amountSelected <= amount['max-amount']) {
                      priceDataWidthResult.push(amount.price);
                      maxAmountExceeded = false; // Reset flag as amountSelected is within range
                      break; // Exit the loop once we have found the matching range
                    }
                  }

                  // If amountSelected exceeds max-amount, log the price of the highest range
                  if (maxAmountExceeded) {
                    let highestAmount = json[i].materials.width[j].sidePrinted[k].noColours[l].amount.slice(-1)[0];
                    priceDataWidthResult.push(highestAmount.price);
                  }
                }
              }
            }
          }
        }
      }
    }

    // Get the elements to display the price data
    const priceDataWidth = document.querySelectorAll(".priceDataWidth");
    var totalPriceWidth;

    // Update the price display for each element
    for (var i = 0; i < priceDataWidth.length; i++) {
      totalPriceWidth = priceDataWidthResult[i] - priceDataWidthResult[0];
      priceDataWidth[i].innerHTML = "£" + totalPriceWidth.toFixed(2) + " per unit";
    }
  }


  cleanWidth(){
    containersBoxesWidth.innerHTML = "";
  }

  showSelectedWidth(){

    var width = widthClass.getWidthSelected();

    const containerBoxesWidth = document.querySelectorAll(".container_boxes_width");

    const dataWidth = document.querySelectorAll(".dataWidth");

    var index;

   for (var i = 0; i < dataWidth.length; i++) {

     if (dataWidth[i].textContent == width) {
       index = i;
     }
   }

    for (var i = 0; i < containerBoxesWidth.length; i++) {
      if (index == i) {
        containerBoxesWidth[i].style.border = "2px solid white";
      }
      else {
        containerBoxesWidth[i].style.border = "2px solid transparent";
      }
    }
  }
}

// la siguiente linea se va a eliminar porque se van a crear box-width automaticos
const containerBoxesWidth = document.querySelectorAll(".container_boxes_width");
const containersBoxesWidth = document.getElementById("containers_boxes_width");

const dataWidth = document.querySelectorAll(".dataWidth");
const widthClass = new Width();
