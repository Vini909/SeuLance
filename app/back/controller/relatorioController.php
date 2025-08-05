<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../config/database.php';

function registrarRelatorio() {
    global $conn;

    // Recebe dados POST
    $data = $_POST['data'] ?? null;
    $valor = $_POST['valor'] ?? null;
    $tipo = $_POST['tipo'] ?? 'lucro';
    $cliente_id = $_POST['cliente_id'] ?? null;

    if (!$data || !$valor) {
        echo json_encode(["status" => "error", "mensagem" => "Dados incompletos"]);
        return;
    }

    $sql = "INSERT INTO relatorio (data, valor, tipo, cliente_id) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        echo json_encode(["status" => "error", "mensagem" => "Erro na preparação da query: " . $conn->error]);
        return;
    }

    // cliente_id pode ser null, então bind como integer ou null
    if ($cliente_id === null) {
        $stmt->bind_param("sds", $data, $valor, $tipo);
        // Mas no seu banco o cliente_id não é obrigatório (nullable) então pode omitir
        $sql = "INSERT INTO relatorio (data, valor, tipo) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["status" => "error", "mensagem" => "Erro na preparação da query: " . $conn->error]);
            return;
        }
        $stmt->bind_param("sds", $data, $valor, $tipo);
    } else {
        $stmt->bind_param("sdsi", $data, $valor, $tipo, $cliente_id);
    }

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "mensagem" => "Registro inserido com sucesso"]);
    } else {
        echo json_encode(["status" => "error", "mensagem" => "Erro ao inserir no banco: " . $stmt->error]);
    }

    $stmt->close();
}

function consultarRelatorio() {
    global $conn;

    $sql = "SELECT id, data, valor, tipo, cliente_id FROM relatorio ORDER BY data ASC";
    $result = $conn->query($sql);

    if (!$result) {
        echo json_encode(["status" => "error", "mensagem" => "Erro na consulta: " . $conn->error]);
        return;
    }

    $relatorio = [];

    while ($row = $result->fetch_assoc()) {
        $relatorio[] = $row;
    }

    echo json_encode(["status" => "success", "relatorio" => $relatorio]);
}
