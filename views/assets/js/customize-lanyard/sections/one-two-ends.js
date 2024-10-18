class OneTwoEnds {
  constructor() {
    this.jsonLanyardType;
    this.setTypeLanyardSelected("one-end");
    this.showSelectedOneTwoEnds();

  }


    getTypeLanyardSelected() {
      return this.typeLanyard;
    }

    // Setter method for amount property
    setTypeLanyardSelected(value) {
      this.typeLanyard = value;
    }
    setJsonLanyardType(data){
      this.jsonLanyardType = data;
    }
    getJsonLanyardType(){
      return this.jsonLanyardType;
    }
    selectOneTwoEnds(){
      // Show the selected preview template
      //this.showSelectedPreviewtTemplate();
      var data = this.getJsonLanyardType();
      // Clean the oneTwoEnds options
      this.cleanOneTwoEnds();

      // Iterate through the allLanyardTypes and create oneTwoEnds elements
      for (var i = 0; i < data.length; i++) {
        this.createOneTwoEnds(data[i], i);
      }

      // Display the selected "one" or "two" ends
      this.showSelectedOneTwoEnds();
    }
  // Function to make the AJAX request
  makeAjaxRequestSetTypeLanyardSelected(url, data) {
    // Make the request using the Fetch API
    fetch(url, {
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
       data = JSON.parse(data);


    //   oneTwoEndsClass.showSelectedOneTwoEnds();
    //   previewLanyardType.showSelectedPreviewtTemplate();

      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  showSelectedOneTwoEnds(){
    var typeLanyardSelected = this.getTypeLanyardSelected();


    const dataOneTwoEnds = document.querySelectorAll(".data-one-two-ends");
    const containerBoxesOneTwoEnds = document.querySelectorAll(".container_boxes_one_two_ends");
    var index;
   for (var i = 0; i < dataOneTwoEnds.length; i++) {
     if (dataOneTwoEnds[i].textContent == typeLanyardSelected) {
       index = i;
     }
   }

    for (var i = 0; i < containerBoxesOneTwoEnds.length; i++) {
      if (index == i) {
        containerBoxesOneTwoEnds[i].style.border = "2px solid white";
      }
      else {
        containerBoxesOneTwoEnds[i].style.border = "2px solid transparent";
      }
    }
  }
  createOneTwoEnds(data, index){
    containersBoxesOneTwoEnds.innerHTML +=
    '<div class="container_boxes_one_two_ends"  onclick="oneTwoEndsClass.searchDataTypeLanyardSelected(\'' + data["type"] + '\', \'' + data["price"] + '\');">'+
      '<h3 class="price-one_two_ends">+£'+data["price"]+' per unit</h3>'+
      '<h4 class="data-one-two-ends">'+data["type"]+'</h4>'+
      '<img src="../../'+data["imgLink"]+'" alt="">'+
    '</div>'
    ;
  }


  searchDataTypeLanyardSelected(typeLanyardType, priceLanyardType){
    const url = "../../controller/lanyard/material.php";
    const data = {
      action: "setTypeLanyardSelected",
      optionSelected:   typeLanyardType
    };
  //    oneTwoEndsClass.makeAjaxRequestSetTypeLanyardSelected(url, data);

    oneTwoEndsClass.setTypeLanyardSelected(typeLanyardType);
    oneTwoEndsClass.showSelectedOneTwoEnds();
    previewLanyardType.showSelectedPreviewtTemplate();

    priceClass.setPriceLanyardType(priceLanyardType);
    priceClass.changePricePerLanyard()
    previewLanyardType.showSelectedPreviewtTemplate();
  }
  cleanOneTwoEnds(){
    containersBoxesOneTwoEnds.innerHTML = "";
  }

}


const dataOneTwoEnds = document.querySelectorAll(".data-one-two-ends");

const containerBoxesOneTwoEnds = document.querySelectorAll(".container_boxes_one_two_ends");

const containersBoxesOneTwoEnds = document.getElementById('containers_boxes_one_two_ends');

const oneTwoEndsClass = new OneTwoEnds();
