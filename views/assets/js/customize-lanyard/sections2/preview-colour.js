class PreviewColourClass {
  constructor() {

  }
  showColourPreview(action){
    previewColourContainer.style.display = action;
  }
  showSelectedPreviewtColour(){
    var colourSelected = colourClass.getColourSelected();
    var description;

    if (colourSelected == "one-colour") {
      description = " Professional lanyard with a background color and one additional color, perfect for events, conferences, and daily use.";
    }
    else if (colourSelected == "two-colour") {
      description = "Stylish lanyard with a background color and two additional colors for a vibrant, dynamic look, perfect for brand visibility and events.";
    }
    else if (colourSelected == "full-colour") {
      description = "Vibrant full-colour lanyard featuring multiple hues for a bold and eye-catching design. Great for promotional events, showcasing logos, and ensuring maximum visibility with a creative, colourful touch.";
    }




    previewColourContainer.innerHTML = "";

    previewColourContainer.innerHTML +=
    '<h3>'+colourSelected+'</h3>' +

    '<div class="img-preview-material">' +
      '<img src="../../views/assets/img/global/customize-lanyard/sections2/colour/'+colourSelected+'.png" alt="">' +
    '</div>' +
    '<div class="description-preview-material">' +
      '<p>' + description + '</p>' +
    '</div>'
    ;
  }
}
const previewColourContainer = document.getElementById("preview-colour-container");
const previewColourClass = new PreviewColourClass();
