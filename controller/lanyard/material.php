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


                        // Prepare response with materials, lanyard types, and widths
                        $response = array('materials' => $materials);

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
                        $response = array ('material' => $infoMaterial,
                                          'allLanyardTypes' => $allLanyardTypes,
                                          'allWidth' => $allWidthPrice,
                                          'lanyardTypesSelected' => $lanyardTypesSelected,
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

        $response = $lanyards->getAllLanyardMaterials(); // Retrieve all lanyard materials

        return($response); // Send the response with all materials
    }
}

// Instantiate the Material class and handle the request
$material = new Material();
$material->handleRequest();
?>
