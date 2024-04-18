<?php
class Clips {

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
    function getAllClipsByMaterial($MaterialSelected, $materialSelected){


     // Create a database connection
     $connection = new Database();

     // Create a new Users instance and set user data
     $clips = new Clips_Model($connection);
     /*$clips->setMaterial($MaterialSelected);
     $clips->setMaterial($materialSelected);
     $response = $clips->getAllClipsByMaterial();
     //echo json_encode($response); exit;
     return $response;*/
   }

   function selectClips($allClips){
     session_start(); // Iniciar la sesión si no está iniciada aún
     //echo json_encode($allClips); exit;
      if (isset($_SESSION['clipsSelected'])) {
        return $_SESSION['clipsSelected'];
      } else {
        $array = [];
        foreach ($allClips as $key) {
          $array[] = $key["noSides"];
        }

        $clipsSelected = $array[0];
        return $clipsSelected;
      }


   }

   // Private function to handle the action of setting the selected material
   function setSessionClips($clipsSelected) {
       session_start(); // Start or resume a session
       $_SESSION['clipsSelected'] = $clipsSelected; // Store the selected material option in the session
   }
   function getSessionClips() {
       session_start(); // Start or resume a session
       return $_SESSION['$clipsSelected'] ; // Store the selected material option in the session
   }



}

// Include required files
require_once '../config/database.php';
require_once '../../models/clips.php';


$clips = new Clips();
$clips->handleRequest();
?>
