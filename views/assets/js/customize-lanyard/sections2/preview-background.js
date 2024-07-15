class PreviewBackgroundClass {
  constructor() {

  }
  showBackgroundPreview(action){
    previewBackgroundContainer.style.display = action;
  }
  showSelectedPreviewBackground(){
    var background = colourClass.getColourSelected();
    var description;

    if (background == "one-colour") {
        description = " Sleek and simple one-colour lanyard for a classic, professional look. Ideal for events, conferences, or everyday use, offering a uniform and elegant appearance to match any outfit or branding.";
    }
    else if (background == "two-colour") {
      description = "Stylish two-colour lanyard blending vibrant shades for a striking, dynamic appearance. Perfect for making a statement, enhancing brand visibility, and adding a touch of flair to any event.";
    }
    else if (background == "full-colour") {
      description = "Vibrant full-colour lanyard featuring multiple hues for a bold and eye-catching design. Great for promotional events, showcasing logos, and ensuring maximum visibility with a creative, colourful touch.";
    }


    previewBackgroundContainer.innerHTML = "";

    previewBackgroundContainer.innerHTML +=
    '<h3>'+background+'</h3>' +

    '<div class="img-preview-material">' +
      '<img src="../../views/assets/img/global/customize-lanyard/sections2/colour/'+background+'.png" alt="">' +
    '</div>' +
    '<div class="description-preview-material">' +
      '<p>' + description + '</p>' +
    '</div>'
    ;
  }
}
const previewBackgroundContainer = document.getElementById("preview-artwork-manual-container");
const previewBackgroundClass = new PreviewBackgroundClass();
