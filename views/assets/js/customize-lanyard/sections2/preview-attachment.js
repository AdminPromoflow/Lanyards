class AttachmentPreviewClass {
  constructor() {

  }
  showSelectedPreviewtTemplate(){
    var attachmentSelected =  attachmentClass.getAttachmentSelected();

    const standar = document.querySelectorAll(".standar");
    const attachment = document.querySelectorAll(".attachment");
    const attachmentThing = document.querySelectorAll(".attachmentThing");


  //  twoSidePrinted[i].style.display = "none";

  if (attachmentSelected == "none") {
    for (let i = 0; i < standar.length; i++) {
      standar[i].style.display = "block";
    }
    for (var i = 0; i < attachment.length; i++) {
      attachment[i].style.display = "none";
    }

    for (var i = 0; i < attachmentThing.length; i++) {
      attachmentThing[i].style.display = "none";
    }

  }
  else if (attachmentSelected == "black") {
    for (let i = 0; i < standar.length; i++) {
      standar[i].style.display = "none";
    }
    for (var i = 0; i < attachment.length; i++) {
      attachment[i].style.display = "block";
    }
    for (var i = 0; i < attachmentThing.length; i++) {
      attachmentThing[i].style.display = "block";
      attachmentThing[i].innerHTML =
      '<img class="imgattachment" src="../../views/assets/img/global/customize-lanyard/sections/attachment/quick-release-black.png" alt="">';
    }
    }
  else if (attachmentSelected == "coloured") {
    for (let i = 0; i < standar.length; i++) {
      standar[i].style.display = "none";
    }
    for (var i = 0; i < attachment.length; i++) {
      attachment[i].style.display = "block";
    }
    for (var i = 0; i < attachmentThing.length; i++) {
      attachmentThing[i].style.display = "block";
      attachmentThing[i].innerHTML =
      '<img class="imgattachment" src="../../views/assets/img/global/customize-lanyard/sections/attachment/quick-release-plastics-colour.png" alt="">';

    }
  }
  else if (attachmentSelected == "metal") {
    for (let i = 0; i < standar.length; i++) {
      standar[i].style.display = "none";
    }
    for (var i = 0; i < attachment.length; i++) {
      attachment[i].style.display = "block";
    }
    for (var i = 0; i < attachmentThing.length; i++) {
      attachmentThing[i].style.display = "block";
      attachmentThing[i].innerHTML =
      '<img class="imgattachment" src="../../views/assets/img/global/customize-lanyard/sections/attachment/quick-release-metal.png" alt="">';

    }
  }


  }
}
const attachmentPreviewClass = new AttachmentPreviewClass();
