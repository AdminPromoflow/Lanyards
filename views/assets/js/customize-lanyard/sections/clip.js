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
        '<h3 class="priceDataClip">+£'+data["price"]+' per unit</h3>' +
        '<img class="imgClip" src="../../'+imgClip+'" alt="">' +
      '</div>'
    ;
  }
  updateClip(){

  }

  searchDataClipSelected(data, index) {
  //  alert(JSON.stringify(data));
    clipClass.setClipSelected(data);
    clipClass.showSelectedClip(data);
    priceClass.setAmountSelected(priceClass.getAmountSelected());
  //  previewSidePrinted.showSelectedPreviewtTemplate();

  for (var i = 0; i < os25_clip.length; i++) {
    os25_clip[i].innerHTML = "";
  }
  for (var i = 0; i < ts25_clip.length; i++) {
    ts25_clip[i].innerHTML = "";
  }

  var typeLanyard =  oneTwoEndsClass.getTypeLanyardSelected();
  //alert(typeLanyard);

  if (typeLanyard == "one-end") {
    for (var i = 0; i < os25_clip.length; i++) {
      os25_clip[i].innerHTML =         '<img class="" src="../../views/assets/img/global/customize-lanyard/sections/clip/one-end/'+data+'.png" alt="">'
;
    }
  }
  else {
    for (var i = 0; i < os25_clip.length; i++) {
      os25_clip[i].innerHTML =         '<img class="" src="../../views/assets/img/global/customize-lanyard/sections/clip/two-ends/'+data+'.png" alt="">'
;
    }
  }


  }

  showSelectedClip(data){
    const container_boxes_clip = document.querySelectorAll(".container_boxes_clip");
    const dataClip = document.querySelectorAll(".dataClip");
    const clip = data;

    var index;
   for (var i = 0; i < dataClip.length; i++) {

     if (dataClip[i].textContent == clip) {
    //   alert(data + dataClip[i].textContent);

       index = i;
     }
   }

    for (var i = 0; i < container_boxes_clip.length; i++) {
      if (index == i) {
        container_boxes_clip[i].style.border = "2px solid white";
      }
      else {
        container_boxes_clip[i].style.border = "2px solid transparent";
      }
    }

  }


}

const containers_boxes_clip = document.getElementById("containers_boxes_clip");

const os25_clip = document.querySelectorAll(".os25-clip");
const ts25_clip = document.querySelectorAll(".ts25-clip");



const clipClass = new ClipClass();
