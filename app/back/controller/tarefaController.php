<?php
require_once __DIR__ . "/../config/db/database.php"; // ou o caminho correto para sua classe Database

class TarefaController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->Connect();
    }

    public function CreateTarefa($dia, $descricao, $endereco, $empresa, $valor) {
        try {
            $sql = "INSERT INTO tarefa (dia, descricao, endereco, empresa, valor) VALUES (:dia, :descricao, :endereco, :empresa, :valor)";
            $stmt = $this->conn->prepare($sql);

            $stmt->bindParam(':dia', $dia);
            $stmt->bindParam(':descricao', $descricao);
            $stmt->bindParam(':endereco', $endereco);
            $stmt->bindParam(':empresa', $empresa);
            $stmt->bindParam(':valor', $valor);

            $stmt->execute();

            return [
                "status" => "success",
                "mensagem" => "Tarefa cadastrada com sucesso!"
            ];
        } catch (PDOException $e) {
            return [
                "status" => "error",
                "mensagem" => "Erro ao inserir tarefa: " . $e->getMessage()
            ];
        }
    }

    public function ListarTarefas() {
        try {
            $sql = "SELECT * FROM tarefa ORDER BY id DESC";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();

            $tarefas = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return [
                "status" => "success",
                "tarefas" => $tarefas
            ];
        } catch (PDOException $e) {
            return [
                "status" => "error",
                "mensagem" => "Erro ao listar tarefas: " . $e->getMessage()
            ];
        }
    }
}
