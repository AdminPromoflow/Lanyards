class CustomizeLanyard {

  constructor() {

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


    this.keepFixed(); // Call the function to keep the modal window fixed when the page loads
    document.getElementById('dad-customize-lanyard').addEventListener('scroll', this.keepFixed); // Add scroll event listener to the parent container

  }

   keepFixed() {

     var modalWindow = document.getElementById('customize-lanyard');
     var scrollContainer = document.getElementById('dad-customize-lanyard');

       var containerRect = scrollContainer.getBoundingClientRect(); // Obtén el rectángulo del contenedor de desplazamiento
       var scrollY = window.scrollY || window.pageYOffset; // Obtén la posición de desplazamiento vertical de la ventana del navegador
       var modalHeight = modalWindow.offsetHeight; // Obtén la altura de la ventana modal

       // Calcula la posición superior de la ventana modal en relación con el desplazamiento
       var newTopPosition = (window.innerHeight - modalHeight) / 2 + scrollY - containerRect.top;

       // Establece la posición superior de la ventana modal
       modalWindow.style.top = newTopPosition + 'px';
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
  //    alert("me dirijo a materiales");
      previewMaterial.showMaterialPreview("flex");
      previewLanyardType.showTypeLanyardPreview("none");
    }
    else if (sectionActive == "Lanyard type") {
      // Se hace una consulta con un ajax request,  el resultado va a ser one- two ends  y el width. Luego del resultado se envia  el width y el typeLanyard
      previewLanyardType.showSelectedPreviewtTemplate("one-end", "25mm");
      previewMaterial.showMaterialPreview("none");
      previewLanyardType.showTypeLanyardPreview("flex");
    }
    else if (sectionActive == "Width") {

    }
  }

  setStateVisibilityPanelCustomeLanyard (value){
    stateVisibilityPanelCustomeLanyard = value;
  }
  getStateVisibilityPanelCustomeLanyard (){
    return stateVisibilityPanelCustomeLanyard ;
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
