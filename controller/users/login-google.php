<?php
class ApiHandlerLoginGoogle
{
    public function handleRequest() {
        // Check if a GET request was received
        if ($_SERVER["REQUEST_METHOD"] == "GET") {
            // Check if "action" exists in the query parameters
            if (isset($_GET['action'])) {
                $action = $_GET['action'];

                // Perform actions based on the request
                switch ($action) {
                    case "loginGoogle":
                        $this->handleLoginGoogle();
                        break;
                    case "loginGoogleSecondPart":
                        $this->handleLoginGoogleSecondPart();
                        break;
                    default:
                        // Unknown action
                        http_response_code(400); // Bad Request
                        $response = array("message" => "Unknown action");
                        echo json_encode($response);
                        break;
                }
            } else {
                // Missing "action" parameter
                http_response_code(400); // Bad Request
                echo json_encode(array("message" => "Missing 'action' parameter"));
            }
        } else {
            // The request is not a valid GET request
            http_response_code(405); // Method Not Allowed
            echo json_encode(array("message" => "Method not allowed"));
        }
    }

    private function handleLoginGoogle() {
        // Configuración inicial de Google OAuth
        $clientID = '1022332881668-587bktseqso57k6m2dmpfao53vasg83b.apps.googleusercontent.com';
        $clientSecret = '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';
        $redirectUri = 'http://localhost/Lanyards/views/home/index.php';

        // Crear cliente de Google
        $client = new Google_Client();
        $client->setClientId($clientID);
        $client->setClientSecret($clientSecret);
        $client->setRedirectUri($redirectUri);
        $client->addScope("email");
        $client->addScope("profile");

        echo $client->createAuthUrl();
    }

    private function handleLoginGoogleSecondPart() {
        // Configuración inicial de Google OAuth
        $clientID = '1022332881668-587bktseqso57k6m2dmpfao53vasg83b.apps.googleusercontent.com';
        $clientSecret = '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';
        $redirectUri = 'http://localhost/Lanyards/views/home/index.php';

        // Crear cliente de Google
        $client = new Google_Client();
        $client->setClientId($clientID);
        $client->setClientSecret($clientSecret);
        $client->setRedirectUri($redirectUri);
        $client->addScope("email");
        $client->addScope("profile");






        // Check if the HTTP_REFERER is set in the server variables
        if (isset($_SERVER['HTTP_REFERER'])) {
            $refererUrl = $_SERVER['HTTP_REFERER'];

            // Parse the referer URL to get its components
            $urlComponents = parse_url($refererUrl);

            // Check if a query string exists in the URL components
            if (isset($urlComponents['query'])) {
                // Parse the query string into an associative array
                parse_str($urlComponents['query'], $queryParams);

                // Check if the 'code' parameter exists in the query string
                if (isset($queryParams['code'])) {
                    // Fetch the access token using the authorization code
                    $token = $client->fetchAccessTokenWithAuthCode($queryParams['code']);
                    $client->setAccessToken($token['access_token']);

                    // Retrieve the user's profile information
                    $google_oauth = new Google_Service_Oauth2($client);
                    $google_account_info = $google_oauth->userinfo->get();
                    $email = $google_account_info->email;
                    $name = $google_account_info->name;

                    // Return the user's email and name as a JSON response
                    echo json_encode(array(
                        "email" => $email,
                        "name" => $name
                    ));
                }
            }
        }








    }
}
require_once '../../controller/assets/lib/vendor/autoload.php';

//controller/assets/lib/vendor/autoload.php
$apiHandlerLoginGoogle = new ApiHandlerLoginGoogle();
$apiHandlerLoginGoogle->handleRequest();
?>
