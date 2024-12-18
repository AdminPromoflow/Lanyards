class PreviewCheckout {
  constructor(){

  }
  showPreviewCheckout(action){
    previewCheckoutContainer.style.display = action;
  }

}
const previewCheckoutContainer = document.getElementById("preview-checkout-container");
const previewCheckout = new PreviewCheckout();
