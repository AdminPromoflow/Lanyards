class PreviewProvidedInformation {
  constructor() {
  }
  showProvidedInformationPreview(action){
    const previewProvidedInformationContainer = document.getElementById("preview-provided-information-container");

     
    previewProvidedInformationContainer.style.display = action;
  }
}


const previewProvidedInformation = new PreviewProvidedInformation();
