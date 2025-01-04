<?php
echo ("hi9");exit;

class ApiHandlerLogin {
    // Function to handle incoming requests
    public function handleRequest() {
      echo json_encode("entramos");exit;
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
                    case "login":
                        $this->handleLogin($data);
                        break;
                    case "logout":
                        $this->handleLogout($data);
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
    private function handleLogin($data){
      $email = $data->emailLogin;
      $password = $data->passwordLogin;


      // Create a database connection
      $connection = new Database();

      // Create a new Users instance and set user data
      $user = new Users($connection);
      $user->setEmail($email);

          // Create the user in the database
          $storedHash = $user->getPasswordUserByEmail();

          if (password_verify($password, $storedHash)) {
              $response = array("message" => true);
              session_start();
              $_SESSION['logged_in'] = true;
              echo json_encode($response);
          } else {
              $response = array("message" => false);
              echo json_encode($response);
          }
    }

    private function handleLogout($data){
          echo "Logan";
    }

    break;
}
// Include required files
require_once '../config/database.php';
require_once '../../models/users.php';

// Create an instance of the ApiHandler class and handle the request
$apiHandlerLogin = new ApiHandlerLogin();
$apiHandlerLogin->handleRequest();
?>
