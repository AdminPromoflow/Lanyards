// Define a class named Material.
class Material {

  // Constructor method.
  constructor() {
    // Initialize the materialSelected property to "Tubular".
    this.materialSelected = "Tubular";
    // Initialize an empty object to store JSON materials.
    var jsonMaterials = {};

  }

  // Setter method for the materialSelected property.
  setMaterialSelected(value) {
    this.materialSelected = value;
  }

  // Getter method for the materialSelected property.
  getMaterialSelected() {
    return this.materialSelected;
  }


  // Setter method to set the JSON materials.
 setJsonMaterials(jsonMaterials) {
   this.jsonMaterials = jsonMaterials;
 }


  // Getter method to get the JSON materials.
  getJsonMaterials() {
    return this.jsonMaterials;
  }

  // Function to make an AJAX request to fetch all materials.
  makeAjaxRequestGetAllMaterials(url, data) {
    // Make a fetch request to the given URL with the specified data
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        // Check if the response is okay, if so, return the response text
        if (response.ok) {
          return response.text();
        }
        // If the response is not okay, throw an error
        throw new Error("Network error.");
      })
      .then(data => {
        data = JSON.parse(data);
        customizeLanyard.setJsonLanyards(data["lanyards"]);

        this.selecteMaterial();
        clipClass.selectClip();
        sidePrintedClass.selectSidePrinted();

      })
      .catch(error => {
        // Log any errors to the console
        console.error("Error:", error);
      //  location.reload();
      });
  }

      selecteMaterial(data){
        var data = customizeLanyard.getJsonLanyards();
        // Clear the container for materials
        containersBoxesMaterial.innerHTML = "";
        // Set the fetched JSON materials
        //material.setJsonMaterials(data);
        // Iterate through the lanyards and create materials HTML elements
        for (var i = 0; i < data.length; i++) {
          material.createMaterials(data[i]["materials"]);
        }
      }

  // Function to create materials HTML elements.
  createMaterials(data, price) {
    // Append a new material box to the containersBoxesMaterial's innerHTML.
    containersBoxesMaterial.innerHTML +=
      `<div class="container_boxes_material" onclick="material.searchDataMaterialSelected('${data['material']}');">
        <h4 class="dataMaterial">${data['material']}</h4>
        <h3 class="pricesDataMaterial">£0 per unit</h3>
      </div>`;
  }

  // Function to update material prices.
  updatePriceMaterial() {
    // Get the JSON lanyards data from the customizeLanyard object.
    var json = customizeLanyard.getJsonLanyards();

    // Get the selected material from the material object.
    var materialSelected = material.getMaterialSelected();

    // Get the selected width from the widthClass object.
    var widthSelected = widthClass.getWidthSelected();

    // Get the selected side printed option from the sidePrintedClass object.
    var sidePrintedSelected = sidePrintedClass.getSidePrintedSelected();

    // Get the number of colors selected from the customizeLanyard object.
    var noColourSelected = colourClass.getColourSelected();

    // Get the amount selected from the priceClass object.
    var amountSelected = priceClass.getAmountSelected();

    // Initialize an array to store the results for material prices.
    let priceDataMaterialResult = [];

    // Iterating through each item in the JSON array.
    for (let i = 0; i < json.length; i++) {
      // Extracting the 'material' from the current JSON item.
      const material = json[i].materials.material;

      // Extracting the 'widths' array from the current JSON item.
      const widths = json[i].materials.width;

      // Iterating through each width in the 'widths' array.
      for (let j = 0; j < widths.length; j++) {
        // Extracting the 'width' value from the current width object.
        const width = widths[j].width;

        // Checking if the width matches the selected width.
        if (width == widthSelected) {
          // Extracting the 'sidePrinted' array from the current width object.
          const sidePrinted = widths[j].sidePrinted;

          // Iterating through each item in the 'sidePrinted' array.
          for (let k = 0; k < sidePrinted.length; k++) {
            // Extracting the 'noSides' value from the current sidePrinted object.
            const noSides = sidePrinted[k].noSides;

            // Update the sidePrintedSelected value if it matches the noSides value.
            sidePrintedSelected = (noSides == sidePrintedSelected) ? noSides : sidePrinted[0].noSides;

            // Checking if the number of sides matches the selected number of sides.
            if (noSides == sidePrintedSelected) {
              // Extracting the 'noColours' array from the current sidePrinted object.
              const noColours = sidePrinted[k].noColours;

              // Iterating through each item in the 'noColours' array.
              for (let l = 0; l < noColours.length; l++) {
                // Extracting the 'noColour' value from the current noColours object.
                const noColour = noColours[l].noColour;

                // Update the noColourSelected value if it matches the noColour value.
                noColourSelected = (noColour == noColourSelected) ? noColour : noColours[0].noColour;

                // Checking if the number of colors matches the selected number of colors.
                if (noColour == noColourSelected) {
                  // Extracting the 'amount' array from the current noColours object.
                  const amounts = noColours[l].amount;

                  // Iterating through each amount in the 'amounts' array.
                  for (let m = 0; m < amounts.length; m++) {
                    // Extracting the 'min-amount' and 'max-amount' values from the current amount object.
                    const minAmount = amounts[m]['min-amount'];
                    const maxAmount = amounts[m]['max-amount'];
                    const price = amounts[m].price;

                    // Checking if the selected amount falls within the min and max amount range.
                    if (amountSelected >= minAmount && amountSelected <= maxAmount) {
                      // Push the result into the priceDataMaterialResult array.
                      priceDataMaterialResult.push({ material, width, noSides, noColour, minAmount, maxAmount, price });
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    // Get all elements with the class "pricesDataMaterial".
    const pricesDataMaterial = document.querySelectorAll(".pricesDataMaterial");

    // Iterating through the priceDataMaterialResult array to update the HTML.
    for (var i = 0; i < priceDataMaterialResult.length; i++) {
      // Update the inner HTML of the pricesDataMaterial elements with the price per unit.
      pricesDataMaterial[i].innerHTML = "£" + priceDataMaterialResult[i]["price"] + " per unit";

      // If the material matches the selected material, update the price class.
      if (json[i]["materials"]["material"] == materialSelected) {
        priceClass.setPricePerMaterialWithAmount(priceDataMaterialResult[i]["price"]);
        priceClass.changePricePerLanyard();
      }
    }
  }

  // Function to search for a material.
  searchDataMaterialSelected(materialSelected) {

    // Capture all elements with the class 'pricesDataMaterial'
    const pricesDataMaterialElements = document.querySelectorAll('.pricesDataMaterial');
    let dataMaterialElements = document.querySelectorAll('.dataMaterial');

    for (let i = 0; i < dataMaterialElements.length; i++) {
      let material = dataMaterialElements[i].innerText;
      if (material == materialSelected) {
        let number = pricesDataMaterialElements[i].innerText;;
        let price = number.match(/\d+(\.\d+)?/)[0];


         priceClass.setPricePerMaterialWithAmount(price);
         priceClass.changePricePerLanyard();

      }
    }



    const url = "../../controller/lanyard/material.php";
    const data = {
      action: "setMaterialSelected",
      optionSelected: materialSelected,
      amountSelected: priceClass.getAmountSelected()
    };

    // Set the selected material.
    this.setMaterialSelected(materialSelected);

    // Show the selected material.
    this.showSelectedMaterial();

    // Show the selected preview material.
    previewMaterial.showSelectedPreviewtMaterial(this.getMaterialSelected());

    // Make an AJAX request to set the selected material.
    this.makeAjaxRequestSetMaterialSelected(url, data);
  }

  // Function to make an AJAX request to set the selected material.
  makeAjaxRequestSetMaterialSelected(url, data) {
    // Make a fetch request to the given URL with the specified data
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        // Check if the response is okay, if so, return the response text
        if (response.ok) {
          return response.text();
        }
        // If the response is not okay, throw an error
        throw new Error("Network error.");
      })
      .then(data => {
        // Parse the response data as JSON
        data = JSON.parse(data);

        oneTwoEndsClass.setJsonLanyardType(data["allLanyardTypes"]);
        oneTwoEndsClass.selectOneTwoEnds();
        previewLanyardType.showSelectedPreviewtTemplate();


        widthClass.setJsonWidth(data["allWidth"]);
        widthClass.selectWidth();


        sidePrintedClass.setSidePrintedSelected(data["sidePrintedSelected"]);
        sidePrintedClass.selectSidePrinted();


        clipClass.selectClip();


        // Attachment

        colourClass.setColourSelected(data["noColourSelected"]);
        colourClass.createColour();
        colourClass.showSelectedColour();

        previewColourClass.showSelectedPreviewtColour();
        previewColourClass.showColourPreview("none");

  })
      .catch(error => {
        // Log any errors to the console
        console.error("Error:", error);
      });
  }

  // Function to display the selected material.
  showSelectedMaterial() {
    // Get all elements with the class "container_boxes_material".
    const containerBoxesMaterial = document.querySelectorAll(".container_boxes_material");

    // Get the currently selected material.
    const material = this.getMaterialSelected();

    // Set the border of all material containers to transparent.
    containerBoxesMaterial.forEach(container => {
      container.style.border = "2px solid transparent";
    });

    // Iterate through each material container to highlight the selected one.
    containerBoxesMaterial.forEach(container => {
      // Get the element that contains the material name.
      const dataMaterial = container.querySelector(".dataMaterial");

      // If the text content of the dataMaterial element matches the selected material, set the border to white.
      if (dataMaterial.textContent === material) {
        container.style.border = "2px solid white";
      }
    });
  }

}

// Get the container element for materials by its ID.
const containersBoxesMaterial = document.getElementById("containers_boxes_material");

// Create an instance of the Material class to initialize and manage materials.
const material = new Material();
