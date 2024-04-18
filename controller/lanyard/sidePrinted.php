<?php
class SidePrinted {

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
    function getAllSidePrintedByWidth($widthSelected, $materialSelected){


     // Create a database connection
     $connection = new Database();

     // Create a new Users instance and set user data
     $sidePrinted = new SidePrinted_Model($connection);
     $sidePrinted->setWidth($widthSelected);
     $sidePrinted->setMaterial($materialSelected);
     $response = $sidePrinted->getAllSidePrintedByWidth();
     //echo json_encode($response); exit;
     return $response;
   }

   function selectSidePrinted($allSidePrinted){

    // echo json_encode($allSidePrinted);exit;


     if (session_status() === PHP_SESSION_NONE) {// Iniciar la sesión si no está iniciada aún
    // Si no hay una sesión activa, inicia una
    session_start();
    }

     //echo json_encode($allSidePrinted); exit;
    /*  if (isset($_SESSION['sidePrintedSelected'])) {
      //  return $_SESSION['sidePrintedSelected'];
      } else {
        $array = [];
        foreach ($allSidePrinted as $key) {
          $array[] = $key["noSides"];
        }



        $sidePrintedSelected = $array[0];
      //  return $sidePrintedSelected;
    }*/
      $array = [];
      foreach ($allSidePrinted as $key) {
        $array[] = $key["noSides"];
      }



      $sidePrintedSelected = $array[0];

      return $sidePrintedSelected;



   }

   // Private function to handle the action of setting the selected material
   function setSessionSidePrinted($sidePrintedSelected) {
     if (session_status() === PHP_SESSION_NONE) {// Iniciar la sesión si no está iniciada aún
    // Si no hay una sesión activa, inicia una
    session_start();
    }
       $_SESSION['sidePrintedSelected'] = $sidePrintedSelected; // Store the selected material option in the session
   }
   function getSessionSidePrinted() {
     if (session_status() === PHP_SESSION_NONE) {// Iniciar la sesión si no está iniciada aún
    // Si no hay una sesión activa, inicia una
    session_start();
    }
       return $_SESSION['$sidePrintedSelected'] ; // Store the selected material option in the session
   }



}

// Include required files
require_once '../config/database.php';
require_once '../../models/sidePrinted.php';


$sidePrinted = new SidePrinted();
$sidePrinted->handleRequest();
?>
