<?php
class Extras {

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
    function getAllExtrasByMaterial($MaterialSelected, $materialSelected){


     // Create a database connection
     $connection = new Database();

     // Create a new Users instance and set user data
     $extras = new Extras_Model($connection);
     /*$extras->setMaterial($MaterialSelected);
     $extras->setMaterial($materialSelected);
     $response = $extras->getAllExtrasByMaterial();
     //echo json_encode($response); exit;
     return $response;*/
   }

   function selectExtras($allExtras){
     session_start(); // Iniciar la sesión si no está iniciada aún
     //echo json_encode($allExtras); exit;
      if (isset($_SESSION['extrasSelected'])) {
        return $_SESSION['extrasSelected'];
      } else {
        $array = [];
        foreach ($allExtras as $key) {
          $array[] = $key["noSides"];
        }

        $extrasSelected = $array[0];
        return $extrasSelected;
      }


   }

   // Private function to handle the action of setting the selected material
   function setSessionExtras($extrasSelected) {
       session_start(); // Start or resume a session
       $_SESSION['extrasSelected'] = $extrasSelected; // Store the selected material option in the session
   }
   function getSessionExtras() {
       session_start(); // Start or resume a session
       return $_SESSION['$extrasSelected'] ; // Store the selected material option in the session
   }



}

// Include required files
require_once '../config/database.php';
require_once '../../models/extras.php';


$extras = new Extras();
$extras->handleRequest();
?>
