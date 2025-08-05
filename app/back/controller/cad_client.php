<?php
require_once __DIR__ . '/../config/db/database.php';

class CadastroCliente {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->Connect();
    }

    public function cadastrarCliente($tipo, $nome, $contato, $email) {
        $stmt = $this->conn->prepare("INSERT INTO cliente (tipo, nome, contato, email, cadastro_data) VALUES (?, ?, ?, ?, CURDATE())");
        $stmt->bind_param("ssss", $tipo, $nome, $contato, $email);

        return $stmt->execute();
    }

    public function listarClientes() {
        $stmt = $this->conn->prepare("SELECT * FROM cliente ORDER BY cadastro_data DESC");
        $stmt->execute();
        $result = $stmt->get_result();

        $clientes = [];
        while ($row = $result->fetch_assoc()) {
            $clientes[] = $row;
        }
        return $clientes;
    }

    public function contarClientesPorData() {
        $query = "SELECT DATE(cadastro_data) AS data, COUNT(*) AS valor FROM cliente GROUP BY DATE(cadastro_data) ORDER BY data ASC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();

        $dados = [];
        while ($row = $result->fetch_assoc()) {
            $dados[] = $row;
        }
        return $dados;
    }
}
?>
