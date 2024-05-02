// Define a class named Price.
class Price {
  // Constructor method.
  constructor() {
    // Initialize properties.
    this.amountSelected = 1;
    this.priceMaterialWidthAmount; // Global variable to store the price.
    this.priceLanyardType = 0; // Global variable to store the price.

    // Event listener for input changes on amountLanyards element.
    amountLanyards.addEventListener('input', function(event) {
      // Remove non-digit characters from the value.
      this.value = this.value.replace(/\D/g, '');
      // Update amountLanyardsRange value to match amountLanyards value.
      amountLanyardsRange.value = this.value;
      priceClass.setAmountSelected(amountLanyardsRange.value);
      material.updatePriceMaterial();
      widthClass.updatePriceWidth();

    });

    // Event listener for input changes on amountLanyardsRange element.
    amountLanyardsRange.addEventListener('input', function() {
      // Check if amountLanyards value is not equal to 0.
      if (amountLanyards.value !== 0) {
        // Update amountLanyards value to match amountLanyardsRange value.
        amountLanyards.value = this.value;
        priceClass.setAmountSelected(amountLanyards.value);
        material.updatePriceMaterial();
        widthClass.updatePriceWidth();

      }
    });
  }

  // Setter method for price per material with amount.
  setPricePerMaterialWithAmount(price){
    this.priceMaterialWidthAmount = price;
  }

  // Getter method for price per material with amount.
  getPricePerMaterialWithAmount(){
    return parseFloat(this.priceMaterialWidthAmount);
  }

  // Setter method for price per lanyard type.
  setPriceLanyardType(price){
    this.priceLanyardType = price;
  }

  // Getter method for price per lanyard type.
  getPriceLanyardType(){
    return parseFloat(this.priceLanyardType);
  }

  // Getter method for amount property.
  getAmountSelected() {
    return this.amountSelected;
  }

  // Setter method for amount property.
  setAmountSelected(value) {
    this.amountSelected = value;
  }

  // Method to change price per lanyard.
  changePricePerLanyard() {
    // Calculate total price.
    var totalPrice = priceClass.getPricePerMaterialWithAmount() + priceClass.getPriceLanyardType();
    // Update the inner HTML of pricePerLanyard element to display the price with currency symbol.
    pricePerLanyard.innerHTML = "£" + totalPrice.toFixed(2);
  }

  // Method to calculate price per material with given amount.
  calculatePricePerMaterialWithAmount(materials) {
    var amountSelected = priceClass.getAmountSelected(); // Assume you have this value.

    // If amountSelected is 0, return a price of 0.
    if (amountSelected === 0) {
      return 0;
    }

    // Iterate over each interval in the materials list.
    for (var i = 0; i < materials.allAmount.length; i++) {
      var interval = materials.allAmount[i];

      // Convert interval values to numbers for comparison.
      var minAmount = parseInt(interval["min-amount"]);
      var maxAmount = parseInt(interval["max-amount"]);

      // Check if amountSelected is within this interval.
      if (amountSelected >= minAmount && amountSelected <= maxAmount) {
        // If amountSelected is within this interval, return the corresponding price.
        return parseFloat(interval.price);
      }
    }

    // If amountSelected is greater than the maximum value of the last interval, return the price corresponding to the last interval.
    var lastInterval = materials.allAmount[materials.allAmount.length - 1];
    return parseFloat(lastInterval.price);
  }
}

// DOM element references.
const amountLanyardsRange = document.getElementById("amountLanyardsRange");
const pricePerLanyard = document.getElementById("pricePerLanyard");
const amountLanyards = document.getElementById("amountLanyards");

// Create an instance of Price class.
const priceClass = new Price();
