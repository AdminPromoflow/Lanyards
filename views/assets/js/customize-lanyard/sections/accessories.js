class Accessories {
  constructor() {
    this.accessoriesSelected = "";
    for (let i = 0; i < containerBoxesAccessories.length; i++) {
  containerBoxesAccessories[i].addEventListener("click", function () {
    accessoriesClass.clickContainer(i);
  });
}

  for (var i = 0; i < subContainerBoxesAccessories.length; i++) {
    this.addBorderContainer(i, "transparent");
  }




  for (let i = 0; i < subContainerBoxesAccessories.length; i++) {
    subContainerBoxesAccessories[i].addEventListener("click", function () {
      accessoriesClass.selectAccessory(i);
    });
  }


  }
  clickContainer(i) {

   // Restablece los bordes de todos los contenedores de accesorios a transparente
   for (let j = 0; j < containerBoxesAccessories.length; j++) {
       containerBoxesAccessories[j].style.border = "2px solid transparent";
   }

   // Resalta el contenedor seleccionado con un borde blanco
   containerBoxesAccessories[i].style.border = "2px solid white";

   // Si el índice es 0, no se muestra ningún accesorio en el panel de vista previa
   if (i === 0) {
       previewAccessoriesClass.showAccessoryOnThePreviewPanel(null);
       priceClass.setPriceAccessory(0);
       priceClass.changePricePerLanyard();
   }

   // Resalta el primer div dentro del subcontenedor seleccionado con un borde blanco
  // subcontainersBoxesAccessories[i].querySelector("div").style.border = "2px solid white";

   // Determina qué accesorio mostrar en el panel de vista previa según el índice
   if (i === 1) {
       //previewAccessoriesClass.showAccessoryOnThePreviewPanel(0);
   } else if (i === 2) {
       //previewAccessoriesClass.showAccessoryOnThePreviewPanel(3);
   }
   else if (i == 3) {
    // previewAccessoriesClass.showAccessoryOnThePreviewPanel(6);

   }
   else if (i == 4) {
    // previewAccessoriesClass.showAccessoryOnThePreviewPanel(11);

   }

   // Alterna la visibilidad del subcontenedor seleccionado
   if (subcontainersBoxesAccessories[i].style.display === "flex") {

       // Oculta el subcontenedor si está visible
       subcontainersBoxesAccessories[i].style.display = "none";

       // Rota la flecha hacia su posición original
       arrowAccessories[i].querySelector("img").style.transform = "rotate(0deg)";
   } else {
     /*for (var j = 0; j < subcontainersBoxesAccessories.length; j++) {
       subcontainersBoxesAccessories[i].style.display = "none";
       arrowAccessories[i].querySelector("img").style.transform = "rotate(0deg)";

     }*/
       // Muestra el subcontenedor si está oculto
       subcontainersBoxesAccessories[i].style.display = "flex";

       // Rota la flecha para indicar que el subcontenedor está expandido
       arrowAccessories[i].querySelector("img").style.transform = "rotate(180deg)";
   }
}

  addBorderContainer(i, colour){
    subContainerBoxesAccessories[i].style.border = "1px solid" + colour;


  }
  selectAccessory(i){

    const text = priceDataAccessories[i].textContent;
    const number = parseFloat(text.match(/[-+]?[0-9]*\.?[0-9]+/)[0]);
    priceClass.setPriceAccessory(number);
    priceClass.changePricePerLanyard();

    // Restablece el borde de todos los elementos a transparente
    for (let j = 0; j < subContainerBoxesAccessories.length; j++) {
      subContainerBoxesAccessories[j].style.border = "1px solid transparent";
    }

    // Asigna borde blanco solo al elemento seleccionado
    subContainerBoxesAccessories[i].style.border = "1px solid white";

    previewAccessoriesClass.showAccessoryOnThePreviewPanel(i);
  }
  getAccessoriesSelected() {
        return this.accessoriesSelected;
    }

    // Setter para 'accessories'
    setAccessoriesSelected(newAccessories) {
        this.accessoriesSelected = newAccessories;
    }
}
const priceDataAccessories = document.querySelectorAll(".priceDataAccessories");
const arrowAccessories = document.querySelectorAll(".arrow_accessories");
const subcontainersBoxesAccessories = document.querySelectorAll(".subcontainers_boxes_accessories");
const subContainerBoxesAccessories = document.querySelectorAll(".subcontainer_boxes_accessories");
const containerBoxesAccessories = document.querySelectorAll(".container_boxes_accessories");
const accessoriesClass = new Accessories();
