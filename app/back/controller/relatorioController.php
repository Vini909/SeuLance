<?php
require_once __DIR__ . '/../config/db/database.php';

class RelatorioController {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function registrarRelatorio($data, $valor, $tipo = 'lucro') {
        $sql = "INSERT INTO relatorio (data, valor, tipo) VALUES (:data, :valor, :tipo)";
        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(':data', $data);
        $stmt->bindValue(':valor', $valor);
        $stmt->bindValue(':tipo', $tipo);

        if ($stmt->execute()) {
            return ["status" => "success", "mensagem" => "Relatório registrado com sucesso"];
        } else {
            $errorInfo = $stmt->errorInfo();
            return ["status" => "error", "mensagem" => $errorInfo[2] ?? "Erro desconhecido"];
        }
    }

    public function consultarRelatorio($tipo = 'lucro') {
        $sql = "SELECT * FROM relatorio WHERE tipo = :tipo";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(':tipo', $tipo);
        $stmt->execute();

        $relatorios = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return ["status" => "success", "relatorio" => $relatorios];
    }
}
?>
