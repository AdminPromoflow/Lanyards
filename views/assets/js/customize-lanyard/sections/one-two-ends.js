class OneTwoEnds {
  constructor() {
    for (let i = 0; i < containerBoxesOneTwoEnds.length; i++) {
      containerBoxesOneTwoEnds[i].addEventListener("click", function(){

        const url = "../../controller/lanyard/lanyard-type.php";
        const data = {
          action: "setTypeLanyardSelected",
          optionSelected: dataOneTwoEnds[i].textContent

        };
        oneTwoEndsClass.makeAjaxRequestSetTypeLanyardSelected(url, data);

      })
    }
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
      //  alert(data);
       data = JSON.parse(data);
       oneTwoEndsClass.showSelectedOneTwoEnds(data["lanyardType"]);
       previewLanyardType.showSelectedPreviewtTemplate(data["lanyardType"]["type"], "25mm");

      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  showSelectedOneTwoEnds(data){
    const dataOneTwoEnds = document.querySelectorAll(".data-one-two-ends");
    const containerBoxesOneTwoEnds = document.querySelectorAll(".container_boxes_one_two_ends");
    var index;
  //alert(dataOneTwoEnds[0].textContent);
   for (var i = 0; i < dataOneTwoEnds.length; i++) {

     if (dataOneTwoEnds[i].textContent == data) {
       //alert(data["type"]);

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
    '<div class="container_boxes_one_two_ends">'+
      '<h3 class="price-one_two_ends">+£'+data["price"]+' per unit</h3>'+
      '<h4 class="data-one-two-ends">'+data["type"]+'</h4>'+
      '<img src="../../'+data["imgLink"]+'" alt="">'+
    '</div>'
    ;
  }
  cleanOneTwoEnds(){
    containersBoxesOneTwoEnds.innerHTML = "";
  }
}


const dataOneTwoEnds = document.querySelectorAll(".data-one-two-ends");

const containerBoxesOneTwoEnds = document.querySelectorAll(".container_boxes_one_two_ends");

const containersBoxesOneTwoEnds = document.getElementById('containers_boxes_one_two_ends');

const oneTwoEndsClass = new OneTwoEnds();
