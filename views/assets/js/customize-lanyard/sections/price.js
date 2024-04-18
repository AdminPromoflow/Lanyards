class Price {
  constructor() {
    this.amountSelected = 0;
    // Event listener for input changes on amountLanyards element
    amountLanyards.addEventListener('input', function(event) {
      // Remove non-digit characters from the value
      this.value = this.value.replace(/\D/g, '');
      // Update amountLanyardsRange value to match amountLanyards value
      amountLanyardsRange.value = this.value;
      priceClass.setAmountSelected(amountLanyardsRange.value);

      material.updatePriceMaterial();

    });

    // Event listener for input changes on amountLanyardsRange element
    amountLanyardsRange.addEventListener('input', function() {
      // Check if amountLanyards value is not equal to 0
      if (amountLanyards.value !== 0) {
        // Update amountLanyards value to match amountLanyardsRange value
        amountLanyards.value = this.value;

        priceClass.setAmountSelected(amountLanyards.value);
        material.updatePriceMaterial();

      }
    });
  }

  // Getter method for amount property
  getAmountSelected() {
    return this.amountSelected;
  }

  // Setter method for amount property
  setAmountSelected(value) {
    this.amountSelected = value;
  }

  // Method to change price per lanyard
  changePricePerLanyard(price) {
    // Update the inner HTML of pricePerLanyard element to display the price with currency symbol
    pricePerLanyard.innerHTML = "£" + price;
  }

  // Method to calculate price per material with given amount
  calculatePricePerMaterialWithAmount(materials) {

      var amountSelected = priceClass.getAmountSelected();
      var materialSelected = material.getMaterialSelected();


      // Verificar el formato del JSON
      if (typeof materials.material === "string") {
          materials = materials; // Segundo formato de JSON
      } else if (typeof materials.material === "object") {
          materials = JSON.stringify(materials.material); // Primer formato de JSON
      }

      alert(material.getMaterialSelected() + JSON.stringify(materials));


      let index = 0;

      let minAmount = materials.allAmount[0]["min-amount"];
      let maxAmount = materials.allAmount[0]["max-amount"];

      // Loop para encontrar los valores mínimos y máximos de la cantidad
      for (let i = 1; i < materials.allAmount.length; i++) {
          minAmount = Math.min(minAmount, materials.allAmount[i]["min-amount"]);
          maxAmount = Math.max(maxAmount, materials.allAmount[i]["max-amount"]);
      }

      let price = 0;

      // Loop para encontrar el precio basado en la cantidad seleccionada
      for (let i = 0; i < materials.allAmount.length; i++) {
          if (amountSelected >= materials.allAmount[i]["min-amount"] && amountSelected <= materials.allAmount[i]["max-amount"] &&  material.getMaterialSelected() == materials.material) {
              price = materials.allAmount[i].price;
              priceClass.changePricePerLanyard(price);
              priceClass.setPricePerMaterialWithAmount(price);
          }
      }


      for (let i = 0; i < materials.allAmount.length; i++) {
          if (amountSelected >= materials.allAmount[i]["min-amount"] && amountSelected <= materials.allAmount[i]["max-amount"] ) {
              price = materials.allAmount[i].price;
              index = i;
          }
      }

      // Verificar si amountSelected es mayor que el máximo del último intervalo
      if (amountSelected > materials.allAmount[materials.allAmount.length - 1]["max-amount"]) {
          price = materials.allAmount[materials.allAmount.length - 1].price;
          index = materials.allAmount.length - 1;
          // Actualizar el precio
          priceClass.changePricePerLanyard(price);
          priceClass.setPricePerMaterialWithAmount(price);

      }

      return price;
  }

  setPricePerMaterialWithAmount(price){
    priceMaterialWidthAmount = price;
  }
  getPricePerMaterialWithAmount(){
    return priceMaterialWidthAmount;
  }

}

// DOM element references
const amountLanyardsRange = document.getElementById("amountLanyardsRange");
const pricePerLanyard = document.getElementById("pricePerLanyard");
const amountLanyards = document.getElementById("amountLanyards");
var priceMaterialWidthAmount; // Variable global para almacenar el precio

// Create an instance of Price class
const priceClass = new Price();
