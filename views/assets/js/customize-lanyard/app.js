class CustomizeLanyard {
  constructor() {
    this.jsonLanyards = "";
    this.noColours = "one-colour";
    this.currentSectionOpen = 0;

    // Suponiendo que closeCustomizeLanyard, preview y next están definidos en el contexto global
    this.initializeEventListeners();
    this.showCurrentSection(this.currentSectionOpen);
    this.changePreviewNextSection();
  //  this.getLanyardsActive();
  }
  getLanyardsActive(){
    var lanyardActive;

    var lanyardType = oneTwoEndsClass.getTypeLanyardSelected();
    var width = widthClass.getWidthSelected();
    var attachment = attachmentClass.getAttachmentSelected();

    if (lanyardType == 'one-end' && width == '10mm' && attachment == 'none') {
      lanyardActive = document.querySelectorAll('.draw-os-10mm');
      //alert("hola");
    }

    else if (lanyardType == 'one-end' && width == '15mm' && attachment == 'none') {
      lanyardActive = document.querySelectorAll('.draw-os-15mm');
      //alert("hola");
    }
    else if (lanyardType == 'one-end' && width == '20mm' && attachment == 'none') {
      lanyardActive = document.querySelectorAll('.draw-os-20mm');
      //alert("hola");
    }
    else if (lanyardType == 'one-end' && width == '25mm' && attachment == 'none') {
      lanyardActive = document.querySelectorAll('.draw-os-25mm');
      //alert("hola");
    }
    else if (lanyardType == 'one-end' && width == '30mm' && attachment == 'none') {
      lanyardActive = document.querySelectorAll('.draw-os-30mm');
      //alert("hola");
    }



    else if (lanyardType == 'two-end' && width == '10mm') {
      lanyardActive = document.querySelectorAll('.draw-ts-10mm');
      //alert("hola");
    }
    else if (lanyardType == 'two-end' && width == '15mm') {
      lanyardActive = document.querySelectorAll('.draw-ts-15mm');
      //alert("hola");
    }
    else if (lanyardType == 'two-end' && width == '20mm') {
      lanyardActive = document.querySelectorAll('.draw-ts-20mm');
      //alert("hola");
    }
    else if (lanyardType == 'two-end' && width == '25mm') {
      lanyardActive = document.querySelectorAll('.draw-ts-25mm');
      //alert("hola");
    }
    else if (lanyardType == 'two-end' && width == '30mm') {
      lanyardActive = document.querySelectorAll('.draw-ts-30mm');
      //alert("hola");
    }


    else if (lanyardType == 'one-end' && width == '10mm' && attachment != 'none') {
     lanyardActive = document.querySelectorAll('.draw-os-wa-10mm');
      //alert("hola");
    }

    else if (lanyardType == 'one-end' && width == '15mm' && attachment != 'none') {
      lanyardActive = document.querySelectorAll('.draw-os-wa-15mm');
      //alert("hola");
    }
    else if (lanyardType == 'one-end' && width == '20mm' && attachment != 'none') {
      lanyardActive = document.querySelectorAll('.draw-os-wa-20mm');
      //alert("hola");
    }
    else if (lanyardType == 'one-end' && width == '25mm' && attachment != 'none') {
      lanyardActive = document.querySelectorAll('.draw-os-wa-25mm');
      //alert("hola");
    }
    else if (lanyardType == 'one-end' && width == '30mm' && attachment != 'none') {
      lanyardActive = document.querySelectorAll('.draw-os-wa-30mm');
      //alert("hola");
    }

    return lanyardActive;
  //  alert(lanyardType + width + attachment);
  }


  initializeEventListeners() {
    const closeCustomizeLanyard = document.getElementById("close-customize-lanyard");
    const preview = document.getElementById("preview");
    const next = document.getElementById("next");

    if (closeCustomizeLanyard) {
      closeCustomizeLanyard.addEventListener("click", () => this.openCustomizeLanyard(false));
    }

    if (preview) {
      preview.addEventListener("click", () => this.handlePreviewClick());
    }

    if (next) {
      next.addEventListener("click", () => this.handleNextClick());
    }
  }

  handlePreviewClick() {
    if (this.currentSectionOpen > 0) {
      this.currentSectionOpen--;
      this.changePreviewNextSection();
    }
  }

  handleNextClick() {
    this.currentSectionOpen++;
    this.changePreviewNextSection();
  }

  getCurrentSectionOpen() {
    return this.currentSectionOpen;
  }

  setCurrentSectionOpen(newSection) {
    this.currentSectionOpen = newSection;
  }

  setJsonLanyards(value) {
    this.jsonLanyards = value;
  }

  getJsonLanyards() {
    return this.jsonLanyards;
  }

  showCurrentSection(currentSection) {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      section.style.display = index === currentSection ? "block" : "none";
    });
  }

  openCustomizeLanyard(action) {
    const customizeLanyardPanel = document.getElementById("customize-lanyard");
    if (customizeLanyardPanel) {
      customizeLanyardPanel.style.display = action ? "block" : "none";
    }
  }

  changePreviewNextSection() {
   if (this.currentSectionOpen == 0) {//Material
     this.openMaterial();
   }
   else if (this.currentSectionOpen == 1) { // Lanyard type
     this.openLanyardType();
   }
   else if (this.currentSectionOpen == 2) { // Width
     this.openWidth();
   }
   else if (this.currentSectionOpen == 3) { // SidePrinted
     this.openSidePrinted();
   }
   else if (this.currentSectionOpen == 4) { // Clip
     this.openClips();
   }
   else if (this.currentSectionOpen == 5) {// Attachment
     this.openAttachment();
   }
   else if (this.currentSectionOpen == 6) {//Colour Quantity
     this.openColourQuantity();
   }
   else if (this.currentSectionOpen == 7) {//Artwork - Manual
     this.openArtWorkManual();
   }
   else if (this.currentSectionOpen == 8) {
     if (artworkManualClass.getArtworkManual() == "manual"){
       customizeLanyard.openBackgroundColour();
    }
    else {
      artworkClass.showHideArtwork(true);
      artworkManualClass.showHideArtworkManual(false);
      previewArtworkManualClass.showArtworkManualPreview("none");
      artworkPreviewClass.showHidePreviewArtwork(true);
    }
   }
   else if (this.currentSectionOpen == 9) {
     if (artworkManualClass.getArtworkManual() == "manual"){
       this.openArtWorkManual();
    }
    else {
      alert("Seleccionaste Artwork")
    }
   }
   else if (this.currentSectionOpen == 10) {

     if (artworkManualClass.getArtworkManual() == "manual"){
       this.openText();

    }
    else {
      alert("Seleccionaste Artwork")
    }
   }
   else if (this.currentSectionOpen == 11) {
     if (artworkManualClass.getArtworkManual() == "manual"){
       this.openArtWorkManual();

    }
    else {
      alert("Seleccionaste Artwork")
    }

   }
   else if (this.currentSectionOpen == 12) {
     if (artworkManualClass.getArtworkManual() == "manual"){
       this.openImage();

    }
    else {
      alert("Seleccionaste Artwork")
    }
   }
  }

  // Métodos adicionales según sea necesario
   openMaterial(){

     previewMaterial.showMaterialPreview("flex");
     previewLanyardType.showTypeLanyardPreview("none");
     this.showCurrentSection(this.currentSectionOpen);


     const preview = document.getElementById("preview");
     preview.style.display = "none";
   }
   openLanyardType(){
     previewMaterial.showMaterialPreview("none");
     previewLanyardType.showTypeLanyardPreview("flex");
     previewLanyardType.showSelectedPreviewtTemplate();

     customizeLanyard.showCurrentSection(this.currentSectionOpen);

     const preview = document.getElementById("preview");
     preview.style.display = "block";


   }
   openWidth(){
     customizeLanyard.showCurrentSection(this.currentSectionOpen);

   }
   openSidePrinted(){
     customizeLanyard.showCurrentSection(this.currentSectionOpen);

   }
   openClips(){
     customizeLanyard.showCurrentSection(this.currentSectionOpen);

   }
   openAttachment(){
     previewLanyardType.showTypeLanyardPreview("flex");
     previewLanyardType.showSelectedPreviewtTemplate();
     previewColourClass.showColourPreview("none");
     previewArtworkManualClass.showArtworkManualPreview("none");
     customizeLanyard.showCurrentSection(this.currentSectionOpen);

   }
   openColourQuantity(){
     previewArtworkManualClass.showArtworkManualPreview("none");
     previewColourClass.showColourPreview("flex");
     previewLanyardType.showTypeLanyardPreview("none");
     customizeLanyard.showCurrentSection(this.currentSectionOpen);

   }
   openArtWorkManual(){
     previewColourClass.showColourPreview("none");
     previewArtworkManualClass.showArtworkManualPreview("flex");
     previewLanyardType.showTypeLanyardPreview("none");
     customizeLanyard.showCurrentSection(7);

   }

  openBackgroundColour() {
    //this.currentSectionOpen = 8;
    customizeLanyard.showCurrentSection(8);

    previewArtworkManualClass.showArtworkManualPreview("none");
    previewLanyardType.showTypeLanyardPreview("flex");

  /*const next = document.getElementById("next");
    const preview = document.getElementById("preview");
    preview.style.display = "block";
    next.style.display = "block";*/

  }
  openText(){
    customizeLanyard.showCurrentSection(9);
    previewLanyardType.showTypeLanyardPreview("flex");
    previewArtworkManualClass.showArtworkManualPreview("none");

  }
  openImage(){
    customizeLanyard.showCurrentSection(10);
    previewLanyardType.showTypeLanyardPreview("flex");
    previewArtworkManualClass.showArtworkManualPreview("none");
  }

  setStateVisibilityPanelCustomeLanyard(value) {
    stateVisibilityPanelCustomeLanyard = value;
  }

  getStateVisibilityPanelCustomeLanyard() {
    return stateVisibilityPanelCustomeLanyard;
  }

  setNoColours(value) {
    this.noColours = value;
  }

  getNoColours() {
    return this.noColours;
  }
}

var sections = document.querySelectorAll(".section");
var preview = document.getElementById("preview");
var next = document.getElementById("next");
var stateVisibilityPanelCustomeLanyard = false;

const customizeLanyard = new CustomizeLanyard();
