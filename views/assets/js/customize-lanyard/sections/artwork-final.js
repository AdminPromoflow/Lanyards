class ArtworkFinal {
  constructor(){
    this.updateItems();
  }
updateItems(){


artworkFinalMaterial.innerHTML = material.getMaterialSelected(oneTwoEndsClass.getTypeLanyardSelected());
artworkFinalLanyardLype.innerHTML = oneTwoEndsClass.getTypeLanyardSelected();
artworkFinalWidth.innerHTML = widthClass.getWidthSelected();
artworkFinalSidePrinted.innerHTML = sidePrintedClass.getSidePrintedSelected();
artworkFinalClips.innerHTML = clipClass.getClipSelected();
artworkFinalAttachment.innerHTML = attachmentClass.getAttachmentSelected();
artworkFinalColourQuantity.innerHTML = colourClass.getColourSelected();
artworkFinalArtworkManual.innerHTML = artworkManualClass.getArtworkManual();
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
