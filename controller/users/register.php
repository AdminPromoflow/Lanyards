<?php
class ApiHandler {
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
                    case "register":

                        $this->handleRegistration($data);
                        break;

                    case "login":
                        $this->handleLogin();
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

    // Function to handle user registration
    private function handleRegistration($data) {
        // Extract user registration data from JSON
        $name = $data->nameRegister;
        $email = $data->emailRegister;
        $password = $data->passwordRegister;

        // Validate user data using the Security class
        $security = new Security();
        $var = $security->validateUserData($name, $email, $password);

        if (!!$var) {
            // Create a database connection
            $connection = new Database();

            // Create a new Users instance and set user data
            $user = new Users($connection);
            $user->setName($var['username']);
            $user->setEmail($var['email']);
            $user->setPassword($var['password']);

            // Create the user in the database
            $user->createUser();
            ob_start();

            // Usage
            $emailSender = new EmailSender();
            $emailSender->setRecipientEmail($var['email']);
            $emailSender->setRecipientName($var['username']);
            $emailSender->setRecipientPassword($password);

            $emailAnswer = $emailSender->sendEmailRegistration();
            $emailSender->sendEmailRegistrationToAdmin();
            $output = ob_get_clean();


            if ($emailAnswer ==  '1') {
              // Send a success response
              $response = array("message" => "1");
              echo json_encode($response);
            }
            else {
              $response = array("message" => "-1");
              echo json_encode($response);
            }

        } else {
            // User data validation failed, user may already exist
            $response = array("message" => "0");
            echo json_encode($response);
        }
    }

    // Function to handle user login
    private function handleLogin() {
        // Logic to process user login
        // Implement your login logic here and handle any errors appropriately.
        $response = array("message" => "Login successful");
        echo json_encode($response);
    }
}
// Include required files

require_once '../../models/users.php';

require_once '../../controller/users/send-emails.php';

require_once '../../controller/config/database.php';


require_once '../../controller/config/security.php';


// Create an instance of the ApiHandler class and handle the request
$apiHandler = new ApiHandler();
$apiHandler->handleRequest();
?>
