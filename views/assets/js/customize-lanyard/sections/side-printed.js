
class SidePrinted {
  constructor() {
    this.sidePrintedSelected = "one-side";
  }

  setSidePrintedSelected(value) {
    this.sidePrintedSelected = value;
  }
  getSidePrintedSelected() {
    return this.sidePrintedSelected;
  }

  // Function to make the AJAX request
  makeAjaxRequestSetSidePrintedSelected(url, data) {
    // Make the request using the Fetch API
  /*  fetch(url, {
      method: "POST", // HTTP POST method to send data
      headers: {
        "Content-Type": "application/json" // Indicate that you're sending JSON
      },
      body: JSON.stringify(data) // Convert the JSON object to a JSON string and send it
    })
      .then(response => {
        if (response.ok) {
          return response.text(); // or response.json() if you expect a JSON response
        }
        throw new Error("Network error.");
      })
      .then(data => {
      //  alert(data);
       data = JSON.parse(data);
       oneTwoEndsClass.showSelectedOneTwoEnds(data["lanyardType"]);
       previewLanyardType.showSelectedPreviewtTemplate(data["lanyardType"]["type"], "25mm");

      })
      .catch(error => {
        console.error("Error:", error);
      });*/



    this.showSelectedSidePrinted(data['optionSelected']);

  }

  getDataSidePrintedAvailable(){
    var json = customizeLanyard.getJsonLanyards();
    var materialSelected = material.getMaterialSelected();
    var widthSelected = widthClass.getWidthSelected();

    let sidePrintedAvailable = [];
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

                    // Extracting the 'sidePrinted' array from the current width object
                    const sidePrinted = widths[j].sidePrinted;

                    // Iterating through each item in the 'sidePrinted' array
                    for (let k = 0; k < sidePrinted.length; k++) {
                        // Extracting the 'noSides' value from the current sidePrinted object
                        const noSides = sidePrinted[k].noSides;

                        sidePrintedAvailable[k] = sidePrinted[k].noSides;
                    }
                }
            }
        }
    }

    return sidePrintedAvailable;
  }

  cleanSidePrinted(){
    containerBoxSidePrinted.innerHTML = "";
  }
  drawSidePrintedAvailable(data, index){
    var imgLink;
    if (data == "one-side") {
      imgLink = "views/assets/img/global/customize-lanyard/sections/side-printed/one-side.png";
    }
    else {
      imgLink = "views/assets/img/global/customize-lanyard/sections/side-printed/two-side.png";
    }
    containerBoxSidePrinted.innerHTML +=
    '<div class="container_boxes_side_printed" onclick="sidePrintedClass.searchDataSidePrintedSelected(\'' + data  + '\', \' '+ index +'  \');">' +
        '<h3 class="priceDataSidePrinted">+£0 per unit</h3>' +
        '<h4 class="data-side-printed">'+ data+'</h4>' +
        '<img src="../../'+ imgLink +'" alt="">' +
      '</div>'
    ;
  }

  searchDataSidePrintedSelected(sidePrinted, index) {

    this.setSidePrintedSelected(sidePrinted);
    priceClass.setAmountSelected(priceClass.getAmountSelected());
    previewSidePrinted.showSelectedPreviewtTemplate();

  }


  showSelectedSidePrinted(data){

    alert(data);
    const containerBoxesSidePrinted = document.querySelectorAll(".container_boxes_side_printed");

    var index;
   for (var i = 0; i < dataSidePrinted.length; i++) {

     if (dataSidePrinted[i].textContent == data) {
       index = i;
     }
   }

    for (var i = 0; i < containerBoxesSidePrinted.length; i++) {
      if (index == i) {
        containerBoxesSidePrinted[i].style.border = "2px solid white";
      }
      else {
        containerBoxesSidePrinted[i].style.border = "2px solid transparent";
      }
    }

  }
}


const dataSidePrinted = document.querySelectorAll(".data-side-printed");
const containerBoxSidePrinted = document.getElementById("containers_boxes_side_printed");


const sidePrintedClass = new SidePrinted();
