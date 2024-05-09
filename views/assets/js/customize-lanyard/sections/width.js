class Width {
  constructor(){
    this.widthSelected = "20mm";

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

  searchDataWidthSelected(width, index) {

    // Set the selected material.
    this.setWidthSelected(width);
    // Set the amount selected.
    priceClass.setAmountSelected(priceClass.getAmountSelected());

    previewLanyardType.showSelectedPreviewtTemplate();
    this.showSelectedWidth();

    const priceDataWidth = document.querySelectorAll(".priceDataWidth");

    for (var i = 0; i < priceDataWidth.length; i++) {
      if (i == index) {

        let text = priceDataWidth[i].innerHTML+"";
        let number = text.match(/-?\d+\.\d+|\d+/); // Finds the first number (float or integer), which can be negative.

        if (number && parseFloat(number[0]) >= 0) {
            let result = parseFloat(number[0]).toFixed(2);
            priceClass.setPriceWidth(result); // Displays the positive float number with two decimals.
            priceClass.changePricePerLanyard();
        } else {
            console.log("The number width is negative or no numbers were found. Error: (width.js line 58)");
        }

      //  priceClass.changePricePerLanyard();
      }
    }


    sidePrintedClass.cleanSidePrinted();

    // Draw SidePrinted available:
    let sidePrintedAvailable = sidePrintedClass.getDataSidePrintedAvailable();


    for (var i = 0; i < sidePrintedAvailable.length; i++) {
      sidePrintedClass.drawSidePrintedAvailable(sidePrintedAvailable[i], i);
    }



    // Make an AJAX request to set the selected material.

  //  this.makeAjaxRequestSetMaterialSelected(url, data);

  }

  updatePriceWidth() {

    var json = customizeLanyard.getJsonLanyards();
    var materialSelected = material.getMaterialSelected();
    var sidePrintedSelected = sidePrintedClass.getSidePrintedSelected();
    var noColourSelected = customizeLanyard.getNoColours();
    var amountSelected = priceClass.getAmountSelected();


    let priceDataWidthResult = [];


    // Iterating through each item in the JSON array
    for (let i = 0; i < json.length; i++) {
        // Extracting the 'materials' array from the current JSON item
        const material = json[i].materials.material;

        // Checking if the material matches the selected material
        if (material == materialSelected) {



            // Extracting the 'widths' array from the current JSON item
            const widths = json[i].materials.width;
            // Iterating through each width in the 'widths' array
            for (let j = 0; j < widths.length; j++) {
                // Extracting the 'width' value from the current width object
                const width = widths[j].width;

                    // Extracting the 'sidePrinted' array from the current width object
                    const sidePrinted = widths[j].sidePrinted;

                    // Iterating through each item in the 'sidePrinted' array
                    for (let k = 0; k < sidePrinted.length; k++) {
                        // Extracting the 'noSides' value from the current sidePrinted object
                        const noSides = sidePrinted[k].noSides;

                        // Checking if the number of sides matches the selected number of sides
                        if (noSides == sidePrintedSelected) {

                          const noColours = sidePrinted[k].noColours;

                          for (let l = 0; l < noColours.length; l++) {
                              const noColour = noColours[l].noColour;
                              if (noColour == noColourSelected) {

                                const amounts = noColours[l].amount;
                               for (let m = 0; m < amounts.length; m++) {
                                 const minAmount = amounts[m]['min-amount'];
                                 const maxAmount = amounts[m]['max-amount'];
                                 const price = amounts[m].price;


                                 if (amountSelected >= minAmount && amountSelected <= maxAmount ) {
                                   priceDataWidthResult[j] = price;

                                    // alert("Material: " + material + "Width: " + width + "SidePrinted: " + noSides + "noColour: " + noColour + "Min Amount: " + minAmount + ", Max Amount: " + maxAmount + ", Price: " + priceDataWidthResult[j]);
                                   }
                                   else if (amountSelected > maxAmount) {
                                     priceDataWidthResult[j] = price;
                                   }


                               }
                            }
                          }
                        }
                    }
            }
        }
    }



    var priceMaterialWidthAmount = priceClass.getPricePerMaterialWithAmount();
    const priceDataWidth = document.querySelectorAll(".priceDataWidth");
    var totalPriceWidth;

    for (var i = 0; i < priceDataWidth.length; i++) {
      totalPriceWidth = priceDataWidthResult[i] - priceMaterialWidthAmount;
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
