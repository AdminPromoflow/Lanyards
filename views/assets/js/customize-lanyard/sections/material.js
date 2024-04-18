class Material {
  constructor() {
    this.materialSelected = "Tubular";
    var jsonMaterials = {};
    const url = "../../controller/lanyard/material.php";
    const data = {
      action: "getMaterials"
    };
    this.makeAjaxRequestGetAllMaterials(url, data);
  }
  getMaterialSelected() {
    return this.materialSelected;
  }

  // Setter method for amount property
  setMaterialSelected(value) {
    this.materialSelected = value;
  }
  // Function to make the AJAX request
  makeAjaxRequestGetAllMaterials(url, data) {
    // Make the request using the Fetch API
    fetch(url,{
      method: "POST", // HTTP POST method to send data
      headers: {
        "Content-Type": "application/json" // Indicate that you're sending JSON
      },
      body: JSON.stringify(data) // Convert the JSON object to a JSON string and send it.
    })
      .then(response => {
        if (response.ok) {
          return response.text(); // or response.json() if you expect a JSON response
        }
        throw new Error("Network error.");
      })
      .then(data => {

        data = JSON.parse(data);

        material.setJsonMaterials(data);
        containersBoxesMaterial.innerHTML = "";



        material.setMaterialSelected("Tubular");
        priceClass.setAmountSelected(1000);

        var jsonMaterials = {};
        jsonMaterials = material.getJsonMaterials();


        for (var i = 0; i < jsonMaterials.materials.length; i++) {
          material.createMaterials(data["materials"][i], priceClass.calculatePricePerMaterialWithAmount(jsonMaterials["materials"][i]));
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  createMaterials(data, price){
    containersBoxesMaterial.innerHTML +=
    '<div class="container_boxes_material"  onclick="material.searchDataMaterialSelected(\'' + data['material']  + '\');">'  +
      '<h4 class="dataMaterial">'+data['material']+'</h4>' +
      '<h3 class="pricesDataMaterial">£ '+ price +' per unit</h3>' +
    '</div>'
    ;
  }
  updatePriceMaterial(){
    var jsonMaterials = {};
    jsonMaterials = material.getJsonMaterials();
    const pricesDataMaterial = document.querySelectorAll(".pricesDataMaterial");

    for (var i = 0; i < jsonMaterials.materials.length; i++) {
    pricesDataMaterial[i].innerHTML = "£" +priceClass.calculatePricePerMaterialWithAmount(jsonMaterials["materials"][i]) + " per unit";
    }
  }
  searchDataMaterialSelected(material){


    const url = "../../controller/lanyard/material.php";
    const data = {
      action: "setMaterialSelected",
      optionSelected: material

    };
    this.setMaterialSelected(material);
    priceClass.setAmountSelected(priceClass.getAmountSelected());

    this.makeAjaxRequestSetMaterialSelected(url, data);
  }
  // Function to make the AJAX request
  makeAjaxRequestSetMaterialSelected(url, data) {

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

        material.showSelectedMaterial(data["material"]);
        previewMaterial.showSelectedPreviewtMaterial(data["material"]);
        material.updatePriceMaterial();



        var jsonMaterials = {};
        jsonMaterials = material.getJsonMaterials();
        for (var i = 0; i < jsonMaterials.materials.length; i++) {
          if (jsonMaterials.materials[i].material = data["material"]) {
           priceClass.calculatePricePerMaterialWithAmount(jsonMaterials["materials"][i]);

          }
        }
        oneTwoEndsClass.cleanOneTwoEnds();
        widthClass.cleanWidth();

        for (var i = 0; i < data["allLanyardTypes"].length; i++) {
          oneTwoEndsClass.createOneTwoEnds(data["allLanyardTypes"][i], i);
        }

        for (var i = 0; i < data["allWidth"].length; i++) {
          widthClass.createWidth(data["allWidth"][i], i);
        }

        oneTwoEndsClass.showSelectedOneTwoEnds(data["lanyardTypesSelected"]);

      })
      .catch(error => {
        console.error("Error:", error);
      });
  }


  showSelectedMaterial(data) {
      const containerBoxesMaterial = document.querySelectorAll(".container_boxes_material");
      const material = data["material"];

      // Reiniciar el estilo de todos los contenedores
      containerBoxesMaterial.forEach(container => {
          container.style.border = "2px solid transparent";
      });

      // Buscar y resaltar el contenedor del material deseado
      containerBoxesMaterial.forEach(container => {
          const dataMaterial = container.querySelector(".dataMaterial");
          if (dataMaterial.textContent === material) {
              container.style.border = "2px solid white";
          }
      });
  }
  setJsonMaterials(jsonMaterials) {
    this.jsonMaterials = jsonMaterials; // Asigna los valores al objeto JSON
  }
  getJsonMaterials() {
   return this.jsonMaterials; // Retorna el objeto JSON almacenado
 }

}



const containersBoxesMaterial = document.getElementById("containers_boxes_material");
const material = new Material();
