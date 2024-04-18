<?php
class NoColours {
  private $noSides;
  private $width;
  private $material;

    // Function to handle incoming requests
    public function handleRequest() {

        // Check if a POST request was received
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Get the raw JSON data from the request body
            $rawData = file_get_contents("php://input");
            $data = json_decode($rawData);

            // Check if JSON data is valid and contains an "action" field
            if ($data !== null && isset($data->action)) {
                // Get the action from the JSON data
                $action = $data->action;

                // Perform actions based on the request
                switch ($action) {
                    case "setTypeLanyardSelected":


                        break;

                    default:
                        // Unknown action
                      //  http_response_code(400); // Bad Request
                      //  $response = array("message" => "Unknown action");
                        //echo json_encode($response);
                        break;
                }
            } else {
                // Incomplete JSON data or missing action
                http_response_code(400); // Bad Request
                echo json_encode(array("message" => "Incomplete JSON data or missing action"));
            }
        } else {
            // The request is not a valid POST request
          //  http_response_code(405); // Method Not Allowed
          //  echo json_encode(array("message" => "Method not allowed"));
        }
    }



      public function setMaterial($material){
        $this->material = $material;
      }

      public function setWidth($width) {
        $this->width = $width;
      }
      public function setNoSides($noSides) {
        $this->noSides = $noSides;
      }


    function getAllNoColoursBySidePrinted(){


     // Create a database connection
     $connection = new Database();

     // Create a new Users instance and set user data
     $noColours = new NoColours_Models($connection);
     $noColours->setMaterial($this->material);
     $noColours->setWidth($this->width);
     $noColours->setNoSides($this->noSides);


     $response = $noColours->getAllNoColoursBySidePrinted();
     return $response;
   }

   function selectNoColour($allNoColours){
    // echo json_encode($allNoColours);exit;
     if (session_status() === PHP_SESSION_NONE) {// Iniciar la sesión si no está iniciada aún
    // Si no hay una sesión activa, inicia una
    session_start();
    }
    /*  if (isset($_SESSION['noColoursSelected'])) {
        return $_SESSION['noColoursSelected'];
      } else {
        $array = [];
        foreach ($allNoColours as $key) {
          $array[] = $key["option"];
        }
      //echo json_encode($allNoColours);

        $noColoursSelected = $array[0];
        return $noColoursSelected;
      }*/


      $array = [];
      foreach ($allNoColours as $key) {
        $array[] = $key["option"];
      }
    //echo json_encode($allNoColours);

      $noColoursSelected = $array[0];

    // echo json_encode($noColoursSelected );exit;
      return $noColoursSelected;


   }

   // Private function to handle the action of setting the selected material
   function setSessionNoColour($noColoursSelected) {
     if (session_status() === PHP_SESSION_NONE) {// Iniciar la sesión si no está iniciada aún
    // Si no hay una sesión activa, inicia una
    session_start();
    }
       $_SESSION['noColoursSelected'] = $noColoursSelected; // Store the selected material option in the session
   }
   function getSessionNoColours() {
     if (session_status() === PHP_SESSION_NONE) {// Iniciar la sesión si no está iniciada aún
    // Si no hay una sesión activa, inicia una
    session_start();
    }
       return $_SESSION['$noColoursSelected'] ; // Store the selected material option in the session
   }



}

// Include required files
require_once '../config/database.php';
require_once '../../models/noColours.php';


$noColours = new NoColours();
$noColours->handleRequest();
?>
