
class SidePrinted {
  constructor() {
    this.sidePrintedSelected = "one-side";
  }

  setSidePrintedSelected(value) {
    this.sidePrintedSelected = value;
  }
  getSidePrintedSelected() {
    return this.sidePrintedSelected;
  }
  selectSidePrinted(){
    // Clean the side printed options
    this.cleanSidePrinted();

    // Get the available side printed options
    let sidePrintedAvailable = this.getDataSidePrintedAvailable();

    // Iterate through the available side printed options and draw them
    for (var i = 0; i < sidePrintedAvailable.length; i++) {
      this.drawSidePrintedAvailable(sidePrintedAvailable[i], i);
    }
  }

  // Function to make the AJAX request
  makeAjaxRequestSetSidePrintedSelected(url, data) {
    // Make the request using the Fetch API
  /*  fetch(url, {
      method: "POST", // HTTP POST method to send data
      headers: {
        "Content-Type": "application/json" // Indicate that you're sending JSON
      },
      body: JSON.stringify(data) // Convert the JSON object to a JSON string and send it
    })
      .then(response => {
        if (response.ok) {
          return response.text(); // or response.json() if you expect a JSON response
        }
        throw new Error("Network error.");
      })
      .then(data => {
      //  alert(data);
       data = JSON.parse(data);
       oneTwoEndsClass.showSelectedOneTwoEnds(data["lanyardType"]);
       previewLanyardType.showSelectedPreviewtTemplate(data["lanyardType"]["type"], "25mm");

      })
      .catch(error => {
        console.error("Error:", error);
      });*/



  }

  getDataSidePrintedAvailable(){
    var json = customizeLanyard.getJsonLanyards();
    var materialSelected = material.getMaterialSelected();
    var widthSelected = widthClass.getWidthSelected();

    let sidePrintedAvailable = [];
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

                if (width == widthSelected) {

                    // Extracting the 'sidePrinted' array from the current width object
                    const sidePrinted = widths[j].sidePrinted;

                    // Iterating through each item in the 'sidePrinted' array
                    for (let k = 0; k < sidePrinted.length; k++) {
                        // Extracting the 'noSides' value from the current sidePrinted object
                        const noSides = sidePrinted[k].noSides;

                        sidePrintedAvailable[k] = sidePrinted[k].noSides;
                    }
                }
            }
        }
    }

    return sidePrintedAvailable;
  }

  updatePriceSidePrinted() {
      var json = customizeLanyard.getJsonLanyards();
      var materialSelected = material.getMaterialSelected();
      var widthSelected = widthClass.getWidthSelected();
      var noColourSelected = colourClass.getColourSelected();
      var amountSelected = priceClass.getAmountSelected();

      let priceDataSidePrintedResult = [];

      // Iterate through the JSON data
      for (let i = 0; i < json.length; i++) {
          let material = json[i].materials.material;

          // Check if the selected material matches the current material in the loop
          if (materialSelected == material) {

              // Iterate through the widths of the current material
              for (let j = 0; j < json[i].materials.width.length; j++) {
                  let width = json[i].materials.width[j].width;

                  // Check if the selected width matches the current width in the loop
                  if (widthSelected == width) {
                      // Iterate through the side printed options of the current width
                      for (let k = 0; k < json[i].materials.width[j].sidePrinted.length; k++) {
                          let sidePrinted = json[i].materials.width[j].sidePrinted[k].noSides;

                          // Iterate through the color options of the current side printed
                          for (let l = 0; l < json[i].materials.width[j].sidePrinted[k].noColours.length; l++) {
                              let noColour = json[i].materials.width[j].sidePrinted[k].noColours[l].noColour;
                              let equalsNoColour = false;

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
                                          priceDataSidePrintedResult.push(amount.price);
                                          maxAmountExceeded = false; // Reset flag as amountSelected is within range
                                          break; // Exit the loop once we have found the matching range
                                      }
                                  }

                                  // If amountSelected exceeds max-amount, log the price of the highest range
                                  if (maxAmountExceeded) {
                                      let highestAmount = json[i].materials.width[j].sidePrinted[k].noColours[l].amount.slice(-1)[0];
                                      priceDataSidePrintedResult.push(highestAmount.price);
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }



    const priceDataSidePrinted = document.querySelectorAll(".priceDataSidePrinted");
    var totalPriceWidth;

    for (var i = 0; i < priceDataSidePrinted.length; i++) {
      totalPriceWidth = priceDataSidePrintedResult[i] - priceDataSidePrintedResult[0];
      priceDataSidePrinted[i].innerHTML = "£" + totalPriceWidth.toFixed(2) + " per unit";
    }


  }





  cleanSidePrinted(){
    containerBoxSidePrinted.innerHTML = "";
  }
  drawSidePrintedAvailable(data, index){
    var imgLink;
    if (data == "one-side") {
      imgLink = "views/assets/img/global/customize-lanyard/sections/side-printed/one-side.png";
    }
    else {
      imgLink = "views/assets/img/global/customize-lanyard/sections/side-printed/two-side.png";
    }
    containerBoxSidePrinted.innerHTML +=
    '<div class="container_boxes_side_printed" onclick="sidePrintedClass.searchDataSidePrintedSelected(\'' + data  + '\', \' '+ index +'  \');">' +
        '<h3 class="priceDataSidePrinted">+£0 per unit</h3>' +
        '<h4 class="data_side_printed">'+ data+'</h4>' +
        '<img src="../../'+ imgLink +'" alt="">' +
      '</div>'
    ;
  }

  searchDataSidePrintedSelected(sidePrinted, index) {
    //alert(sidePrinted);

    const priceDataSidePrinted = document.querySelectorAll(".priceDataSidePrinted");


    for (var i = 0; i < priceDataSidePrinted.length; i++) {
      if (i == index) {

        let text = priceDataSidePrinted[i].innerHTML+"";
        let number = +text.match(/-?\d+\.\d+|\d+/); // Finds the first number (float or integer), which can be negative.

      //  alert(number);
        if (number >= 0) {

        //  alert("hi, I just enter in if");
            let result = number.toFixed(2);
            priceClass.setPriceSidePrinted(result); // Displays the positive float number with two decimals.
            priceClass.changePricePerLanyard();
            //artworkClass.hideShowOneOrTwoSidesPrinted();
            artworkPreviewClass.hideShowOneOrTwoSidesPrinted()


        } else {
          //alert("hi, I just enter in else too");
          console.log("The number sidePrinted is negative or no numbers were found. Error: (width.js line 58)");
        }
      }
    }



    this.setSidePrintedSelected(sidePrinted);
    this.showSelectedSidePrinted();
    this.updatePriceSidePrinted();

    priceClass.setAmountSelected(priceClass.getAmountSelected());
    previewSidePrinted.showSelectedPreviewtTemplate();

  }


  showSelectedSidePrinted() {
    // Get the selected side printed value
    var data = sidePrintedClass.getSidePrintedSelected();

    // Select all elements with the class "container_boxes_side_printed"
    const containerBoxesSidePrinted = document.querySelectorAll(".container_boxes_side_printed");
    // Select all elements with the class "data_side_printed"
    const dataSidePrinted = document.querySelectorAll(".data_side_printed");

    // Initialize index variable to -1
    var index = -1;
    // Iterate through all elements in dataSidePrinted
    for (var i = 0; i < dataSidePrinted.length; i++) {
      // If the text content of the current element matches the selected data
      if (dataSidePrinted[i].textContent == data) {
        // Set the index to the current position
        index = i;
        // Exit the loop once the matching element is found
        break;
      }
    }

    // Iterate through all elements in containerBoxesSidePrinted
    for (var i = 0; i < containerBoxesSidePrinted.length; i++) {
      // If the current index matches the found index
      if (index == i) {
        // Set the border of the matching element to "2px solid white"
        containerBoxesSidePrinted[i].style.border = "2px solid white";
      } else {
        // Set the border of non-matching elements to "2px solid transparent"
        containerBoxesSidePrinted[i].style.border = "2px solid transparent";
      }
    }
  }

}


const containerBoxSidePrinted = document.getElementById("containers_boxes_side_printed");


const sidePrintedClass = new SidePrinted();
