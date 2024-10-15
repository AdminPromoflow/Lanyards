<?php
class HandlerSessionLogin {
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
                    case "checkSessionLogin":
                        $this->handleSessionLogin();
                        break;

                    default:
                        // Unknown action
                        http_response_code(400); // Bad Request
                        $response = array("message" => "Unknown action");
                        echo json_encode($response);
                        break;
                }
            } else {
                // Incomplete JSON data or missing action
                http_response_code(400); // Bad Request
                echo json_encode(array("message" => "Incomplete JSON data or missing action"));
            }
        } else {
            // The request is not a valid POST request
            http_response_code(405); // Method Not Allowed
            echo json_encode(array("message" => "Method not allowed"));
        }
    }


    // Function to handle user login
    private function handleSessionLogin(){

      session_start();
          if ($_SESSION['logged_in']) {
              $response = array("message" => true);

              echo json_encode($response);
          } else {
              $response = array("message" => false);
              echo json_encode($response);
          }
    }
}
//echo json_encode("string3");exit;
// Include required files

//echo "string 6";exit;
// Create an instance of the ApiHandler class and handle the request
$handlerSessionLogin = new HandlerSessionLogin();
$handlerSessionLogin->handleRequest();
?>
