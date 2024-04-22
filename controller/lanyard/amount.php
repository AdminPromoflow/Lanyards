<?php
class Amount {

  private $noSides;
  private $width;
  private $material;
  private $amountSelected;
  private $noColour;
  private $minAmount;


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
    public function setAmountSelected($amountSelected){
      $this->amountSelected = $amountSelected;
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
    public function setNoColour($noColour) {
      $this->noColour = $noColour;
    }
    public function setMinAmount($minAmount){
      $this->minAmount = $minAmount;
    }


    public function getAllAmountByNoColour(){


     // Create a database connection
     $connection = new Database();

     // Create a new Users instance and set user data
     $amount = new Amount_Models($connection);
     $amount->setMaterial($this->material);
     $amount->setWidth($this->width );
     $amount->setNoSides($this->noSides);
     $amount->setNoColour($this->noColour);


     $response = $amount->getAllAmountByNoColour();
     return $response;
   }
   public function getAllPriceOfWidth(){


    // Create a database connection
    $connection = new Database();

    // Create a new Users instance and set user data
    $amount = new Amount_Models($connection);
    $amount->setMaterial($this->material);
    $amount->setWidth($this->width );
    $amount->setNoSides($this->noSides);
    $amount->setNoColour($this->noColour);
    $amount->setMinAmount($this->minAmount);
    $response = $amount->getAllPriceOfWidth();
    return $response;
  }

  function selectPrice($allAmount){
    if (session_status() === PHP_SESSION_NONE) {// Iniciar la sesión si no está iniciada aún
   // Si no hay una sesión activa, inicia una
   session_start();
   }
   /*  if (isset($_SESSION['amountSelected'])) {
       return $_SESSION['amountSelected'];
     } else {
       $array = [];
       foreach ($allAmount as $key) {
         $array[] = $key["noSides"];
       }

       $amountSelected = $array[0];
       return $amountSelected;
     }*/

     $array = [];

     foreach ($allAmount as $key) {
       $array[] = $key["price"];
     }

     $amountSelected = $array[0];

     return $amountSelected;


  }function selectAmount($allAmount){
    if (session_status() === PHP_SESSION_NONE) {// Iniciar la sesión si no está iniciada aún
   // Si no hay una sesión activa, inicia una
   session_start();
   }
   /*  if (isset($_SESSION['amountSelected'])) {
       return $_SESSION['amountSelected'];
     } else {
       $array = [];
       foreach ($allAmount as $key) {
         $array[] = $key["noSides"];
       }

       $amountSelected = $array[0];
       return $amountSelected;
     }*/

     $array = [];

     foreach ($allAmount as $key) {
       $array[] = $key["min-amount"];
     }

     $amountSelected = $array[0];

     return $amountSelected;


  }

   // Private function to handle the action of setting the selected material
   function setSessionAmount($amountSelected) {
     if (session_status() === PHP_SESSION_NONE) {// Iniciar la sesión si no está iniciada aún
    // Si no hay una sesión activa, inicia una
    session_start();
    }       $_SESSION['amountSelected'] = $amountSelected; // Store the selected material option in the session
   }
   function getSessionAmount() {
     if (session_status() === PHP_SESSION_NONE) {// Iniciar la sesión si no está iniciada aún
    // Si no hay una sesión activa, inicia una
    session_start();
    }       return $_SESSION['$amountSelected'] ; // Store the selected material option in the session
   }



}

// Include required files
require_once '../config/database.php';
require_once '../../models/amount.php';


$amount = new Amount();
$amount->handleRequest();
?>
