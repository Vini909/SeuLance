<?php
require_once(__DIR__ . '/../config/db/database.php');

class UsuarioController {
    public function CreateUsuario($nome, $email, $senha) {
        try {
            $db = new Database();
            $con = $db->Connect();

            $sql = "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)";
            $stmt = $con->prepare($sql);
            $stmt->execute([
                $nome,
                $email,
                $senha
            ]);

            return ["status" => "success", "mensagem" => "Usuário cadastrado com sucesso!"];
        } catch (PDOException $e) {
            return ["status" => "error", "mensagem" => $e->getMessage()];
        }
    }
}
