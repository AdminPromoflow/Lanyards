
class SidePrinted {
  constructor() {
    for (let i = 0; i < containerBoxesSidePrinted.length; i++) {
      containerBoxesSidePrinted[i].addEventListener("click", function(){

    //    alert(containerBoxesSidePrinted.length);

        const url = "../../controller/lanyard/lanyard-type.php";
        const data = {
          action: "setSidePrintedSelected",
          optionSelected: dataSidePrinted[i].textContent

        };

        sidePrinted.makeAjaxRequestSetSidePrintedSelected(url, data);

      })
    }
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
  showSelectedSidePrinted(data){
    var index;
   for (var i = 0; i < dataSidePrinted.length; i++) {

    // alert(JSON.stringify(data));

     if (dataSidePrinted[i].textContent == data) {
       //alert(data["type"]);
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
const containerBoxesSidePrinted = document.querySelectorAll(".container_boxes_side_printed");

const sidePrinted = new SidePrinted();
