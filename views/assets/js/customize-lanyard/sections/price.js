// Define a class named Price.
class Price {
  // Constructor method.
  constructor() {
    // Initialize properties.
    this.amountSelected = 1;
    this.priceMaterialWidthAmount; // Global variable to store the price.
    this.priceLanyardType = 0; // Global variable to store the price.
    this.priceWidth = 0;


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

  // Setter method for price per width.
  setPriceWidth(price){
    this.priceWidth = price;
  }

  // Getter method for price per width.
  getPriceWidth(){
    return parseFloat(this.priceWidth);
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
    var totalPrice = priceClass.getPricePerMaterialWithAmount() + priceClass.getPriceLanyardType() + priceClass.getPriceWidth();
    // Update the inner HTML of pricePerLanyard element to display the price with currency symbol.
    pricePerLanyard.innerHTML = "£" + totalPrice.toFixed(2);
  }





}

// DOM element references.
const amountLanyardsRange = document.getElementById("amountLanyardsRange");
const pricePerLanyard = document.getElementById("pricePerLanyard");
const amountLanyards = document.getElementById("amountLanyards");

// Create an instance of Price class.
const priceClass = new Price();
