class PreviewSidePrinted {
  constructor() {

  }
  showSelectedPreviewtTemplate(){
    var sidePrintedSelected = sidePrintedClass.getSidePrintedSelected();
  //  previewLanyardTypeContainer.innerHTML = "";
    if (sidePrintedSelected == "one-side") {

      urgentForDelete.style.display = "none";
    }
    else if (sidePrintedSelected == "two-side") {
      urgentForDelete.style.display = "block";
    }

  }
  showTypeLanyardPreview(action){
  //  alert("lanyard type = " + action);
    previewLanyardTypeContainer2.style.display = action;
  }
}


/*

<div id="one-side-20mm" class="one-side-25mm">
  <div class="container-one-side-25mm">
    <div class="os25-neck">
    </div>
    <div class="os25-left">
    </div>
    <div class="os25-right">
    </div>
    <div class="os25-img">
      <img class="" src="../../views/assets/img/global/customize-lanyard/sections2/templates/20-one-end.png" alt="">
    </div>
    <div class="os25-clip">
      <img class="" src="../../views/assets/img/global/customize-lanyard/sections2/clips/25-one-end-clip.png" alt="">
    </div>
  </div>
</div>

*/

const previewLanyardTypeContainer2 = document.getElementById("preview-lanyard-type-container");

const urgentForDelete = document.getElementById("urgentForDelete");


const previewSidePrinted = new PreviewSidePrinted();
