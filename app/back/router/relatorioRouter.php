<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    // Responde as requisições CORS preflight
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../controller/relatorioController.php';

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_GET["acao"]) && $_GET["acao"] === "registrar") {
    registrarRelatorio();
} elseif ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["acao"]) && $_GET["acao"] === "consultar") {
    consultarRelatorio();
} else {
    echo json_encode(["status" => "error", "mensagem" => "Ação inválida"]);
}
