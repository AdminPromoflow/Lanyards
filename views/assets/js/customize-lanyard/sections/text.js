class TextClass {
  constructor() {
    const repeatTextBox = document.querySelectorAll(".repeat-text-box");
    const colourTextSelect = document.getElementById("colour-text-select");
    const colourTextSelectContainer = document.getElementById("colour-text-select-container");
    var repeatTextBoxSelected = 0;
    colourTextSelectContainer.style.display = "none";

    this.contentText = "";
    this.repeatText = false;
    this.repeatText = 1;
    this.colourText = "#000000";
    this.fontSizeText = "16px";
    this.boldText = false;
    this.italicText = false;
    this.underlineText = false;
    this.sizeText = "medium";
    this.spacingBetweenText = "normal";

    const labelRepeatText = document.getElementById("label-repeat-text");

    labelRepeatText.textContent = "Repeat text " +  this.getRepeatText() + "times";

    //repeatTextBox[repeatTextBoxSelected].style.border = "2px solid white";
    //previewTextClass.repeatText(true);

    for (let i = 0; i < repeatTextBox.length; i++) {
      repeatTextBox[i].addEventListener("click", function(){
         const h3Element = repeatTextBox[i].querySelector('h3').innerHTML+"";

         repeatTextBoxSelected = i;

         /*for (var j = 0; j < repeatTextBox.length; j++) {
           repeatTextBox[j].style.border = "2px solid transparent";
         }
         repeatTextBox[repeatTextBoxSelected].style.border = "2px solid white";
          */
         if (h3Element == "+") {
           textClass.setRepeatText(textClass.getRepeatText() + 1);
           previewTextClass.repeatText();
         }
         else {
           textClass.setRepeatText(textClass.getRepeatText() - 1);

           previewTextClass.repeatText();
         }
        // alert(textClass.getRepeatText());

        labelRepeatText.textContent = "Repeat text " +  textClass.getRepeatText() + "times";
      })
    }

    colourTextSelect.addEventListener("click", function(){
      if (colourTextSelectContainer.style.display == "block") {
        colourTextSelectContainer.style.display = "none";
      }
      else {
        colourTextSelectContainer.style.display = "block";
      }
    })

    document.addEventListener("click", function(event) {
        if (!colourTextSelectContainer.contains(event.target) && !colourTextSelect.contains(event.target)) {
            colourTextSelectContainer.style.display = "none";
        }
    });

    const pantoneColors = [
     { pantone: "White", html: "#FFFFFF" },
     { pantone: "Black", html: "#2D2926" },
     { pantone: "425", html: "#585C5F" },
     { pantone: "Cool Gray 6", html: "#A8AAAB" },
     { pantone: "Yellow", html: "#FCE300" },
     { pantone: "809", html: "#E4E400" },
     { pantone: "1235", html: "#FFBF29" },
     { pantone: "1355", html: "#FFCA84" },
     { pantone: "142", html: "#F9C26D" },
     { pantone: "Orange 021", html: "#FE5000" },
     { pantone: "Bright Orange", html: "#FF7F2A" },
     { pantone: "485", html: "#DA291C" },
     { pantone: "1795", html: "#D93600" },
     { pantone: "186", html: "#E4002B" },
     { pantone: "Red 032", html: "#EF3340" },
     { pantone: "201", html: "#920021" },
     { pantone: "193", html: "#BF003D" },
     { pantone: "208", html: "#930032" },
     { pantone: "212", html: "#FF5C8A" },
     { pantone: "226", html: "#FF006E" },
     { pantone: "249", html: "#80004F" },
     { pantone: "252", html: "#FF66CC" },
     { pantone: "Purple", html: "#BB29BB" },
     { pantone: "2607", html: "#8700BF" },
     { pantone: "281", html: "#002147" },
     { pantone: "Reflex Blue", html: "#001489" },
     { pantone: "293", html: "#0033A0" },
     { pantone: "289", html: "#001B3A" },
     { pantone: "3015", html: "#005387" },
     { pantone: "Process Blue", html: "#0084D1" },
     { pantone: "3302", html: "#005258" },
     { pantone: "3278", html: "#008C93" },
     { pantone: "348", html: "#00A370" },
     { pantone: "354", html: "#00B35A" },
     { pantone: "361", html: "#00BF26" },
     { pantone: "7481", html: "#1AB87A" },
     { pantone: "382", html: "#AEDD00" },
     { pantone: "478", html: "#6B3300" },
     { pantone: "471", html: "#E6CF6B" }
 ];

    for (let i = 0; i < pantoneColors.length; i++) {
      colourTextSelectContainer.innerHTML +=
        '<div class="colour-text-select-boxes" style="background-color:' + pantoneColors[i].html + ';" ' +
        'onclick="textClass.handleClickText(\'' + pantoneColors[i].pantone + '\', \'' + pantoneColors[i].html + '\')">' +
        '<h3 class="name-colour-text-selected">' + pantoneColors[i].pantone + '</h3>' +
      //  '<img src="../../views/assets/img/global/customize-lanyard/sections/image/top.png" alt="">' +

        '</div>';
    }

    const typeTextSelect = document.getElementById("type-text-select");
    const typeTextSelectContainer = document.getElementById("type-text-select-container");

    typeTextSelect.addEventListener("click", function(event) {
        if (typeTextSelectContainer.style.display === "block") {
            typeTextSelectContainer.style.display = "none";
        } else {
            typeTextSelectContainer.style.display = "block";
        }
        event.stopPropagation(); // Detener la propagación del evento para que no cierre inmediatamente
    });

    document.addEventListener("click", function(event) {
        if (!typeTextSelectContainer.contains(event.target) && !typeTextSelect.contains(event.target)) {
            typeTextSelectContainer.style.display = "none";
        }
    });

    const fontStyles = [
        { fontName: "Arial", fontFamily: "Arial, sans-serif" },
        { fontName: "Verdana", fontFamily: "Verdana, sans-serif" },
        { fontName: "Helvetica", fontFamily: "Helvetica, sans-serif" },
        { fontName: "Tahoma", fontFamily: "Tahoma, sans-serif" },
        { fontName: "Trebuchet MS", fontFamily: "Trebuchet MS, sans-serif" },
        { fontName: "Times New Roman", fontFamily: "Times New Roman, serif" },
        { fontName: "Georgia", fontFamily: "Georgia, serif" },
        { fontName: "Garamond", fontFamily: "Garamond, serif" },
        { fontName: "Courier New", fontFamily: "Courier New, monospace" },
        { fontName: "Brush Script MT", fontFamily: "Brush Script MT, cursive" },
        { fontName: "Lucida Console", fontFamily: "Lucida Console, monospace" },
        { fontName: "Impact", fontFamily: "Impact, sans-serif" },
        { fontName: "Comic Sans MS", fontFamily: "Comic Sans MS, cursive" },
        { fontName: "Palatino Linotype", fontFamily: "Palatino Linotype, serif" },
        { fontName: "Book Antiqua", fontFamily: "Book Antiqua, serif" },
        { fontName: "Arial Black", fontFamily: "Arial Black, sans-serif" },
        { fontName: "Lucida Sans Unicode", fontFamily: "Lucida Sans Unicode, sans-serif" },
        { fontName: "Century Gothic", fontFamily: "Century Gothic, sans-serif" },
        { fontName: "Franklin Gothic Medium", fontFamily: "Franklin Gothic Medium, sans-serif" },
        { fontName: "Gill Sans", fontFamily: "Gill Sans, sans-serif" },
        { fontName: "Futura", fontFamily: "Futura, sans-serif" },
        { fontName: "Rockwell", fontFamily: "Rockwell, serif" },
        { fontName: "Candara", fontFamily: "Candara, sans-serif" },
        { fontName: "Optima", fontFamily: "Optima, sans-serif" },
        { fontName: "Didot", fontFamily: "Didot, serif" },
        { fontName: "Calisto MT", fontFamily: "Calisto MT, serif" },
        { fontName: "Bodoni MT", fontFamily: "Bodoni MT, serif" },
        { fontName: "Bookman", fontFamily: "Bookman, serif" },
        { fontName: "Copperplate", fontFamily: "Copperplate, serif" },
        { fontName: "Papyrus", fontFamily: "Papyrus, fantasy" }
    ];

    for (let i = 0; i < fontStyles.length; i++) {
        typeTextSelectContainer.innerHTML +=
            '<div class="type-text-select-boxes" ' +
            'onclick="textClass.handleClickTypeText(\'' + fontStyles[i].fontName + '\', \'' + fontStyles[i].fontFamily + '\')">' +
            '<h3 class="name-colour-text-selected">' + fontStyles[i].fontName + '</h3>' +
            '</div>';
    }

    const stylingTextBox = document.querySelectorAll(".styling-text-box");

    for (let i = 0; i < stylingTextBox.length; i++) {

      stylingTextBox[i].addEventListener("click", function(){
        if (stylingTextBox[i].style.border == "2px solid white") {
            stylingTextBox[i].style.border = "2px solid transparent";

            if (i ==0) {
              previewTextClass.changeBold(false);
            }
            else if (i == 1) {
              previewTextClass.changeItalic(false);
            }
            else if (i==2) {
              previewTextClass.changeUnderline(false);
            }
        }
        else {
        //  alert(stylingTextBox[i].style.border);
          stylingTextBox[i].style.border = "2px solid white";
          if (i ==0) {
            previewTextClass.changeBold(true);
          }
          else if (i == 1) {
            previewTextClass.changeItalic(true);
          }
          else if (i==2) {
            previewTextClass.changeUnderline(true);
          }
        }



      });
    }



    const textInput = document.getElementById("textInput");
    textInput.addEventListener('input', function() {
      previewTextClass.addModifyText(textInput.value);

});

    const sizeTextBox = document.querySelectorAll(".size-text-box");

    for (let i = 0; i < sizeTextBox.length; i++) {
      sizeTextBox[i].addEventListener("click", function(){
        if (i==0) {
          previewTextClass.changeFontSize(false);
        }
        else {
          previewTextClass.changeFontSize(true);

        }
      })
    }



    const spaceBetweenTextBox = document.querySelectorAll(".space-between-text-box");

    for (let i = 0; i < spaceBetweenTextBox.length; i++) {
      spaceBetweenTextBox[i].addEventListener("click", function(){
        if (i==0) {
          previewTextClass.changeSpaceBetweenText(false);
        }
        else {
          previewTextClass.changeSpaceBetweenText(true);

        }
      })
    }
  }


  // Content text
  getContentText() {
    return this.contentText;
  }

  setContentText(value) {
    this.contentText = value;
  }

  // Repeat text
  getRepeatText() {
    return this.repeatText;
  }

  setRepeatText(value) {
    this.repeatText = value;
  }

  // Colour text
  getColourText() {
    return this.colourText;
  }

  setColourText(value) {
    this.colourText = value;
  }

  // Font size text
  getFontSizeText() {
    return this.fontSizeText;
  }

  setFontSizeText(value) {
    this.fontSizeText = value;
  }

  // Bold text
  getBoldText() {
    return this.boldText;
  }

  setBoldText(value) {
    this.boldText = value;
  }

  // Italic text
  getItalicText() {
    return this.italicText;
  }

  setItalicText(value) {
    this.italicText = value;
  }

  // Underline text
  getUnderlineText() {
    return this.underlineText;
  }

  setUnderlineText(value) {
    this.underlineText = value;
  }

  // Size text
  getSizeText() {
    return this.sizeText;
  }

  setSizeText(value) {
    this.sizeText = value;
  }

  // Spacing between text
  getSpacingBetweenText() {
    return this.spacingBetweenText;
  }

  setSpacingBetweenText(value) {
    this.spacingBetweenText = value;
  }
  setRepeatText(value){
    this.repeatText = value;
  }
  getRepeatText(){
     return this.repeatText ;
  }
  handleClickText(name, colour){

      previewTextClass.changeColour(colour);
      const colourTextSelect = document.getElementById("colour-text-select");
      const h3Element = colourTextSelect.querySelector('h3');
      const colourTextSelectContainer = document.getElementById("colour-text-select-container");

      colourTextSelect.style.background = colour;
      h3Element.innerHTML = name;
      colourTextSelectContainer.style.display = "none";
  }
  handleClickTypeText(name, fontFamily) {
      const typeTextSelect = document.getElementById("type-text-select");
      const h3Element = typeTextSelect.querySelector('h3');
      const typeTextSelectContainer = document.getElementById("type-text-select-container");

      typeTextSelect.style.fontFamily = fontFamily;
      h3Element.innerHTML = name;
      typeTextSelectContainer.style.display = "none";

      previewTextClass.changeFontFamily(fontFamily);
  }
}











const textClass = new TextClass();
