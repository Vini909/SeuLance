<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/../config/db/database.php';
require_once __DIR__ . '/../controller/relatorioController.php';

$db = new Database();
$conn = $db->Connect();
$relatorioController = new RelatorioController($conn);

$acao = $_GET["acao"] ?? '';

$response = ["status" => "error", "mensagem" => "Ação inválida"];

switch ($acao) {
    case "registrar":
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        if (!$data || !isset($data["data"]) || !isset($data["valor"])) {
            $response = ["status" => "error", "mensagem" => "Dados inválidos"];
            break;
        }

        $response = $relatorioController->registrarRelatorio(
            $data["data"],
            floatval($data["valor"]),
            $data["tipo"] ?? 'lucro'
        );
        break;

    case "consultar":
        $tipo = $_GET["tipo"] ?? 'lucro';
        $response = $relatorioController->consultarRelatorio($tipo);
        break;
}

echo json_encode($response);
?>
