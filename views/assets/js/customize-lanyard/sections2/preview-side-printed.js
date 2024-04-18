class PreviewSidePrinted {
  constructor() {

  }
  showSelectedPreviewtTemplate(){

  }
  showTypeLanyardPreview(action){
  //  alert("lanyard type = " + action);
    previewLanyardTypeContainer2.style.display = action;
  }
}

const previewLanyardTypeContainer2 = document.getElementById("preview-lanyard-type-container");
const previewSidePrinted = new PreviewSidePrinted();
