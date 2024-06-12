class PreviewLanyardType {
  constructor() {

  }
  showSelectedPreviewtTemplate(){

    var typeLanyard = oneTwoEndsClass.getTypeLanyardSelected();
    var width = widthClass.getWidthSelected();

    if (typeLanyard == "one-end") {

      if (width == "25mm") {
        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "flex";
        oneSide30mm.style.display = "none";

        twoSide10mm.style.display = "none";
        twoSide15mm.style.display = "none";
        twoSide20mm.style.display = "none";
        twoSide25mm.style.display = "none";
        twoSide30mm.style.display = "none";
      }
      else if (width == "10mm") {
        oneSide10mm.style.display = "flex";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide10mm.style.display = "none";
        twoSide15mm.style.display = "none";
        twoSide20mm.style.display = "none";
        twoSide25mm.style.display = "none";
        twoSide30mm.style.display = "none";
      }
      else if (width == "15mm") {
        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "flex";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide10mm.style.display = "none";
        twoSide15mm.style.display = "none";
        twoSide20mm.style.display = "none";
        twoSide25mm.style.display = "none";
        twoSide30mm.style.display = "none";
      }
      else if (width == "20mm") {
        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "flex";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide10mm.style.display = "none";
        twoSide15mm.style.display = "none";
        twoSide20mm.style.display = "none";
        twoSide25mm.style.display = "none";
        twoSide30mm.style.display = "none";
      }
      else if (width == "30mm") {
        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "flex";

        twoSide10mm.style.display = "none";
        twoSide15mm.style.display = "none";
        twoSide20mm.style.display = "none";
        twoSide25mm.style.display = "none";
        twoSide30mm.style.display = "none";
      }
    }
    else if (typeLanyard == "two-end") {

      if (width == "10mm") {

        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide10mm.style.display = "flex";
        twoSide15mm.style.display = "none";
        twoSide20mm.style.display = "none";
        twoSide25mm.style.display = "none";
        twoSide30mm.style.display = "none";
      }
      else if (width == "15mm") {

        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide10mm.style.display = "none";
        twoSide15mm.style.display = "flex";
        twoSide20mm.style.display = "none";
        twoSide25mm.style.display = "none";
        twoSide30mm.style.display = "none";
      }
      else if (width == "20mm") {

        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide10mm.style.display = "none";
        twoSide15mm.style.display = "none";
        twoSide20mm.style.display = "flex";
        twoSide25mm.style.display = "none";
        twoSide30mm.style.display = "none";
      }
      else if (width == "25mm") {

        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide10mm.style.display = "none";
        twoSide15mm.style.display = "none";
        twoSide20mm.style.display = "none";
        twoSide25mm.style.display = "flex";
        twoSide30mm.style.display = "none";
      }
      else if (width == "30mm") {

        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide10mm.style.display = "none";
        twoSide15mm.style.display = "none";
        twoSide20mm.style.display = "none";
        twoSide25mm.style.display = "none";
        twoSide30mm.style.display = "flex";
      }
    }
  }
  showTypeLanyardPreview(action){
    previewLanyardTypeContainer.style.display = action;
  }
}

const previewLanyardTypeContainer = document.getElementById("preview-lanyard-type-container");

const oneSide10mm = document.getElementById("one-side-10mm");
const oneSide15mm = document.getElementById("one-side-15mm");
const oneSide20mm = document.getElementById("one-side-20mm");
const oneSide25mm = document.getElementById("one-side-25mm");
const oneSide30mm = document.getElementById("one-side-30mm");

const twoSide10mm = document.getElementById("two-side-10mm");
const twoSide15mm = document.getElementById("two-side-15mm");
const twoSide20mm = document.getElementById("two-side-20mm");
const twoSide25mm = document.getElementById("two-side-25mm");
const twoSide30mm = document.getElementById("two-side-30mm");

const previewLanyardType = new PreviewLanyardType();
