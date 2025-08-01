
<?php
require_once __DIR__ . "/../config/db/database.php";

class CadastroCliente {
    private $conn;

    public function __construct() {
        $banco = new Database();
        $this->conn = $banco->Connect();
    }

    public function cadastrarCliente($tipo, $nome, $contato, $email) {
        try {
            $sql = "INSERT INTO cliente (tipo, nome, contato, email) VALUES (:tipo, :nome, :contato, :email)";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(":tipo", $tipo);
            $stmt->bindParam(":nome", $nome);
            $stmt->bindParam(":contato", $contato);
            $stmt->bindParam(":email", $email);
            return $stmt->execute();
        } catch (PDOException $e) {
            return false;
        }
    }

    public function listarClientes() {
        try {
            $sql = "SELECT * FROM cliente ORDER BY id DESC";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return [];
        }
    }
}
?>
