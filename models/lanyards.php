<?php
class Lanyards {
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

    /*
   * Get a list of all Materia's lanyards from the database.
   *
   * @return array An array of customer data, or an empty array if no customers are found.
   */
  public function getAllLanyardMaterials() {
      try {
          // Prepare the SQL query to select all customers
          $sql = $this->connection->getConnection()->prepare("SELECT DISTINCT `material`, `linkImg`, `description` FROM `Lanyards` ");

          // Execute the query
          $sql->execute();

          // Fetch all customer data
          $customers = $sql->fetchAll(PDO::FETCH_ASSOC);

          return $customers;
      } catch(PDOException $e) {
          // Handle any exceptions and provide an error message
          echo "Error in the query: " . $e->getMessage();
          throw new Exception("Error in the customer retrieval query.");
      }
  }

  public function getMaterials(){
      try {
          // Prepare the SQL query to select all customers
          $sql = $this->connection->getConnection()->prepare("SELECT  `material`, `linkImg`, `description` FROM `Lanyards` ");


          // Execute the query
          $sql->execute();

          // Fetch all customer data
          $customers = $sql->fetchAll(PDO::FETCH_ASSOC);

          return $customers;
      } catch(PDOException $e) {
          // Handle any exceptions and provide an error message
          echo "Error in the query: " . $e->getMessage();
          throw new Exception("Error in the customer retrieval query.");
      }
  }

  public function getInfoMaterials() {
      try {

          // Prepare the SQL query with placeholders
          $sql = $this->connection->getConnection()->prepare("SELECT *   FROM `Lanyards` WHERE `material`  =  :material");

          // Bind the email parameter
          $sql->bindParam(':material', $this->material, PDO::PARAM_STR);
        //  echo json_encode($this->material);exit;

          // Execute the query
          $sql->execute();

          // Fetch the password
          $response = $sql->fetch(); // Retrieve the password as a single value

          // Close the database connection
          $this->connection->closeConnection();

          return $response;

      } catch (PDOException $e) {
          // Handle any exceptions and provide an error message
          echo "Error in the query: " . $e->getMessage();
          throw new Exception("Error in the user verification query.");
      }
  }

}
?>
