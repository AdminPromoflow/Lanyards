// Primero, selecciona los elementos del DOM
const drawOsNormalLeft10mm = document.getElementById("artwork-os-normal-left-10mm");
const drawOsNormalRight10mm = document.getElementById("artwork-os-normal-right-10mm");
const drawOsNormalLeft15mm = document.getElementById("artwork-os-normal-left-15mm");
const drawOsNormalRight15mm = document.getElementById("artwork-os-normal-right-15mm");
const drawOsNormalLeft20mm = document.getElementById("artwork-os-normal-left-20mm");
const drawOsNormalRight20mm = document.getElementById("artwork-os-normal-right-20mm");
const drawOsNormalLeft25mm = document.getElementById("artwork-os-normal-left-25mm");
const drawOsNormalRight25mm = document.getElementById("artwork-os-normal-right-25mm");
const drawOsNormalLeft30mm = document.getElementById("artwork-os-normal-left-30mm");
const drawOsNormalRight30mm = document.getElementById("artwork-os-normal-right-30mm");

// Primero, selecciona los elementos del DOM
const drawOsNormalLeft10mmTP = document.getElementById("artwork-os-normal-left-10mm-tp");
const drawOsNormalRight10mmTP = document.getElementById("artwork-os-normal-right-10mm-tp");
const drawOsNormalLeft15mmTP = document.getElementById("artwork-os-normal-left-15mm-tp");
const drawOsNormalRight15mmTP = document.getElementById("artwork-os-normal-right-15mm-tp");
const drawOsNormalLeft20mmTP = document.getElementById("artwork-os-normal-left-20mm-tp");
const drawOsNormalRight20mmTP = document.getElementById("artwork-os-normal-right-20mm-tp");
const drawOsNormalLeft25mmTP = document.getElementById("artwork-os-normal-left-25mm-tp");
const drawOsNormalRight25mmTP = document.getElementById("artwork-os-normal-right-25mm-tp");
const drawOsNormalLeft30mmTP = document.getElementById("artwork-os-normal-left-30mm-tp");
const drawOsNormalRight30mmTP = document.getElementById("artwork-os-normal-right-30mm-tp");

// Define la clase ArtworkPreviewClassFinal
class ArtworkPreviewClassFinal {
  assignArtworkToLanyard(image, active) {
    var widthSelected = widthClass.getWidthSelected();
    if (widthSelected == "10mm") {
        this.drawOneSide10mm(image, active);
        this.emptyAllDrawExcept10mm();
    }
    else if (widthSelected == "15mm") {
    this.drawOneSide15mm(image, active);
    this.emptyAllDrawExcept15mm();
    }
    else if (widthSelected == "20mm") {
      this.drawOneSide20mm(image, active);
      this.emptyAllDrawExcept20mm();
    }
    else if (widthSelected == "25mm") {
      this.drawOneSide25mm(image, active);
      this.emptyAllDrawExcept25mm();
    }
    else if (widthSelected == "30mm") {
      this.drawOneSide30mm(image, active);
      this.emptyAllDrawExcept30mm();
    }

  }
  emptyAllDraw(){
    drawOsNormalLeft10mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight10mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft10mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight10mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`
    drawOsNormalLeft15mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight15mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft15mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight15mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft20mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight20mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft20mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight20mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft25mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight25mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft25mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight25mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft30mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight30mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft30mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight30mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
  }
  emptyAllDrawExcept10mm(){

    drawOsNormalLeft15mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight15mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft15mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight15mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft20mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight20mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft20mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight20mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft25mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight25mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft25mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight25mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft30mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight30mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft30mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight30mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
  }
  emptyAllDrawExcept15mm(){
    drawOsNormalLeft10mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight10mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft10mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight10mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`
    drawOsNormalLeft20mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight20mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft20mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight20mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft25mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight25mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft25mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight25mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft30mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight30mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft30mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight30mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
  }
  emptyAllDrawExcept20mm(){
    drawOsNormalLeft10mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight10mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft10mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight10mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`
    drawOsNormalLeft15mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight15mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft15mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight15mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft25mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight25mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft25mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight25mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft30mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight30mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft30mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight30mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
  }
  emptyAllDrawExcept25mm(){
    drawOsNormalLeft10mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight10mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft10mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight10mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`
    drawOsNormalLeft15mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight15mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft15mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight15mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft20mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight20mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft20mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight20mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft30mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight30mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft30mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight30mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
  }
  emptyAllDrawExcept30mm(){
    drawOsNormalLeft10mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight10mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft10mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight10mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`
    drawOsNormalLeft15mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight15mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft15mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight15mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft20mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight20mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft20mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight20mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft25mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight25mm.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalLeft25mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    drawOsNormalRight25mmTP.innerHTML = `<img src="../../views/assets/img/Test/test.png" alt="">`;
    }
  drawOneSide10mm(image, active){
    if (active == 0) {
      // Utiliza la variable declarada en el scope global
      drawOsNormalLeft10mm.innerHTML = `<img src="${image}" alt="">`;

    }
     else if (active == 1) {
      // Utiliza la variable declarada en el scope global
      drawOsNormalRight10mm.innerHTML = `<img src="${image}" alt="">`;

    }
    else if (active == 2) {
      //alert("hola");
     // Utiliza la variable declarada en el scope global
     drawOsNormalLeft10mmTP.innerHTML = `<img src="${image}" alt="">`;

   }
   else if (active == 3) {
    // Utiliza la variable declarada en el scope global
    drawOsNormalRight10mmTP.innerHTML = `<img src="${image}" alt="">`;

  }
  }
  drawOneSide15mm(image, active){
    if (active == 0) {
      // Utiliza la variable declarada en el scope global
      drawOsNormalLeft15mm.innerHTML = `<img src="${image}" alt="">`;

    }
     else if (active == 1) {
      // Utiliza la variable declarada en el scope global
      drawOsNormalRight15mm.innerHTML = `<img src="${image}" alt="">`;

    }
    else if (active == 2) {
      //alert("hola");
     // Utiliza la variable declarada en el scope global
     drawOsNormalLeft15mmTP.innerHTML = `<img src="${image}" alt="">`;

   }
   else if (active == 3) {
    // Utiliza la variable declarada en el scope global
    drawOsNormalRight15mmTP.innerHTML = `<img src="${image}" alt="">`;

  }
  }
  drawOneSide20mm(image, active){
    if (active == 0) {
      // Utiliza la variable declarada en el scope global
      drawOsNormalLeft20mm.innerHTML = `<img src="${image}" alt="">`;

    }
     else if (active == 1) {
      // Utiliza la variable declarada en el scope global
      drawOsNormalRight20mm.innerHTML = `<img src="${image}" alt="">`;

    }
    else if (active == 2) {
      //alert("hola");
     // Utiliza la variable declarada en el scope global
     drawOsNormalLeft20mmTP.innerHTML = `<img src="${image}" alt="">`;

   }
   else if (active == 3) {
    // Utiliza la variable declarada en el scope global
    drawOsNormalRight20mmTP.innerHTML = `<img src="${image}" alt="">`;

  }
  }
  drawOneSide25mm(image, active){
    if (active == 0) {
      // Utiliza la variable declarada en el scope global
      drawOsNormalLeft25mm.innerHTML = `<img src="${image}" alt="">`;

    }
    else if (active == 1) {
      // Utiliza la variable declarada en el scope global
      drawOsNormalRight25mm.innerHTML = `<img src="${image}" alt="">`;

    }
    else if (active == 2) {
      //alert("hola");
     // Utiliza la variable declarada en el scope global
     drawOsNormalLeft25mmTP.innerHTML = `<img src="${image}" alt="">`;

   }
   else if (active == 3) {
    // Utiliza la variable declarada en el scope global
    drawOsNormalRight25mmTP.innerHTML = `<img src="${image}" alt="">`;

  }
  }
  drawOneSide30mm(image, active){
    if (active == 0) {
      // Utiliza la variable declarada en el scope global
      drawOsNormalLeft30mm.innerHTML = `<img src="${image}" alt="">`;

    }
    else if (active == 1) {
      // Utiliza la variable declarada en el scope global
      drawOsNormalRight30mm.innerHTML = `<img src="${image}" alt="">`;

    }
    else if (active == 2) {
      //alert("hola");
     // Utiliza la variable declarada en el scope global
     drawOsNormalLeft30mmTP.innerHTML = `<img src="${image}" alt="">`;

   }
   else if (active == 3) {
    // Utiliza la variable declarada en el scope global
    drawOsNormalRight30mmTP.innerHTML = `<img src="${image}" alt="">`;

  }
  }
}

// Crea una instancia de la clase
const artworkPreviewClassFinal = new ArtworkPreviewClassFinal();

// Ejemplo de cómo llamar al método (puedes ajustar según tu lógica)
