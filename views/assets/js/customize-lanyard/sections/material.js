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

        customizeLanyard.setJsonLanyards(data["lanyards"]);


      //  console.log(JSON.stringify(customizeLanyard.getJsonLanyards()));

        // Clear the container for materials.
        containersBoxesMaterial.innerHTML = "";
        // Set the fetched JSON materials.
        this.setJsonMaterials(data);
        // Set amount selected to 1000.
        priceClass.setAmountSelected(1000);




        var jsonMaterials = {};
        jsonMaterials = material.getJsonMaterials();
        // Create materials HTML elements.
        for (var i = 0; i < jsonMaterials.materials.length; i++) {
          material.createMaterials(jsonMaterials["materials"][i], "0");
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
      '<h3 class="pricesDataMaterial">£ '+ price +' per unit</h3>' +
    '</div>'
    ;
  }

  // Function to update material prices.
  updatePriceMaterial() {
    var jsonMaterials = {};
    var materialSelected = material.getMaterialSelected();
    var price;
    jsonMaterials = material.getJsonMaterials();
    const pricesDataMaterial = document.querySelectorAll(".pricesDataMaterial");

    for (var i = 0; i < jsonMaterials.materials.length; i++) {
      price = priceClass.calculatePricePerMaterialWithAmount(jsonMaterials["materials"][i]);
      pricesDataMaterial[i].innerHTML = "£" + price + " per unit";
      if (jsonMaterials["materials"][i]["material"] == materialSelected) {
        priceClass.setPricePerMaterialWithAmount(price);
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
    // Set the amount selected.
    priceClass.setAmountSelected(priceClass.getAmountSelected());
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

        // Show the selected material.
        material.showSelectedMaterial(data["material"]);

        // Show the selected preview material.
        previewMaterial.showSelectedPreviewtMaterial(data["material"]);

        // Update material prices.
        material.updatePriceMaterial();

        // Clean oneTwoEnds.
        oneTwoEndsClass.cleanOneTwoEnds();

        // Clean width.
        widthClass.cleanWidth();

        // Create oneTwoEnds.
        for (var i = 0; i < data["allLanyardTypes"].length; i++) {
          oneTwoEndsClass.createOneTwoEnds(data["allLanyardTypes"][i], i);
        }
        // Display the selected "one" or "two" ends.
        oneTwoEndsClass.showSelectedOneTwoEnds();

        // Show the selected preview template.
        previewLanyardType.showSelectedPreviewtTemplate();

        // Create width.
        for (var i = 0; i < data["allWidth"].length; i++) {
          widthClass.createWidth(data["allWidth"][i], i);
        }

        widthClass.updatePriceWidth();
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  // Function to display the selected material.
  showSelectedMaterial(data) {
    const containerBoxesMaterial = document.querySelectorAll(".container_boxes_material");
    const material = data["material"];
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
