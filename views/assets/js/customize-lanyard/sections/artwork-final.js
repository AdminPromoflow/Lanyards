class ArtworkFinal {
  constructor(){
    this.updateItems();
  }
updateItems(){


artworkFinalMaterial.innerHTML = "Material: " + material.getMaterialSelected(oneTwoEndsClass.getTypeLanyardSelected());
artworkFinalLanyardLype.innerHTML = "Lanyard type: " + oneTwoEndsClass.getTypeLanyardSelected();
artworkFinalWidth.innerHTML = "Width: " + widthClass.getWidthSelected();
artworkFinalSidePrinted.innerHTML = "Side printed: " + sidePrintedClass.getSidePrintedSelected();
artworkFinalClips.innerHTML = "Clips: " + clipClass.getClipSelected();
artworkFinalAttachment.innerHTML = "Attachment: " + attachmentClass.getAttachmentSelected();
artworkFinalColourQuantity.innerHTML = "Colour Quantity: " + colourClass.getColourSelected();
artworkFinalArtworkManual.innerHTML = "Artwork - Manual: " + artworkManualClass.getArtworkManual();
}
}
const artworkFinalMaterial = document.getElementById("artwork-final-material");
const artworkFinalLanyardLype = document.getElementById("artwork-final-lanyard-type");
const artworkFinalWidth = document.getElementById("artwork-final-width");
const artworkFinalSidePrinted = document.getElementById("artwork-final-side-printed");
const artworkFinalClips = document.getElementById("artwork-final-clips");
const artworkFinalAttachment = document.getElementById("artwork-final-attachment");
const artworkFinalColourQuantity = document.getElementById("artwork-final-colour-quantity");
const artworkFinalArtworkManual = document.getElementById("artwork-final-artwork-manual");

const artworkClassFinal = new ArtworkFinal();
