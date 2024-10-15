class ClipClass {

  constructor() {
    this.clipSelected = "dog_clip";
  }

  setClipSelected(value) {
    this.clipSelected = value;
  }

  getClipSelected() {
    return this.clipSelected;
  }

  cleanClip(){
    containers_boxes_clip.innerHTML = "";
  }




  getDataClipAvailable(){
      var json = customizeLanyard.getJsonLanyards();
      var materialSelected = material.getMaterialSelected();
      var widthSelected = widthClass.getWidthSelected();



      let clipAvailable = [];
      // Iterating through each item in the JSON array
      for (let i = 0; i < json.length; i++) {

          // Extracting the 'materials' array from the current JSON item
          const material = json[i].materials.material;

          // Checking if the material matches the selected material
          if (material == materialSelected) {


              // Extracting the 'widths' array from the current JSON item
              const widths = json[i].materials.width;
              // Iterating through each width in the 'widths' array
              for (let j = 0; j < widths.length; j++) {
                  // Extracting the 'width' value from the current width object
                  const width = widths[j].width;

                  if (width == widthSelected) {

                      // Extracting the 'clips' array from the current width object
                      const clips = widths[j].clips;

                      // Iterating through each item in the 'clips' array
                      for (let k = 0; k < clips.length; k++) {
                          // Extracting the 'name', 'imgLink', and 'price' from the current clip object
                          const name = clips[k].name;
                          const imgLinkOneEnd = clips[k].imgLinkOneEnd;
                          const imgLinkTwoEnd = clips[k].imgLinkTwoEnd;
                          const price = clips[k].price;

                          // Storing the clip data in clipAvailable array
                          clipAvailable.push({name, imgLinkOneEnd, imgLinkTwoEnd, price});
                      }
                  }
              }
          }
      }

      return clipAvailable;
  }

  selectClip(){
    // Clean the clip options
    clipClass.cleanClip();

    // Get the available clip options
    let clipAvailable = clipClass.getDataClipAvailable();

    // Iterate through the available clip options and draw them
    for (var i = 0; i < clipAvailable.length; i++) {
      clipClass.drawClipAvailable(clipAvailable[i], i);
    }
  }

  drawClipAvailable(data, index){
  //  alert(JSON.stringify(data));
  var imgClip ;
  if (oneTwoEndsClass.getTypeLanyardSelected() == "one-end") {
      imgClip = data["imgLinkOneEnd"];
  }
  else {
    imgClip = data["imgLinkTwoEnd"];
  }

    containers_boxes_clip.innerHTML +=
    '<div class="container_boxes_clip"  onclick="clipClass.searchDataClipSelected(\'' + data["name"]  + '\', \' '+ index +'  \');"  >' +
        '<h3 class="dataClip">'+data["name"]+' </h3>' +
        '<img class="imgClip" src="../../'+imgClip+'" alt="">' +
        '<h4 class="priceDataClip">+£'+data["price"]+' per unit</h4>' +
      '</div>'
    ;
  }
  updateClip(){

  }

  searchDataClipSelected(data, index) {
    clipClass.setClipSelected(data);
    clipClass.showSelectedClip();
    clipClass.getPriceClipSelected(index);
    priceClass.setAmountSelected(priceClass.getAmountSelected());
    previewClip.showPreviewSelectedClip(data);
  }

  getPriceClipSelected(index){
    const priceDataClip = document.querySelectorAll(".priceDataClip");

    for (var i = 0; i < priceDataClip.length; i++) {
      if (i == index) {

        let text = priceDataClip[i].innerHTML+"";
        let number = +text.match(/-?\d+\.\d+|\d+/); // Finds the first number (float or integer), which can be negative.

        if (number >= 0) {

         let lanyardType = oneTwoEndsClass.getTypeLanyardSelected() + "";

            let result = number.toFixed(2);

            if (lanyardType == "two-end") {
              result = result * 2;
            }
            priceClass.setPriceClip(result); // Displays the positive float number with two decimals.
            priceClass.changePricePerLanyard();
        } else {
          console.log("The number clip is negative or no numbers were found. Error: (clip.js line 58)");
        }
      }
    }
  }



  showSelectedClip() {
      // Get the selected clip and convert it to a string
      var data = clipClass.getClipSelected() + "";
      // Select all elements with the class "container_boxes_clip"
      const container_boxes_clip = document.querySelectorAll(".container_boxes_clip");
      // Select all elements with the class "dataClip"
      const dataClip = document.querySelectorAll(".dataClip");

      // Initialize index to -1 to handle cases where no match is found
      var index = -1;
      var dataHTMLclip;

      // Iterate through all dataClip elements
      for (var i = 0; i < dataClip.length; i++) {
          // Get the text content of dataClip[i]
          dataHTMLclip = dataClip[i].textContent;

          // Remove all whitespace from the text content
          dataHTMLclip = dataHTMLclip.replace(/\s+/g, '');

          // Compare the text content without spaces to the selected data
          if (dataHTMLclip == data) {
              // If a match is found, update the index and break the loop
              index = i;
              break;
          }
      }

      // Iterate through all container_boxes_clip elements
      for (let i = 0; i < container_boxes_clip.length; i++) {
          // If the index matches, set a white border
          if (index == i) {
              container_boxes_clip[i].style.border = "2px solid white";
          } else {
              // If the index does not match, set a transparent border
              container_boxes_clip[i].style.border = "2px solid transparent";
          }
      }
  }
}

const containers_boxes_clip = document.getElementById("containers_boxes_clip");





const clipClass = new ClipClass();
