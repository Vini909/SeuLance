<?php
require_once __DIR__ . "/../config/db/database.php";

class LoginController {

    private $conn;

    public function __construct() {
        $banco = new Database();
        $this->conn = $banco->Connect();
    }

    public function ValidarLogin($email, $senha) {
        try {
            $sql = "SELECT * FROM usuario WHERE email = :email AND senha = :senha";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":email", $email);
            $db->bindParam(":senha", $senha);
            $db->execute();

            $usuario = $db->fetch(PDO::FETCH_ASSOC); // Pega apenas um resultado

            return $usuario !== false;

        } catch (\Throwable $th) {
            // Para debug:
            // echo "Erro: " . $th->getMessage();
            return false;
        }
    }
}
