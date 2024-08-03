  class PreviewImageClass {
    constructor() {

    }
    changeImageSize(active){

      const imageContent = document.querySelectorAll(".imageContent");
      if (scale <= 3 && scale >= 0.2) {

        if (active) {
          scale = scale + 0.2;
        } else {
          scale = scale - 0.2;
        }

        // Asegurarse de que `scale` no se salga del rango después de los cambios
        if (scale > 3) {
          scale = 3;
        } else if (scale < 0.2) {
          scale = 0.2;
        }

      } else {
        alert("alto");
      }

      for (var i = 0; i < imageContent.length; i++) {
        imageContent[i].style.transform = "scale("+scale+")";
      }
      //alert(active);
    }

    changeSpaceBetweenImage(active) {
    const imageContent = document.querySelectorAll(".imageContent");

    imageContent.forEach(element => {
        // Obtener el margen actual de la izquierda y la derecha
        let currentMarginLeft = window.getComputedStyle(element).marginLeft;
        let currentMarginRight = window.getComputedStyle(element).marginRight;

        // Convertir los márgenes actuales a números flotantes
        currentMarginLeft = parseFloat(currentMarginLeft);
        currentMarginRight = parseFloat(currentMarginRight);

        // Cambiar los márgenes izquierdo y derecho
        if (active) {
            // Aumentar el margen izquierdo y derecho en 2px
            element.style.marginLeft = (currentMarginLeft + 2) + "px";
            element.style.marginRight = (currentMarginRight + 2) + "px";
        } else {
            // Disminuir el margen izquierdo y derecho en 2px
            element.style.marginLeft = (currentMarginLeft - 2) + "px";
            element.style.marginRight = (currentMarginRight - 2) + "px";
        }
    });
}

    changeRotationImage(active) {

    const imageContent = document.querySelectorAll(".imageContent");

    imageContent.forEach(element => {
        // Obtener el tamaño actual del elemento
        let sizeImage = element.getAttribute('data-size') || 100; // Valor por defecto 100 si no hay atributo

        // Obtener la rotación actual
        let currentRotation = window.getComputedStyle(element).transform;

        // Extraer el ángulo de rotación en grados (asumiendo que solo hay una rotación en la matriz de transformación)
        let matrixValues = currentRotation.match(/matrix\((.+)\)/);
        let angle = 0;

        if (matrixValues) {
            let values = matrixValues[1].split(', ');
            let a = values[0];
            let b = values[1];
            angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        }

        // Cambiar la rotación
        if (active) {
            // Rotar a la derecha en 10 grados
            angle += 10;
        } else {
            // Rotar a la izquierda en 10 grados
            angle -= 10;
        }

        // Aplicar el tamaño y la nueva rotación
        element.style.width = sizeImage + 'px';
        element.style.height = sizeImage + 'px';
        element.style.transform = `rotate(${angle}deg)`;
    });
}

  }
  var scale = 1;
  const previewImageClass = new PreviewImageClass();
