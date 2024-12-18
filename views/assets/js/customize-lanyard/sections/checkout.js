class Checkout {
  constructor(){
    this.updateItems();
  }
updateItems(){


checkoutMaterial.innerHTML = "Material: " + material.getMaterialSelected(oneTwoEndsClass.getTypeLanyardSelected());
checkoutLanyardLype.innerHTML = "Lanyard type: " + oneTwoEndsClass.getTypeLanyardSelected();
checkoutWidth.innerHTML = "Width: " + widthClass.getWidthSelected();
checkoutSidePrinted.innerHTML = "Side printed: " + sidePrintedClass.getSidePrintedSelected();
checkoutClips.innerHTML = "Clips: " + clipClass.getClipSelected();
checkoutAttachment.innerHTML = "Attachment: " + attachmentClass.getAttachmentSelected();
checkoutColourQuantity.innerHTML = "Colour Quantity: " + colourClass.getColourSelected();
checkoutArtworkManual.innerHTML = "Artwork - Manual: " + artworkManualClass.getArtworkManual();
}
}
const checkoutMaterial = document.getElementById("checkout-material");
const checkoutLanyardLype = document.getElementById("checkout-lanyard-type");
const checkoutWidth = document.getElementById("checkout-width");
const checkoutSidePrinted = document.getElementById("checkout-side-printed");
const checkoutClips = document.getElementById("checkout-clips");
const checkoutAttachment = document.getElementById("checkout-attachment");
const checkoutColourQuantity = document.getElementById("checkout-colour-quantity");
const checkoutArtworkManual = document.getElementById("checkout-artwork-manual");

const artworkClassFinal = new Checkout();
