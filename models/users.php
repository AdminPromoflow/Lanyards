<?php
class Users {
  // Private variables
  private $connection; // The database connection
  private $name;      // User's name
  private $email;     // User's email
  private $password;  // User's password

  // Constructor that initializes the connection.
  function __construct($connection) {
    $this->connection = $connection;
  }

  // Set the user's name
  public function setName($name) {
    $this->name = $name;
  }

  // Set the user's email.
  public function setEmail($email) {
    $this->email = $email;
  }

  /** Set the user's password.
  *
  * @param password  the password.
  *
  **/
  public function setPassword($password) {
    $this->password = $password;
  }

  /*
   * Check if a user with the given email already exists in the database.
   */
  public function checkIfUserExistsByEmail() {
    try {
      // Prepare the SQL query with placeholders
      $sql = $this->connection->getConnection()->prepare("SELECT COUNT(*) FROM `Users` WHERE `email` = :email");

      // Bind the email parameter
      $sql->bindParam(':email', $this->email, PDO::PARAM_STR);

      // Execute the query
      $sql->execute();

      // Fetch the user count
      $userCount = $sql->fetch(PDO::FETCH_ASSOC);

      return $userCount;
    } catch(PDOException $e) {
      // Handle any exceptions and provide an error message
      echo "Error in the query: " . $e->getMessage();
      throw new Exception("Error in the user verification query.");
    }
  }
  /*
   * Check if a user with the given email already exists in the database.
   */
   public function getPasswordUserByEmail() {
       try {
           // Prepare the SQL query with placeholders
           $sql = $this->connection->getConnection()->prepare("SELECT `password` FROM `Users` WHERE `email` = :email");

           // Bind the email parameter
           $sql->bindParam(':email', $this->email, PDO::PARAM_STR);

           // Execute the query
           $sql->execute();

           // Fetch the password
           $password = $sql->fetchColumn(); // Retrieve the password as a single value

           // Close the database connection
           $this->connection->closeConnection();

           return $password;

       } catch (PDOException $e) {
           // Handle any exceptions and provide an error message
           echo "Error in the query: " . $e->getMessage();
           throw new Exception("Error in the user verification query.");
       }
   }

  /*
   * Create a new user with the provided name, email, and password.
   */
  public function createUser() {
    try {
      // Prepare the SQL query with placeholders.
      $sql = $this->connection->getConnection()->prepare("INSERT INTO `Users` (`name`, `email`, `password`) VALUES (:name, :email, :password)");

      // Bind parameters.
      $sql->bindParam(':name', $this->name, PDO::PARAM_STR);
      $sql->bindParam(':email', $this->email, PDO::PARAM_STR);
      $sql->bindParam(':password', $this->password, PDO::PARAM_STR);

      // Execute the query
      $sql->execute();

      // Close the database connection
      $this->connection->closeConnection();
    } catch(PDOException $e) {
      // Handle any exceptions and provide an error message
      echo "Error in the query: " . $e->getMessage();
    }
  }

    /*
   * Get a list of all customers from the database.
   *
   * @return array An array of customer data, or an empty array if no customers are found.
   */
  public function getAllLanyardCustomers() {
      try {
          // Prepare the SQL query to select all customers
          $sql = $this->connection->getConnection()->prepare("SELECT `nameUser`, `emailUser` FROM `Users`");

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

}
?>
