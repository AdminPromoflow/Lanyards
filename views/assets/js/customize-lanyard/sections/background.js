// Define a class to manage background color settings for an application interface.
class BackgroundClass {
  constructor() {
    const opacityOptionBackgroundSelected = document.querySelectorAll(".opacity-option-background-selected");

    // Get the DOM element for the personalized background color picker.
    const backgroundColourSecondOption = document.getElementById("optionColourBackground");

    // Collect all elements for selecting type of background color.
    const selectTypeBackgroundColour = document.querySelectorAll(".select-background-colour-option");

    // Initialize selected background color options to white by default.
    this.backgroundColourSelectedFirstOption = "white";
    this.backgroundColourSelectedSecondOption = "white";

    opacityOptionBackgroundSelected[0].style.display = "none";
    opacityOptionBackgroundSelected[1].style.display = "block";


    // Attach click event listeners to all select type background color elements.
    for (let i = 0; i < selectTypeBackgroundColour.length; i++) {
      selectTypeBackgroundColour[i].addEventListener("click", function(){
        // Toggle between the first and second background color option based on the element clicked.
        if (i == 0) {
          backgroundClass.changeBackgroundColourSelectedFirstOption();
          opacityOptionBackgroundSelected[0].style.display = "none";
          opacityOptionBackgroundSelected[1].style.display = "block";

        } else {
          backgroundClass.changeBackgroundColourSelectedSecondOption();
          opacityOptionBackgroundSelected[0].style.display = "block";
          opacityOptionBackgroundSelected[1].style.display = "none";
        }
      })
    }

    // Add an event listener to handle changes to the personalized color picker.
    backgroundColourSecondOption.addEventListener('change', function() {
      // Apply the selected color to the background and update the relevant class property.
      var customPicker = this.value;
      backgroundClass.setBackgroundColourSelectedSecondOption(customPicker);
      backgroundClass.changeBackgroundColourSelectedSecondOption();
    });

    // Define a list of Pantone colors available for selection.
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

    // Get the container for displaying background color options.
    const containerBoxesBackground = document.getElementById("container_boxes_background");

    // Populate the container with Pantone color options using a loop.
    for (let i = 0; i < pantoneColors.length; i++) {
      containerBoxesBackground.innerHTML +=
          '<div class="pantoneColours" style="background-color:' + pantoneColors[i].html + ';" ' +
          'onclick="backgroundClass.handleClickBackgroundColour(\'' + pantoneColors[i].html + '\', ' + i + ')">' +
          '<h3>' + pantoneColors[i].pantone + '</h3>' +
          '</div>';
    }

  }

  // Set the first selected background color.
  setBackgroundColourSelectedFirstOption(value) {
    this.backgroundColourSelectedFirstOption = value;
  }

  // Retrieve the first selected background color.
  getBackgroundColourSelectedFirstOption() {
    return this.backgroundColourSelectedFirstOption;
  }

  // Set the second selected background color.
  setBackgroundColourSelectedSecondOption(value) {
    this.backgroundColourSelectedSecondOption = value;
  }

  // Retrieve the second selected background color.
  getBackgroundColourSelectedSecondOption() {
    return this.backgroundColourSelectedSecondOption;
  }

  // Handle click on Pantone color options to set and change the first option.
  handleClickBackgroundColour(colour, i) {
    this.setBackgroundColourSelectedFirstOption(colour);
    this.changeBackgroundColourSelectedFirstOption();
    this.selectColorBoxOfFirstOption(i);
  }
  selectColorBoxOfFirstOption(indexSelected){
    var pantoneColours = document.querySelectorAll(".pantoneColours");

    for (var i = 0; i < pantoneColours.length; i++) {
      pantoneColours[i].style.border = "3px solid transparent";
    }

    pantoneColours[indexSelected].style.border = "3px solid blue";


  }

  // Change CSS properties to reflect the first selected background color.
  changeBackgroundColourSelectedFirstOption() {
    var colour = this.getBackgroundColourSelectedFirstOption();
    const backgroundColours = document.querySelectorAll(".backgroundColour");
    for (var i = 0; i < backgroundColours.length; i++) {
      backgroundColours[i].style.background = colour;
    }
  }

  // Change CSS properties to reflect the second selected background color.
  changeBackgroundColourSelectedSecondOption() {
    var colour = this.getBackgroundColourSelectedSecondOption();
    const backgroundColours = document.querySelectorAll(".backgroundColour");
    for (var i = 0; i < backgroundColours.length; i++) {
      backgroundColours[i].style.background = colour;
    }
  }



  // Set the background value.
  setBackground(value) {
      this.background = value;
  }

  // Retrieve the background value.
  getBackground() {
      return this.background;
  }



}

const backgroundClass = new BackgroundClass();
