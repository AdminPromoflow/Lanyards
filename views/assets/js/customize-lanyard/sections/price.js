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
  changePricePerLanyard() {
  //  alert(priceClass.getPricePerMaterialWithAmount() + priceClass.getPriceLanyardType());
    var totalPrice;
    totalPrice = priceClass.getPricePerMaterialWithAmount() +priceClass.getPriceLanyardType();
    // Update the inner HTML of pricePerLanyard element to display the price with currency symbol
    pricePerLanyard.innerHTML = "£" + totalPrice;
  }

  // Method to calculate price per material with given amount
   calculatePricePerMaterialWithAmount(materials) {
      var amountSelected = priceClass.getAmountSelected(); // Supongamos que ya tienes este valor

      // Si amountSelected es igual a 0, retornar un precio de 0
      if (amountSelected === 0) {
          return 0;
      }

      // Iterar sobre cada intervalo en la lista de materiales
      for (var i = 0; i < materials.allAmount.length; i++) {
          var interval = materials.allAmount[i];

          // Convertir los valores de los intervalos a números para comparar
          var minAmount = parseInt(interval["min-amount"]);
          var maxAmount = parseInt(interval["max-amount"]);

          // Verificar si amountSelected está dentro de este intervalo
          if (amountSelected >= minAmount && amountSelected <= maxAmount) {
              // Si amountSelected está dentro de este intervalo, retornar el precio correspondiente
              return parseFloat(interval.price);
          }
      }

      // Si amountSelected es mayor que el valor máximo del último intervalo, devolver el precio correspondiente al último intervalo
      var lastInterval = materials.allAmount[materials.allAmount.length - 1];
      return parseFloat(lastInterval.price);
  }



  setPricePerMaterialWithAmount(price){
    priceMaterialWidthAmount = price;
  }
  getPricePerMaterialWithAmount(){
    return parseFloat(priceMaterialWidthAmount);
  }

  setPriceLanyardType(price){
    priceLanyardType = price;
  }
  getPriceLanyardType(){
    return parseFloat(priceLanyardType);
  }

}

// DOM element references
const amountLanyardsRange = document.getElementById("amountLanyardsRange");
const pricePerLanyard = document.getElementById("pricePerLanyard");
const amountLanyards = document.getElementById("amountLanyards");
var priceMaterialWidthAmount; // Variable global para almacenar el precio
var priceLanyardType = 0; // Variable global para almacenar el precio

// Create an instance of Price class
const priceClass = new Price();
