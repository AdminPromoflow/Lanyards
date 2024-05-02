<?php
class NoColours_Models {
  // Private variables
  private $connection; // The database connection
  private $width;
  private $material;
  private $noSides;

  // Constructor that initializes the connection.
  function __construct($connection) {
    $this->connection = $connection;
  }

  function setMaterial($material){
    $this->material = $material;
  }

  public function setWidth($width) {
    $this->width = $width;
  }
  public function setNoSides($noSides) {
    $this->noSides = $noSides;
  }


  public function getAllNoColoursBySidePrinted() {
    try {

      // Prepare the SQL query with placeholders
      $sql = $this->connection->getConnection()->prepare("SELECT `noColours`.* FROM  `Lanyards`JOIN `Width` ON `Lanyards`.`idLanyard` = `Width`.`idLanyard` JOIN `SidePrinted` ON `Width`.`idWidth` = `SidePrinted`.`idWidth`
        JOIN `noColours` ON `SidePrinted`.`idSidePrinted` = `noColours`.`idSidePrinted` WHERE  `Lanyards`.`material` = :material AND `Width`.`width` = :width AND `SidePrinted`.`noSides` = :noSides");



        // Bind the email parameter
        $sql->bindParam(':material', $this->material, PDO::PARAM_STR);
        $sql->bindParam(':width', $this->width, PDO::PARAM_STR);
        $sql->bindParam(':noSides', $this->noSides, PDO::PARAM_STR);



      //  echo json_encode($this->width);exit;

        // Execute the query
        $sql->execute();

        // Fetch the password
        $response = $sql->fetchAll(PDO::FETCH_ASSOC);




        // Close the database connection
        $this->connection->closeConnection();



        return $response;

    } catch (PDOException $e) {
        // Handle any exceptions and provide an error message
        echo "Error in the query: " . $e->getMessage();
        throw new Exception("Error in the user verification query.");
    }
  }

    /*
   * Get a list of all Materia's lanyards from the database.
   *
   * @return array An array of customer data, or an empty array if no customers are found.
   */




}
?>
