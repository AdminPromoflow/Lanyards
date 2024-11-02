class Accessories {
  constructor() {
    for (let i = 0; i < containerBoxesAccessories.length; i++) {
  containerBoxesAccessories[i].addEventListener("click", function () {
    // Verificamos el estado actual de 'display' y alternamos entre 'flex' y 'none'
    if (subcontainersBoxesAccessories[i].style.display === "flex") {
      subcontainersBoxesAccessories[i].style.display = "none";
    } else {
      subcontainersBoxesAccessories[i].style.display = "flex";
    }
  });
}

  for (var i = 0; i < subcontainerBoxesAccessories.length; i++) {
    subcontainerBoxesAccessories[i].style.border = "1px solid transparent";
  }



  for (let i = 0; i < subcontainerBoxesAccessories.length; i++) {
    subcontainerBoxesAccessories[i].addEventListener("click", function () {
      // Restablece el borde de todos los elementos a transparente
      for (let j = 0; j < subcontainerBoxesAccessories.length; j++) {
        subcontainerBoxesAccessories[j].style.border = "1px solid transparent";
      }

      // Asigna borde blanco solo al elemento seleccionado
      subcontainerBoxesAccessories[i].style.border = "1px solid white";

      previewAccessoriesClass.showAccessoryOnThePreviewPanel(i);
    });
  }


  }
}
const subcontainersBoxesAccessories = document.querySelectorAll(".subcontainers_boxes_accessories");
const subcontainerBoxesAccessories = document.querySelectorAll(".subcontainer_boxes_accessories");
const containerBoxesAccessories = document.querySelectorAll(".container_boxes_accessories");
const accessoriesClass = new Accessories();
