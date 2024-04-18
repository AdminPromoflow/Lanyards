<?php
class Width {

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
    function getAllWidthByMaterial($materialSelected){
      //echo json_encode($materialSelected);  exit;

     // Create a database connection
     $connection = new Database();

     // Create a new Users instance and set user data
     $width = new Width_Model($connection);
     $width->setMaterial($materialSelected);

     $response = $width->getAllWidthByMaterial();
     return $response;
   }
   function selectWidth($allWidth){
     // Start or resume a session
     /*if (session_status() === PHP_SESSION_NONE) {
       // Si no hay una sesión activa, inicia una
       session_start();
       }

      if (isset($_SESSION['widthSelected'])) {
        return $_SESSION['widthSelected'];
      } else {
        $array = [];
        foreach ($allWidth as $key) {
          $array[] = (int)$key["width"];
        }
        $widthSelected = min($array);
        return $widthSelected."mm";
      }*/
      $array = [];
      foreach ($allWidth as $key) {
        $array[] = (int)$key["width"];
      }
      $widthSelected = min($array);
      return $widthSelected."mm";


   }

   // Private function to handle the action of setting the selected material
   function setSessionWidth($widthSelected) {
     // Start or resume a session
     if (session_status() === PHP_SESSION_NONE) {
       // Si no hay una sesión activa, inicia una
       session_start();
       }
       $_SESSION['widthSelected'] = $widthSelected; // Store the selected material option in the session
   }
   function getSessionWidth() {
     // Start or resume a session
     if (session_status() === PHP_SESSION_NONE) {
       // Si no hay una sesión activa, inicia una
       session_start();
       }
       return $_SESSION['widthSelected'] ; // Store the selected material option in the session
   }



}

// Include required files
require_once '../config/database.php';
require_once '../../models/width.php';


$width = new Width();
$width->handleRequest();
?>
