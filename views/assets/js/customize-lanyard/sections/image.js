class ImageClass {
    constructor() {
        const imageInput = document.getElementById('imageUpload');

        const imageContainers = document.querySelectorAll('.imageContent2');

        // Add an event listener to the input file element
        imageInput.addEventListener('change', function(event) {

            // Get the selected file

            const file = event.target.files[0];

            // Check if a file is selected and it's an image
            if (file && file.type.startsWith('image/')) {
              alert("hola");
                // Create a FileReader to read the file
                const reader = new FileReader();

                // Define the onload event of the FileReader
                reader.onload = function(e) {
                    // Iterate over all image containers
                    imageContainers.forEach(container => {
                        // Clear any existing content in the container
                        container.innerHTML = '';

                        // Create an img element
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.alt = 'Uploaded Image';

                        // Append the img element to the container
                        container.appendChild(img);
                    });
                }

                // Read the file as a data URL
                reader.readAsDataURL(file);
            } else {
                alert('Please select a valid image file.');
            }
        });
    }
}

// Create an instance of ImageClass
const imageClass = new ImageClass();
