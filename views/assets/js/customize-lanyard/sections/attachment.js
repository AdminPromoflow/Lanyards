class AttachmentClass {
  constructor() {
    this.attachmentSelected = "none";



    //alert(this.getAttachmentSelected() );
  }
  searchDataAttachmentSelected(attachment, index, price){
    attachmentClass.setAttachmentSelected(attachment);
    attachmentClass.showSelectedAttachment();
    attachmentPreviewClass.showSelectedPreviewtTemplate();
    priceClass.setPriceAttachment(price);
    priceClass.changePricePerLanyard();
  }

  showSelectedAttachment() {
    // Get the selected attachment value
    var data = attachmentClass.getAttachmentSelected();

    // Select all elements with the class "container_boxes_attachment"
    const containerBoxesAttachment = document.querySelectorAll(".container_boxes_attachment");
    // Select all elements with the class "data_attachment"
    const dataAttachment = document.querySelectorAll(".dataAttachment");

    // Initialize index variable to -1
    var index = -1;
    // Iterate through all elements in dataAttachment
    for (var i = 0; i < dataAttachment.length; i++) {
    //  alert(dataAttachment[i].textContent + data);

      // If the text content of the current element matches the selected data
      if (dataAttachment[i].textContent == data) {

        // Set the index to the current position
        index = i;
        // Exit the loop once the matching element is found
        break;
      }
    }

    // Iterate through all elements in containerBoxesAttachment
    for (var i = 0; i < containerBoxesAttachment.length; i++) {
      // If the current index matches the found index
      if (index == i) {
        // Set the border of the matching element to "2px solid white"
        containerBoxesAttachment[i].style.border = "2px solid white";
      } else {
        // Set the border of non-matching elements to "2px solid transparent"
        containerBoxesAttachment[i].style.border = "2px solid transparent";
      }
    }
  }


  setAttachmentSelected(value) {
  this.attachmentSelected = value;
//  alert(value);
  }

  getAttachmentSelected() {
  return this.attachmentSelected;
  }


}


const containerBoxesAttachment = document.querySelectorAll(".container_boxes_attachment")
const attachmentClass = new AttachmentClass();
