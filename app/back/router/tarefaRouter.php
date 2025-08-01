<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../controller/tarefaController.php';
$controller = new TarefaController();

$acao = $_GET['acao'] ?? '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $acao === 'create') {
    // Use nomes sem acento para evitar problemas
    $resultado = $controller->CreateTarefa(
        $_POST['dia'] ?? '',
        $_POST['descricao'] ?? '',
        $_POST['endereco'] ?? '',
        $_POST['empresa'] ?? '',
        $_POST['valor'] ?? ''
    );

    echo json_encode($resultado);

} elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && $acao === 'listar') {
    $resultado = $controller->ListarTarefas();
    echo json_encode($resultado);

} else {
    echo json_encode([
        'status' => 'error',
        'mensagem' => 'Requisição inválida ou ação incorreta'
    ]);
}
