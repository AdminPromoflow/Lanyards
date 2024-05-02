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
                        $response = array ('material' => $infoMaterial,
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

        $response = $lanyards->getAllLanyardMaterials(); // Retrieve all lanyard materials

        return($response); // Send the response with all materials
    }



    private function getAllLanyardInfo(){
        // Crear una conexión a la base de datos
        $connection = new Database();

        // Instanciar la clase Lanyards y obtener los materiales
        $lanyards = new Lanyards($connection);
        $materialsResult = $lanyards->getMaterials();

        // Inicializar el array para almacenar el JSON
        $mwJson = array();

        // Iterar sobre cada material
        foreach ($materialsResult as $material) {
            // Inicializar el array para almacenar los detalles de cada material
            $materialData = array(
                "materials" => array(
                    "material" => $material["material"],
                    "linkImg" => $material["linkImg"],
                    "description" => $material["description"],
                    "width" => array() // Inicializar el array para almacenar los datos de ancho
                )
            );

            // Crear una nueva conexión a la base de datos
            $connection = new Database();

            // Instanciar la clase Width_Model y configurar el material actual
            $widthClass = new Width_Model($connection);
            $widthClass->setMaterial($material["material"]);

            // Obtener todos los anchos para el material actual
            $widthResult = $widthClass->getAllWidthByMaterial();

            // Iterar sobre cada ancho y agregarlo al array de datos del material
            foreach ($widthResult as $width) {
                $widthData = array(
                    "width" => $width["width"],
                    "imgLink" => $width["imgLink"],
                    "sidePrinted" => array() // Inicializar el array para almacenar los datos de impresión lateral
                );

                // Instanciar la clase SidePrinted_Model y configurar el material y el ancho actual
                $connection = new Database();
                $sidePrintedClass = new SidePrinted_Model($connection);
                $sidePrintedClass->setMaterial($material["material"]);
                $sidePrintedClass->setWidth($width["width"]);

                // Obtener los datos de impresión lateral para el material y el ancho actual
                $sidePrintedResult = $sidePrintedClass->getAllSidePrintedByWidth();

                // Iterar sobre cada resultado de impresión lateral y agregarlo al array de datos de ancho
                foreach ($sidePrintedResult as $sidePrinted) {
                    $sidePrintedData = array(
                        "noSides" => $sidePrinted["noSides"],
                        "noColours" => array() // Inicializar el array para almacenar los datos de opciones de colores
                    );

                    // Instanciar la clase NoColours_Model y configurar el material, ancho y impresión lateral actual
                    $connection = new Database();
                    $noColourClass = new NoColours_Models($connection);
                    $noColourClass->setMaterial($material["material"]);
                    $noColourClass->setWidth($width["width"]);
                    $noColourClass->setNoSides($sidePrinted["noSides"]);

                    // Obtener las opciones de colores para la impresión lateral actual
                    $noColourResult = $noColourClass->getAllNoColoursBySidePrinted();

                    // Iterar sobre cada opción de color y agregarla al array de datos de impresión lateral
                    foreach ($noColourResult as $noColour) {
                        $noColourData = array(
                            "noColour" => $noColour["option"],
                            "amount" => array() // Inicializar el array para almacenar los datos de cantidad
                        );

                        // Instanciar la clase Amount_Models y configurar el material, ancho, impresión lateral y opción de color actual
                        $connection = new Database();
                        $amountClass = new Amount_Models($connection);
                        $amountClass->setMaterial($material["material"]);
                        $amountClass->setWidth($width["width"]);
                        $amountClass->setNoSides($sidePrinted["noSides"]);
                        $amountClass->setNoColour($noColour["option"]);

                        // Obtener la cantidad para la opción de color actual
                        $amountResult = $amountClass->getAllAmountByNoColour();

                        // Iterar sobre cada cantidad y agregarla al array de datos de opción de color
                        foreach ($amountResult as $amount) {
                            $noColourData["amount"][] = array(
                                "min-amount" => $amount["min-amount"],
                                "max-amount" => $amount["max-amount"],
                                "price" => $amount["price"]
                            );
                        }

                        // Agregar los datos de la opción de color al array de datos de impresión lateral
                        $sidePrintedData["noColours"][] = $noColourData;
                    }

                    // Agregar los datos de impresión lateral al array de datos de ancho
                    $widthData["sidePrinted"][] = $sidePrintedData;
                }

                // Agregar los datos de ancho al array de datos del material
                $materialData["materials"]["width"][] = $widthData;
            }

            // Agregar los datos del material al array de salida
            $json[] = $materialData;
        }

        // Codificar el array de salida como JSON y devolverlo
        return($json);
    }

}




// Instantiate the Material class and handle the request
$material = new Material();
$material->handleRequest();
?>
