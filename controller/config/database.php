<?php
class Database {
  // Database connection parameters
  private $servername = 'localhost';
  private $dbname = "Lanyards";//u273173398_Lanyards
  private $username = "root";//u273173398_Cat
  private $password = "root";//32skiff32!CI
  private $connection;

  // Constructor to establish a database connection
   public function __construct() {
        try {
            // Create a PDO connection
            $this->connection = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);

            // Set PDO error mode to exception for better error handling
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            // Handle connection errors
            echo "Connection failed: " . $e->getMessage();
        }
    }

    // Method to get the database connection
    public function getConnection() {
        return $this->connection;
    }

    // Method to close the database connection
    public function closeConnection() {
        $this->connection = null;
    }
}
 ?>
