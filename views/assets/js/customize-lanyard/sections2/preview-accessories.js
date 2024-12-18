class PreviewAccessoriesClass {
  constructor() {

  }

  showAccessoriesPreview(action){
    previewAccessoriesContainer.style.display = action;
  }

  showAccessoryOnThePreviewPanel(index){

    for (var i = 0; i < accessories_clear_plastic_closed_face.length; i++) {
      accessories_clear_plastic_closed_face[i].style.display = "none";
    }
    if (index == null) {

    }
    else {
      accessories_clear_plastic_closed_face[index].style.display = "block";

    }

  }

}
const accessories_clear_plastic_closed_face = document.querySelectorAll(".accessories_clear_plastic_closed_face");
const previewAccessoriesContainer = document.getElementById("preview_accessories");
const previewAccessoriesClass = new PreviewAccessoriesClass();
