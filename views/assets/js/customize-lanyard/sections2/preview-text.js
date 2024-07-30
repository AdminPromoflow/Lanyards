class PreviewTextClass {
  constructor() {
    this.textContent = "";
    this.colourText = "#000000";
    this.fontFamily = "Arial, sans-serif";

  }
  repeatText(repeat) {
      const textContainer = document.querySelectorAll(".text-container");

      if (repeat) {

          textContainer.forEach(container => {
              container.innerHTML = "";
          });

          for (let i = 0; i < 30; i++) {
              textContainer.forEach(container => {
                //  container.innerHTML += "<h3 class='textContent'>"+previewTextClass.getTextContent()+"</h3>";
                   container.innerHTML += "<h3 class='textContent' style='color:" + previewTextClass.getTextColour() + " ; '>" + previewTextClass.getTextContent() + "</h3>" +
                  "<div class='imageContent'>" +
                  "  </div>" ;

              });
          }
      } else {


          textContainer.forEach(container => {
            container.innerHTML = "";

                //  container.innerHTML = "<h3 class='textContent'>"+previewTextClass.getTextContent()+"</h3>";
                container.innerHTML += "<h3 class='textContent' style='color:" + previewTextClass.getTextColour() + " ; '>" + previewTextClass.getTextContent() + "</h3>" +
                "<div class='imageContent'></div>" ;

          });
      }
  }

  addModifyText(value){
    previewTextClass.setTextContent(value);
  //  alert(value);
    const textContent = document.querySelectorAll(".textContent");

    for (var i = 0; i < textContent.length; i++) {
      textContent[i].textContent = value;
    }

  }

  changeColour(colour){
    previewTextClass.setTextColour(colour);
    const textContent = document.querySelectorAll(".textContent");

    for (var i = 0; i < textContent.length; i++) {
      textContent[i].style.color = colour;
    }
  }
   changeFontFamily(fontFamily) {
      //alert(fontFamily);
      previewTextClass.setFontFamily(fontFamily); // Asegúrate de que 'previewTextClass' está definido y tiene un método 'setFontFamily'

      const textContent = document.querySelectorAll(".textContent");

      textContent.forEach(element => {
          element.style.fontFamily = fontFamily;
      });
  }
  changeBold(active){

    const textContent = document.querySelectorAll(".textContent");

    if (active) {
      textContent.forEach(element => {
       element.style.fontWeight = "700";
   });
    }
    else{
      textContent.forEach(element => {
       element.style.fontWeight = "500";
   });
    }
  }
   changeItalic(active) {
      const textContent = document.querySelectorAll(".textContent");

      if (active) {
          textContent.forEach(element => {
              element.style.fontStyle = "italic";
          });
      } else {
          textContent.forEach(element => {
              element.style.fontStyle = "normal";
          });
      }
  }

  changeUnderline(active) {
      const textContent = document.querySelectorAll(".textContent");

      if (active) {
          textContent.forEach(element => {
              element.style.textDecoration = "underline";
          });
      } else {
          textContent.forEach(element => {
              element.style.textDecoration = "none";
          });
      }
  }


  changeFontSize(active) {
    const textContent = document.querySelectorAll(".textContent");

    textContent.forEach(element => {
        // Obtener el tamaño actual de la fuente
        let currentSize = window.getComputedStyle(element).fontSize;

        // Convertir el tamaño actual a un número flotante
        currentSize = parseFloat(currentSize);

        // Cambiar el tamaño de la fuente
        if (active) {
            // Aumentar el tamaño de la fuente en 2px
            element.style.fontSize = (currentSize + 2) + "px";
        } else {
            // Disminuir el tamaño de la fuente en 2px
            element.style.fontSize = (currentSize - 2) + "px";
        }
    });
}


 changeSpaceBetweenText(active) {
    const textContent = document.querySelectorAll(".textContent");

    textContent.forEach(element => {
        // Obtener el margen actual de la izquierda y la derecha
        let currentMarginLeft = window.getComputedStyle(element).marginLeft;
        let currentMarginRight = window.getComputedStyle(element).marginRight;

        // Convertir los márgenes actuales a números flotantes
        currentMarginLeft = parseFloat(currentMarginLeft);
        currentMarginRight = parseFloat(currentMarginRight);

        // Cambiar los márgenes izquierdo y derecho
        if (active) {
            // Aumentar el margen izquierdo y derecho en 10px
            element.style.marginLeft = (currentMarginLeft + 2) + "px";
            element.style.marginRight = (currentMarginRight + 2) + "px";
        } else {
            // Disminuir el margen izquierdo y derecho en 10px
            element.style.marginLeft = (currentMarginLeft - 2) + "px";
            element.style.marginRight = (currentMarginRight - 2) + "px";
        }
    });
}




  // Función para obtener el textContent del contenedor
 getTextContent() {
    return this.textContent;
}

// Función para establecer el textContent del contenedor
 setTextContent(newText) {
    this.textContent = newText;
}


 getTextColour() {
    return this.colourText;
}

// Función para establecer el color del texto del contenedor
 setTextColour(newColour) {
    this.colourText = newColour;
}

getFontFamily() {
   return this.fontFamily;
}

  setFontFamily(newFontFamily) {
      this.fontFamily = newFontFamily;
  }
}


const previewTextClass = new PreviewTextClass();
