  class PreviewImageClass {
    constructor() {

    }
    changeImageSize(active){

      const imageContent = document.querySelectorAll(".imageContent");
      if (scale < 3.1 && scale > 0.2){

        if (active) {
          scale = scale + 0.2;
        }
        else {
          scale = scale -0.2;
        }
      }
      else {
        alert("alto");
      }
      for (var i = 0; i < imageContent.length; i++) {
        imageContent[i].style.transform = "scale("+scale+")";
      }
      //alert(active);
    }
    changeSpaceBetweenImage(active){
      alert(active);
    }
    changeRotationImage(active){
      alert(active);
    }
  }
  var scale = 1;
  const previewImageClass = new PreviewImageClass();
