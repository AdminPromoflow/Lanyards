// Define a class named Material.
class Material {
  // Constructor method.
  constructor() {
    // Initialize the materialSelected property to "Tubular".
    this.materialSelected = "Tubular";
    // Initialize an empty object to store JSON materials.
    var jsonMaterials = {};
    // Define the URL and data object for AJAX request.
    const url = "../../controller/lanyard/material.php";
    const data = {
      action: "getMaterials"
    };
    // Make an AJAX request to fetch all materials.
    this.makeAjaxRequestGetAllMaterials(url, data);
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
    fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Network error.");
      })
      .then(data => {
        data = JSON.parse(data);

    //    console.log(JSON.stringify(data["lanyards"]));

        customizeLanyard.setJsonLanyards(data["lanyards"]);

        // Clear the container for materials.
        containersBoxesMaterial.innerHTML = "";
        // Set the fetched JSON materials.
        this.setJsonMaterials(data);
        // Set amount selected to 1000.
        priceClass.setAmountSelected(1000);

        // Create materials HTML elements.
        for (var i = 0; i < data["lanyards"].length; i++) {
          material.createMaterials(data["lanyards"][i]["materials"]);
        }

        sidePrintedClass.cleanSidePrinted();

        // Draw SidePrinted available:
        let sidePrintedAvailable = sidePrintedClass.getDataSidePrintedAvailable();


        for (var i = 0; i < sidePrintedAvailable.length; i++) {
          sidePrintedClass.drawSidePrintedAvailable(sidePrintedAvailable[i], i);
        }



        clipClass.cleanClip();


        let clipAvailable = clipClass.getDataClipAvailable();

        for (var i = 0; i < clipAvailable.length; i++) {
          clipClass.drawClipAvailable(clipAvailable[i], i);
        }

      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  // Function to create materials HTML elements.
  createMaterials(data, price) {
    containersBoxesMaterial.innerHTML +=
    '<div class="container_boxes_material"  onclick="material.searchDataMaterialSelected(\'' + data['material']  + '\');">'  +
      '<h4 class="dataMaterial">'+data['material']+'</h4>' +
      '<h3 class="pricesDataMaterial">£0 per unit</h3>' +
    '</div>'
    ;
  }

  // Function to update material prices.
  updatePriceMaterial() {

    var json = customizeLanyard.getJsonLanyards();
    var materialSelected = material.getMaterialSelected();
    var widthSelected = widthClass.getWidthSelected();
    var sidePrintedSelected = sidePrintedClass.getSidePrintedSelected();
    var noColourSelected = customizeLanyard.getNoColours();
    var amountSelected = priceClass.getAmountSelected();

    let priceDataMaterialResult = [];

    // Iterating through each item in the JSON array
    for (let i = 0; i < json.length; i++) {
        // Extracting the 'materials' array from the current JSON item
        const material = json[i].materials.material;

        // Extracting the 'widths' array from the current JSON item
        const widths = json[i].materials.width;
        // Iterating through each width in the 'widths' array
        for (let j = 0; j < widths.length; j++) {
            // Extracting the 'width' value from the current width object
            const width = widths[j].width;

            // Checking if the width matches the selected width
            if (width == widthSelected) {
                // Extracting the 'sidePrinted' array from the current width object
                const sidePrinted = widths[j].sidePrinted;

                // Iterating through each item in the 'sidePrinted' array
                for (let k = 0; k < sidePrinted.length; k++) {
                    // Extracting the 'noSides' value from the current sidePrinted object
                    const noSides = sidePrinted[k].noSides;

                    sidePrintedSelected = (noSides == sidePrintedSelected) ? noSides : sidePrinted[0].noSides;



                    // Checking if the number of sides matches the selected number of sides
                    if (noSides == sidePrintedSelected) {

                        const noColours = sidePrinted[k].noColours;

                        for (let l = 0; l < noColours.length; l++) {
                            const noColour = noColours[l].noColour;

                            noColourSelected = (noColour == noColourSelected) ? noColour : noColours[0].noColour;



                            if (noColour == noColourSelected) {
                                const amounts = noColours[l].amount;
                                for (let m = 0; m < amounts.length; m++) {
                                    const minAmount = amounts[m]['min-amount'];
                                    const maxAmount = amounts[m]['max-amount'];
                                    const price = amounts[m].price;

                                    if (amountSelected >= minAmount && amountSelected <= maxAmount) {
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


     const pricesDataMaterial = document.querySelectorAll(".pricesDataMaterial");

   for (var i = 0; i < priceDataMaterialResult.length; i++) {

      pricesDataMaterial[i].innerHTML = "£" + priceDataMaterialResult[i]["price"] + " per unit";
      if (json[i]["materials"]["material"] == materialSelected) {
        priceClass.setPricePerMaterialWithAmount(priceDataMaterialResult[i]["price"]);
        priceClass.changePricePerLanyard();
      }
    }

  }

  // Function to search for a material.
  searchDataMaterialSelected(material) {
    const url = "../../controller/lanyard/material.php";
    const data = {
      action: "setMaterialSelected",
      optionSelected: material,
      amountSelected: priceClass.getAmountSelected()
    };

    // Set the selected material.
    this.setMaterialSelected(material);

    // Show the selected material.
    this.showSelectedMaterial();

    // Show the selected preview material.
    previewMaterial.showSelectedPreviewtMaterial(this.getMaterialSelected());

    // Make an AJAX request to set the selected material.
    this.makeAjaxRequestSetMaterialSelected(url, data);

  }

  // Function to make an AJAX request to set the selected material.
  makeAjaxRequestSetMaterialSelected(url, data) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Network error.");
      })
      .then(data => {
      //  alert(data);
        data = JSON.parse(data);

        // Clean oneTwoEnds.
        oneTwoEndsClass.cleanOneTwoEnds();

        // Create oneTwoEnds.
        for (var i = 0; i < data["allLanyardTypes"].length; i++) {
          oneTwoEndsClass.createOneTwoEnds(data["allLanyardTypes"][i], i);
        }
        // Display the selected "one" or "two" ends.
        oneTwoEndsClass.showSelectedOneTwoEnds();

        // Show the selected preview template.
        previewLanyardType.showSelectedPreviewtTemplate();

        // Clean width.
        widthClass.cleanWidth();

        // Create width.
        for (var i = 0; i < data["allWidth"].length; i++) {
          widthClass.createWidth(data["allWidth"][i], i);
        }

        widthClass.updatePriceWidth();

        widthClass.showSelectedWidth();


        // Sets the selected print side option for the lanyard based on the data provided.
        sidePrintedClass.setSidePrintedSelected(data["sidePrintedSelected"]);


        // Assigns the number of colors selected for the lanyard customization.
        customizeLanyard.setNoColours(data["noColourSelected"]);


      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  // Function to display the selected material.
  showSelectedMaterial() {
    const containerBoxesMaterial = document.querySelectorAll(".container_boxes_material");
    const material = this.getMaterialSelected();
    containerBoxesMaterial.forEach(container => {
      container.style.border = "2px solid transparent";
    });
    containerBoxesMaterial.forEach(container => {
      const dataMaterial = container.querySelector(".dataMaterial");
      if (dataMaterial.textContent === material) {
        container.style.border = "2px solid white";
      }
    });
  }
}

// Get the container for materials.
const containersBoxesMaterial = document.getElementById("containers_boxes_material");
// Create an instance of the Material class.
const material = new Material();
