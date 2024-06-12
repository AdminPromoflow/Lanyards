class AttachmentClass {
  constructor() {
    this.attachmentSelected = "none";

    //alert("haha");
    for (let i = 0; i < containerBoxesAttachment.length; i++) {
      containerBoxesAttachment[i].addEventListener("click", function(){
        if (i==0) {
          attachmentClass.setAttachmentSelected("none");
          attachmentPreviewClass.showSelectedPreviewtTemplate();

        }
        else if (i == 1) {
          attachmentClass.setAttachmentSelected("black");
          attachmentPreviewClass.showSelectedPreviewtTemplate();

        }
        else if (i == 2) {
          attachmentClass.setAttachmentSelected("coloured");
          attachmentPreviewClass.showSelectedPreviewtTemplate();

        }
        else if (i == 3) {
          attachmentClass.setAttachmentSelected("metal");
          attachmentPreviewClass.showSelectedPreviewtTemplate();

        }
      })
    }

    //alert(this.getAttachmentSelected() );
  }

  setAttachmentSelected(value) {
  this.attachmentSelected = value;
  }

  getAttachmentSelected() {
  return this.attachmentSelected;
  }


}


const containerBoxesAttachment = document.querySelectorAll(".container_boxes_attachment")
const attachmentClass = new AttachmentClass();
