class PreviewProvidedInformation {
  constructor() {
  }
  showProvidedInformationPreview(action){
    const previewProvidedInformationContainer = document.getElementById("preview-provided-information-container");

    alert('ahah');
    previewProvidedInformationContainer.style.display = action;
  }
}


const previewProvidedInformation = new PreviewProvidedInformation();
