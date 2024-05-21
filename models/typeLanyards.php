<?php
class TypeLanyards_Models {
  // Private variables
  private $connection; // The database connection
  private $idMaterial;
  private $lanyardType;
  private $material;


  // Constructor that initializes the connection.
  function __construct($connection) {
    $this->connection = $connection;
  }

  // Set the user's name
  public function setIdMaterial($idMaterial) {
    $this->idMaterial = $idMaterial;
  }
  public function setLanyardType($lanyardType) {
    $this->lanyardType = $lanyardType;
  }
  function setMaterial($material){
    $this->material = $material;
  }

  public function getInfoLanyardTypeByIdMaterial() {
      try {
          // Prepare the SQL query with placeholders
          $sql = $this->connection->getConnection()->prepare("SELECT `type`, `price`  FROM `LanyardTypes` WHERE `idLanyard`  =  :idMaterial AND  `type`  =  :lanyardType");

          // Bind the email parameter
          $sql->bindParam(':idMaterial', $this->idMaterial, PDO::PARAM_STR);
          $sql->bindParam(':lanyardType', $this->lanyardType, PDO::PARAM_STR);

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

  public function getAllLanyardsType() {
      try {

          // Prepare the SQL query with placeholders
          $sql = $this->connection->getConnection()->prepare("SELECT DISTINCT `type`, `price`  FROM `LanyardTypes`");

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
    public function getAllLanyardsTypesByIdMaterial() {

        try {

            // Prepare the SQL query with placeholders
            $sql = $this->connection->getConnection()->prepare("SELECT `type`, `price`, `imgLink`  FROM `LanyardTypes` WHERE `idLanyard`  =  :idMaterial ORDER BY `type` ");


            // Bind the email parameter
            $sql->bindParam(':idMaterial', $this->idMaterial, PDO::PARAM_STR);
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
    public function getAllLanyardsTypesByMaterial() {
        try {

            // Prepare the SQL query with placeholders
            $sql = $this->connection->getConnection()->prepare("SELECT `LanyardTypes`.`type`,
              `LanyardTypes`.`price`, `LanyardTypes`.`imgLink`
              FROM `Lanyards`
              JOIN `LanyardTypes`
              ON `LanyardTypes`.`idLanyard` = `Lanyards`.`idLanyard`
              WHERE `Lanyards`.`material` = :material");


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
  }
?>
