class CustomizeLanyard {

  constructor() {
    this.jsonLanyards = "";
    this.noColours = "one-colour";

      closeCustomizeLanyard.addEventListener("click" , function(){
      customizeLanyard.openCustomizeLanyard(false);

    })

    preview.addEventListener("click" , function(){
      if (currentIndex > 0) {
        currentIndex--;
        customizeLanyard.showCurrentSection();
      }
    })

    next.addEventListener("click" , function(){
      if (currentIndex < sections.length -1) {
        currentIndex++;
        customizeLanyard.showCurrentSection();
      }
    })

    this.showCurrentSection();
    document.addEventListener('click', this.outContainerCustomizeLanyard);

  }

  // Setter method for the materialSelected property.
  setJsonLanyards(value) {
    this.jsonLanyards = value;
  }

  // Getter method for the materialSelected property.
  getJsonLanyards() {
    return this.jsonLanyards;
  }

  outContainerCustomizeLanyard(event) {

  /*  const container = document.getElementById("options-customize-lanyard");
    const containerPreview = document.getElementById("preview-customize-lanyard");


      if (!container.contains(event.target) || !containerPreview.contains(event.target)) {
        if (customizeLanyard.getStateVisibilityPanelCustomeLanyard ()) {
          customizeLanyard.openCustomizeLanyard(false);
          customizeLanyard.setStateVisibilityPanelCustomeLanyard (false);
        }


      }
      else {
        customizeLanyard.openCustomizeLanyard(true);
        customizeLanyard.setStateVisibilityPanelCustomeLanyard (true);
      }*/
  }


  showCurrentSection(){

    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display= "none";
    }
    sections[currentIndex].style.display= "block";

    this.changePreviewNextSection(nameSectionCustomizeLanyard[currentIndex].innerHTML);


    if (currentIndex == 0) {
      preview.style.display= "none";
    }else {
      preview.style.display= "block";
    }


    if (currentIndex == sections.length-1) {
      next.style.display= "none";
    }else {
      next.style.display= "block";
    }

  }

  openCustomizeLanyard(action){
    if (action) {
      customizeLanyardPanel.style.display = "block";
    }
    else {
      customizeLanyardPanel.style.display = "none";
    }
  }

  changePreviewNextSection(sectionActive){
    if (sectionActive == "Material") {
      previewMaterial.showMaterialPreview("flex");
      previewLanyardType.showTypeLanyardPreview("none");
    }
    else if (sectionActive == "Lanyard type") {
      previewMaterial.showMaterialPreview("none");
      previewLanyardType.showTypeLanyardPreview("flex");
      previewLanyardType.showSelectedPreviewtTemplate();
    }
    else if (sectionActive == "Attachment") {

      previewLanyardType.showTypeLanyardPreview("flex");
      previewLanyardType.showSelectedPreviewtTemplate();
      previewColourClass.showColourPreview("none");
      previewArtworkManualClass.showArtworkManualPreview("none");
      
    }

    else if (sectionActive == "Colour Quantity") {

      previewArtworkManualClass.showArtworkManualPreview("none");
      previewColourClass.showColourPreview("flex");
      previewLanyardType.showTypeLanyardPreview("none");

    }

    else if (sectionActive == "Artwork - Manual") {

      previewColourClass.showColourPreview("none");
      previewArtworkManualClass.showArtworkManualPreview("flex");
      previewLanyardType.showTypeLanyardPreview("none");

    }

    else if (sectionActive == "Background") {
      previewArtworkManualClass.showArtworkManualPreview("none");
      previewLanyardType.showTypeLanyardPreview("flex");
    }
  }

  setStateVisibilityPanelCustomeLanyard (value){
    stateVisibilityPanelCustomeLanyard = value;
  }
  getStateVisibilityPanelCustomeLanyard (){
    return stateVisibilityPanelCustomeLanyard ;
  }




  //PARA PASAR A LAS RESPECTIVAS CLASES:


  setNoColours(value) {
    this.noColours = value;
  }
  getNoColours() {
    return this.noColours;
  }


}


var sections = document.querySelectorAll(".section");
var currentIndex = 0;
var preview = document.getElementById("preview");
var next = document.getElementById("next");


const customizeLanyardPanel = document.getElementById("customize-lanyard");

const closeCustomizeLanyard = document.getElementById("close-customize-lanyard");

const nameSectionCustomizeLanyard = document.getElementsByClassName("name-section-customize-lanyard");


var stateVisibilityPanelCustomeLanyard = false;


const customizeLanyard = new CustomizeLanyard();
