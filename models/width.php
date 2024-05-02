<?php
class Width_Model {
  // Private variables
  private $connection; // The database connection
  private $material;



  // Constructor that initializes the connection.
  function __construct($connection) {
    $this->connection = $connection;
  }

  // Set the user's name
  public function setMaterial($material) {

    $this->material = $material;

  }



  public function getAllWidthByMaterial() {
    //echo json_encode($this->material."hola");  exit;
    try {
        // Prepare the SQL query with placeholders
        $sql = $this->connection->getConnection()->prepare("SELECT  `Width`.`width`, `Width`.`imgLink`
          FROM `Lanyards`
          JOIN `Width` ON `Lanyards`.`idLanyard` = `Width`.`idLanyard`
          WHERE  `Lanyards`.`material`   =  :material");

        // Bind the email parameter
        $sql->bindParam(':material', $this->material, PDO::PARAM_STR);
      //  echo json_encode($this->material);exit;

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
