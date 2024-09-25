<?php
// Include required files for database connection and model manipulation
require_once '../config/database.php'; // Path to database configuration
require_once '../../models/lanyards.php'; // Path to lanyards model
require_once 'width.php';
require_once 'width.php'; // Double inclusion of the 'width.php' file. This might be an error.
require_once 'sidePrinted.php';
require_once 'noColours.php';
require_once 'typeLanyards.php';
require_once 'clips.php';
require_once 'amount.php';
require_once 'extras.php';

// Define the Material class
class Material {
    // Public function to handle incoming HTTP requests
    public function handleRequest() {
        // Check if the request method is POST
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Retrieve the raw JSON data from the request body
            $rawData = file_get_contents("php://input");
            $data = json_decode($rawData);


            // Validate the JSON data to ensure it contains an "action" field
            if ($data !== null && isset($data->action)) {
                $action = $data->action;  // Extract the action from the JSON data

                // Switch case to handle different actions based on the request
                switch ($action) {
                    case "getMaterials":

                        // Handle the retrieval of materials
                        $materials = $this->getMaterials($data);

                        $allAmount = array();
                        $i = 0;

                        foreach ($materials as $key) {

                          $width = new Width();
                          $allWidth =  $width->getAllWidthByMaterial($key["material"]);
                          $widthSelected = $width->selectWidth($allWidth);

                          $sidePrinted = new SidePrinted();
                          $allSidePrinted = $sidePrinted->getAllSidePrintedByWidth($widthSelected, $key["material"]);
                          $sidePrintedSelected =  $sidePrinted->selectSidePrinted($allSidePrinted);

                          $noColour = new NoColours();
                          $noColour->setMaterial($key["material"]);
                          $noColour->setWidth($widthSelected);
                          $noColour->setNoSides($sidePrintedSelected);
                          $allNoColours =  $noColour->getAllNoColoursBySidePrinted();
                          $noColourSelected = $noColour-> selectNoColour($allNoColours);

                          $amount = new Amount();
                          $amount->setMaterial($key["material"]);
                          $amount->setWidth($widthSelected);
                          $amount->setNoSides($sidePrintedSelected);
                          $amount->setNoColour($noColourSelected);
                          $allAmount[] =  $amount->getAllAmountByNoColour();
                          $materials[$i] ["allAmount"] = $allAmount[$i];
                          $i ++;
                        }

                        $lanyards = $this->getAllLanyardInfo();


                        // Prepare response with materials, lanyard types, and widths
                        $response = array('materials' => $materials,
                                          'lanyards'  => $lanyards
                                          );

                        echo json_encode($response);
                        break;

                    case "setMaterialSelected":

                        // Handle setting the selected material and searching its attributes
                        $this->setSessionMaterial($data);
                        $infoMaterial  = $this->getAttributesMaterial($data->optionSelected
                      );


                        $lanyardTypes = new TypeLanyards();
                        $lanyardTypes ->setIdMaterial($infoMaterial["idMaterial"]);
                        $allLanyardTypes =  $lanyardTypes->getAllLanyardsTypesByIdMaterial();
                        $lanyardTypesSelected = $lanyardTypes-> selectTypeLanyards($allLanyardTypes);
                        $lanyardTypes-> setSessionTypeLanyards($lanyardTypesSelected);


                        // Retrieve all widths for the selected material
                        $width = new Width();
                        $allWidth =  $width->getAllWidthByMaterial($data->optionSelected);
                        $widthSelected = $width->selectWidth($allWidth);
                          //echo json_encode($widthSelected);exit;
                        $width-> setSessionWidth($widthSelected);


                        // Retrieve all side printed options based on the selected width and material
                        $sidePrinted = new SidePrinted();
                        $allSidePrinted = $sidePrinted->getAllSidePrintedByWidth($widthSelected, $data->optionSelected);
                        $sidePrintedSelected =  $sidePrinted->selectSidePrinted($allSidePrinted);
                        $sidePrinted->setSessionSidePrinted($sidePrintedSelected);


                        $noColour = new NoColours();
                        $noColour->setMaterial($data->optionSelected);
                        $noColour->setWidth($widthSelected);
                        $noColour->setNoSides($sidePrintedSelected);
                        $allNoColours =  $noColour->getAllNoColoursBySidePrinted();
                        $noColourSelected = $noColour-> selectNoColour($allNoColours);
                        $noColour-> setSessionNoColour($noColourSelected);

                        $amount = new Amount();
                        $amount->setMaterial($data->optionSelected);
                        $amount->setWidth($widthSelected);
                        $amount->setNoSides($sidePrintedSelected);
                        $amount->setNoColour($noColourSelected);
                        $allAmount =  $amount->getAllAmountByNoColour();
                        $amount->setAmountSelected($data->amountSelected);
                        $priceSelected = $amount-> selectPrice($allAmount);
                        $amount-> setSessionAmount($priceSelected);

                        $amount = new Amount();
                        $amount->setMaterial($data->optionSelected);
                        $amount->setWidth($widthSelected);
                        $amount->setNoSides($sidePrintedSelected);
                        $amount->setNoColour($noColourSelected);
                        $allAmount =  $amount->getAllAmountByNoColour();
                        $amountSelected = $amount-> selectAmount($allAmount);
                        $amount->setMinAmount($amountSelected);
                        $allWidthPrice = $amount-> getAllPriceOfWidth();








                        $amount = new Amount();
                        $amount->setMaterial($data->optionSelected);
                        $amount->setWidth($widthSelected);
                        $amount->setNoSides($sidePrintedSelected);
                        $amount->setNoColour($noColourSelected);
                        $allAmount =  $amount->getAllAmountByNoColour();
                        // $amountSelected = $amount-> selectAmount($allAmount);
                        // $amount->setMinAmount($amountSelected);
                        // $allWidthPrice = $amount-> getAllPriceOfWidth();

                        // Prepare and send the response with material information
                        $response = array ('sidePrintedSelected' => $sidePrintedSelected,
                                          'noColourSelected' => $noColourSelected,
                                          'material' => $infoMaterial,
                                          'allLanyardTypes' => $allLanyardTypes,
                                          'allWidth' => $allWidthPrice,
                                          'lanyardTypesSelected' => $lanyardTypesSelected,

                                          //'allAmount' => $allAmount,
                                          //'allSidePrinted' => $allSidePrinted,
                                          //'sidePrintedSelected' => $sidePrintedSelected,
                                          //'allNoColours' => $allNoColours,
                                          //'noColourSelected' => $noColourSelected,
                                          //'allAmount' => $allAmount,
                                          'amountPriceSelected' => $priceSelected
                                          );
                        //,  'allWidth' => $allWidth
                        echo json_encode($response);
                        break;
                      case "getMaterialSelected":
                        // Handle the retrieval of the selected material
                        $materialSelected = $this->handleGetMaterialSelected($data);
                        $response = array('getMaterial' => $materialSelected);
                        break;

                    default:
                        // Respond with an error for unknown actions
                        http_response_code(400); // Bad Request
                        echo json_encode(array("message" => "Unknown action"));
                        break;
                }
            } else {
                // Respond with an error if JSON data is incomplete or missing the action field
                http_response_code(400); // Bad Request
                echo json_encode(array("message" => "Incomplete JSON data or missing action"));
            }
        } else {
            // Respond with an error if the request method is not POST
            http_response_code(405); // Method Not Allowed
            echo json_encode(array("message" => "Method not allowed"));
        }
    }

    // Private function to handle the action of setting the selected material
    private function setSessionMaterial($data) {
      // Start or resume a session
      if (session_status() === PHP_SESSION_NONE) {
        // Si no hay una sesión activa, inicia una
        session_start();
        }
        $_SESSION['materialSelected'] = $data->optionSelected; // Store the selected material option in the session

      //  echo json_encode($_SESSION['materialSelected']);
    }
    // Private function to handle the action of setting the selected material
    private function selectMaterial($materials) {
      $materialSelected  = array_rand($materials);
      $materialSelected = ($materials[$materialSelected]["material"]);
      $materialSelected =  array("optionSelected" => $materialSelected);

      return $materialSelected;
    }

    // Private function to handle the action of getting the selected material
    private function handleGetMaterialSelected() {
         // Start or resume a session
         if (session_status() === PHP_SESSION_NONE) {
           // Si no hay una sesión activa, inicia una
           session_start();
           }
        return ($_SESSION['materialSelected']) ; // Store the get material option in the session
    }

    // Private function to handle searching for attributes of the selected material
    private function getAttributesMaterial($data) {

        $connection = new Database(); // Create a new database connection

        $lanyards = new Lanyards($connection); // Instantiate the Lanyards model
        $lanyards->setMaterial($data); // Set the selected material in the model

        $response = $lanyards->getInfoMaterials(); // Retrieve material information

        // Store the retrieved material information
        $infoMaterial = array(
             'idMaterial' => $response['idLanyard'],
            'material' => $response['material'],
            'link' => $response['linkImg'],
            'description' => $response['description']
        );
          // Start or resume a session

        return $infoMaterial;
    }

    // Private function to handle the retrieval of all materials
    private function getMaterials($data){

        $connection = new Database(); // Create a new database connection

        $lanyards = new Lanyards($connection); // Instantiate the Lanyards model
        //echo json_encode($data);exit;
        $response = $lanyards->getAllLanyardMaterials(); // Retrieve all lanyard materials

        return($response); // Send the response with all materials
    }



    private function getAllLanyardInfo() {
        // Create a connection to the database
        $connection = new Database();

        // Instantiate the Lanyards class and get the materials
        $lanyards = new Lanyards($connection);
        $materialsResult = $lanyards->getMaterials();

        // Initialize the array to store the JSON
        $mwJson = array();

        // Iterate over each material
        foreach ($materialsResult as $material) {
            // Initialize the array to store the details of each material
            $materialData = array(
                "materials" => array(
                    "material" => $material["material"],
                    "linkImg" => $material["linkImg"],
                    "description" => $material["description"],
                    "lanyardType" => array(), // Initialize the array to store lanyard type data
                    "width" => array() // Initialize the array to store width data
                )
            );

            // Create a new connection to the database
            $connection = new Database();

            // Instantiate the LanyardType_Model class and set the current material
            $lanyardTypeClass = new TypeLanyards_Models($connection);
            $lanyardTypeClass->setMaterial($material["material"]);

            // Get all lanyard types for the current material
            $lanyardTypeResult = $lanyardTypeClass->getAllLanyardsTypesByMaterial();

            // Iterate over each lanyard type and add it to the material data array
            foreach ($lanyardTypeResult as $lanyardType) {
                $lanyardTypeData = array(
                    "type" => $lanyardType["type"],
                    "imgLink" => $lanyardType["imgLink"],
                    "price" => $lanyardType["price"]
                );

                // Add the lanyard type data to the material data array
                $materialData["materials"]["lanyardType"][] = $lanyardTypeData;
            }

            // Create a new connection to the database
            $connection = new Database();

            // Instantiate the Width_Model class and set the current material
            $widthClass = new Width_Model($connection);
            $widthClass->setMaterial($material["material"]);

            // Get all widths for the current material
            $widthResult = $widthClass->getAllWidthByMaterial();

            // Iterate over each width and add it to the material data array
            foreach ($widthResult as $width) {
                $widthData = array(
                    "width" => $width["width"],
                    "imgLink" => $width["imgLink"],
                    "sidePrinted" => array(), // Initialize the array to store side printed data
                    "clips" => array() // Initialize the array to store clip data
                );

                // Instantiate the SidePrinted_Model class and set the current material and width
                $connection = new Database();
                $sidePrintedClass = new SidePrinted_Model($connection);
                $sidePrintedClass->setMaterial($material["material"]);
                $sidePrintedClass->setWidth($width["width"]);

                // Get the side printed data for the current material and width
                $sidePrintedResult = $sidePrintedClass->getAllSidePrintedByWidth();

                // Iterate over each side printed result and add it to the width data array
                foreach ($sidePrintedResult as $sidePrinted) {
                    $sidePrintedData = array(
                        "noSides" => $sidePrinted["noSides"],
                        "noColours" => array() // Initialize the array to store color options data
                    );

                    // Instantiate the NoColours_Model class and set the current material, width, and side printed
                    $connection = new Database();
                    $noColourClass = new NoColours_Models($connection);
                    $noColourClass->setMaterial($material["material"]);
                    $noColourClass->setWidth($width["width"]);
                    $noColourClass->setNoSides($sidePrinted["noSides"]);

                    // Get the color options for the current side printed
                    $noColourResult = $noColourClass->getAllNoColoursBySidePrinted();

                    // Iterate over each color option and add it to the side printed data array
                    foreach ($noColourResult as $noColour) {
                        $noColourData = array(
                            "noColour" => $noColour["option"],
                            "amount" => array() // Initialize the array to store amount data
                        );

                        // Instantiate the Amount_Models class and set the current material, width, side printed, and color option
                        $connection = new Database();
                        $amountClass = new Amount_Models($connection);
                        $amountClass->setMaterial($material["material"]);
                        $amountClass->setWidth($width["width"]);
                        $amountClass->setNoSides($sidePrinted["noSides"]);
                        $amountClass->setNoColour($noColour["option"]);

                        // Get the amount for the current color option
                        $amountResult = $amountClass->getAllAmountByNoColour();

                        // Iterate over each amount and add it to the color option data array
                        foreach ($amountResult as $amount) {
                            $noColourData["amount"][] = array(
                                "min-amount" => $amount["min-amount"],
                                "max-amount" => $amount["max-amount"],
                                "price" => $amount["price"]
                            );
                        }

                        // Add the color option data to the side printed data array
                        $sidePrintedData["noColours"][] = $noColourData;
                    }

                    // Add the side printed data to the width data array
                    $widthData["sidePrinted"][] = $sidePrintedData;
                }

                // Instantiate the Clip_Model class and set the current material and width
                $connection = new Database();
                $clipClass = new Clips_Models($connection);
                $clipClass->setMaterial($material["material"]);
                $clipClass->setWidth($width["width"]);

                // Get the clip data for the current material and width
                $clipResult = $clipClass->getAllClipsByWidth();

                // Iterate over each clip result and add it to the width data array
                foreach ($clipResult as $clip) {
                    $clipData = array(
                        "name" => $clip["name"],
                        "imgLinkOneEnd" => $clip["imgLinkOneEnd"],
                        "imgLinkTwoEnd" => $clip["imgLinkTwoEnd"],
                        "price" => $clip["price"]
                    );

                    // Add the clip data to the width data array
                    $widthData["clips"][] = $clipData;
                }

                // Add the width data to the material data array
                $materialData["materials"]["width"][] = $widthData;
            }

            // Add the material data to the output array
            $mwJson[] = $materialData;
        }

        // Encode the output array as JSON and return it
        return($mwJson);
    }



}




// Instantiate the Material class and handle the request
$material = new Material();
$material->handleRequest();
?>
