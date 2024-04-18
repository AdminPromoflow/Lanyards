class PreviewMaterial {
  constructor() {
    //  this.showMaterialPreview("flex");
  }
  showSelectedPreviewtMaterial(data){
    previewMaterialContainer.innerHTML = "";

    previewMaterialContainer.innerHTML +=
    '<h3>'+data['material']+'</h3>' +

    '<div class="img-preview-material">' +
      '<img src="../../'+data['link']+'" alt="">' +
    '</div>' +
    '<div class="description-preview-material">' +
      '<p>'+data['description']+'</p>' +
    '</div>'
    ;
  }
  showMaterialPreview(action){
    previewMaterialContainer.style.display = action;
  }
}

const previewMaterialContainer = document.getElementById("preview-material-container");
const  previewMaterial = new PreviewMaterial();
