<?php
// Include necessary files for database configuration and model.
require_once '../config/database.php';
require_once '../../models/users.php';

// Define the expected authentication token.
$expectedToken = "ZaPWPtiQvAjwWBFXvOzu3Cfo4PUZiQ4f"; // Replace this with your actual token.

// Check if the request is a POST request.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if an authentication token is provided in the headers.
    $providedToken = $_SERVER['HTTP_AUTH_TOKEN'];

    if ($providedToken === $expectedToken) {
        // The token is valid, proceed with handling the request.

        // Get the JSON data from the request.
        $json_data = file_get_contents('php://input');

        // Decode the JSON to get the data as an associative array.
        $data = json_decode($json_data, true);

        // Check if the "action" property is present and its value is "getAllLanyardCustomers".
        if (isset($data['action']) && $data['action'] === "getAllLanyardCustomers") {
            // Create a new database connection instance.
            $connection = new Database();

            // Create a new Users instance with the database connection.
            $user = new Users($connection);

            // Retrieve the list of all customers from the database.
            $response = $user->getAllLanyardCustomers();

            // Encode the response data as JSON.
            $json_response = json_encode($response);

            // Set the Content-Type header to indicate that the response is in JSON format.
            header('Content-Type: application/json');

            // Send the JSON response.
            echo $json_response;
        } else {
            // Invalid "action" property, send a response with a 400 Bad Request status.
            http_response_code(400);
            echo 'The "action" property is not valid or is missing in the JSON.';
        }
    } else {
        // Invalid token, send an unauthorized error response with a 401 Unauthorized status.
        http_response_code(401);
        echo 'Invalid authentication token.';
    }
} else {
    // If a non-POST request is received, send a response with a 405 Method Not Allowed status.
    http_response_code(405);
    echo 'Only POST requests are allowed in this service.';
}
?>
