class PreviewLanyardType {
  constructor() {

  }
  showSelectedPreviewtTemplate(typeLanyard, width){
    if (typeLanyard == "one-end") {

      if (width == "25mm") {
        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "flex";
        oneSide30mm.style.display = "none";

        twoSide25mm.style.display = "none";

      }
      else if (width == "10mm") {
        oneSide10mm.style.display = "flex";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide25mm.style.display = "none";
      }
      else if (width == "15mm") {
        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "flex";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide25mm.style.display = "none";
      }
      else if (width == "20mm") {
        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "flex";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "none";

        twoSide25mm.style.display = "none";
      }
      else if (width == "30mm") {
        oneSide10mm.style.display = "none";
        oneSide15mm.style.display = "none";
        oneSide20mm.style.display = "none";
        oneSide25mm.style.display = "none";
        oneSide30mm.style.display = "flex";

        twoSide25mm.style.display = "none";
      }
    }
    else if (typeLanyard == "two-end") {

      if (width == "25mm") {
        oneSide25mm.style.display = "none";
        twoSide25mm.style.display = "flex";
      }
    }

  }
  showTypeLanyardPreview(action){
  //  alert("lanyard type = " + action);
    previewLanyardTypeContainer.style.display = action;
  }
}

const previewLanyardTypeContainer = document.getElementById("preview-lanyard-type-container");

const oneSide10mm = document.getElementById("one-side-10mm");
const oneSide15mm = document.getElementById("one-side-15mm");
const oneSide20mm = document.getElementById("one-side-20mm");
const oneSide25mm = document.getElementById("one-side-25mm");
const oneSide30mm = document.getElementById("one-side-30mm");

const twoSide25mm = document.getElementById("two-side-25mm");

const previewLanyardType = new PreviewLanyardType();
