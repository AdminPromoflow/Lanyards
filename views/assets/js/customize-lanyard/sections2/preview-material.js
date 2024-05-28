class PreviewMaterial {
  constructor() {
    //  this.showMaterialPreview("flex");
  }
  showSelectedPreviewtMaterial(data){
    var json = customizeLanyard.getJsonLanyards();
    var materialSelected = data;


    var material = "";
    var link = "";
    var description = "";

    for (var i = 0; i < json.length; i++) {
      if (json[i]["materials"]["material"] == materialSelected) {
         material = json[i]["materials"]["material"];
         link = json[i]["materials"]["linkImg"];
         description = json[i]["materials"]["description"];
      }
    }


    previewMaterialContainer.innerHTML = "";

    previewMaterialContainer.innerHTML +=
    '<h3>'+material+'</h3>' +

    '<div class="img-preview-material">' +
      '<img src="../../'+link+'" alt="">' +
    '</div>' +
    '<div class="description-preview-material">' +
      '<p>'+description+'</p>' +
    '</div>'
    ;
  }
  showMaterialPreview(action){
    previewMaterialContainer.style.display = action;
  }
}

const previewMaterialContainer = document.getElementById("preview-material-container");
const  previewMaterial = new PreviewMaterial();
