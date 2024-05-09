<?php
class Amount_Models {
  // Private variables
  private $connection; // The database connection
  private $noSides;
  private $width;
  private $material;
  private $noColour;
  private $minAmount;

  // Constructor that initializes the connection.
  function __construct($connection) {
    $this->connection = $connection;
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




  public function getAllAmountByNoColour() {
    //echo json_encode($this->width."hola");  exit;
    try {

        // Prepare the SQL query with placeholders
        $sql = $this->connection->getConnection()->prepare("SELECT `Amount`.`min-amount`, `Amount`.`max-amount`, `Amount`.`price`, `Lanyards`.`material` FROM  `Lanyards`
        JOIN `Width` ON `Lanyards`.`idLanyard` = `Width`.`idLanyard`
        JOIN `SidePrinted` ON `Width`.`idWidth` = `SidePrinted`.`idWidth`
        JOIN `noColours` ON `SidePrinted`.`idSidePrinted` = `noColours`.`idSidePrinted`
        JOIN `Amount` ON `noColours`.`idNoColour` = `Amount`.`idNoColour`
        WHERE  `Lanyards`.`material` = :material
        AND `Width`.`width` = :width AND `SidePrinted`.`noSides` = :noSides
        AND `noColours`.`option` = :noColours ORDER BY `Amount`.`min-amount` ASC" );

        // Bind the email parameter
        $sql->bindParam(':material', $this->material, PDO::PARAM_STR);
        $sql->bindParam(':width', $this->width, PDO::PARAM_STR);
        $sql->bindParam(':noSides', $this->noSides, PDO::PARAM_STR);
        $sql->bindParam(':noColours', $this->noColour, PDO::PARAM_STR);

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

  public function getAllPriceOfWidth() {
    /*
    Tengo que hacer algo.
    Tengo que imprimir las variables en un echo y mostrarlas al cambiar de material
    poner un alert en materials
    antes de llamar esta funcion poner para capturar las variables y luego un echo de material, noSides, noColour, min y max amount.

    Analizar Porque las busquedas no dan resultado:
    Creo que es porque noColour no coincide
    Entonces poner un if que guarde el valor de price de todos los width y , miento, solo cambiar la variable de color y sidePrinted
    */
    try {

        // Prepare the SQL query with placeholders
        $sql = $this->connection->getConnection()->prepare("SELECT `Width`.`width`, `Width`.`imgLink`, `Amount`.`price`
          FROM `Lanyards`
          JOIN `Width` ON `Lanyards`.`idLanyard` = `Width`.`idLanyard`
          JOIN `SidePrinted` ON `Width`.`idWidth` = `SidePrinted`.`idWidth`
          JOIN `noColours` ON `SidePrinted`.`idSidePrinted` = `noColours`.`idSidePrinted`
          JOIN `Amount` ON `noColours`.`idNoColour` = `Amount`.`idNoColour`
          WHERE `Lanyards`.`material` = :material AND `SidePrinted`.`noSides` = :noSides AND `noColours`.`option` = :noColours AND `Amount`.`min-amount` = :minAmount
          ORDER BY `Amount`.`min-amount` ASC");

        // Bind the email parameter
        $sql->bindParam(':material', $this->material, PDO::PARAM_STR);
        $sql->bindParam(':noSides', $this->noSides, PDO::PARAM_STR);
        $sql->bindParam(':noColours', $this->noColour, PDO::PARAM_STR);
        $sql->bindParam(':minAmount', $this->minAmount, PDO::PARAM_STR);

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

  public function getUnitPriceOfMaterial() {

    try {

        // Prepare the SQL query with placeholders
        $sql = $this->connection->getConnection()->prepare("SELECT `Width`.`width`, `Width`.`imgLink`, `Amount`.`price`
          FROM `Lanyards`
          JOIN `Width` ON `Lanyards`.`idLanyard` = `Width`.`idLanyard`
          JOIN `SidePrinted` ON `Width`.`idWidth` = `SidePrinted`.`idWidth`
          JOIN `noColours` ON `SidePrinted`.`idSidePrinted` = `noColours`.`idSidePrinted`
          JOIN `Amount` ON `noColours`.`idNoColour` = `Amount`.`idNoColour`
          WHERE `Lanyards`.`material` = :material AND `Width`.`width` = :width AND `SidePrinted`.`noSides` = :noSides AND `noColours`.`option` = :noColours AND `Amount`.`min-amount` = :minAmount
          ORDER BY `Amount`.`min-amount` ASC" );

        // Bind the email parameter
        $sql->bindParam(':material', $this->material, PDO::PARAM_STR);
        $sql->bindParam(':width', $this->width, PDO::PARAM_STR);
        $sql->bindParam(':noSides', $this->noSides, PDO::PARAM_STR);
        $sql->bindParam(':noColours', $this->noColour, PDO::PARAM_STR);
        $sql->bindParam(':minAmount', $this->minAmount, PDO::PARAM_STR);




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
