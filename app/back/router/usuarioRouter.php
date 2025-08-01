<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
// Libera acesso de qualquer origem
header("Access-Control-Allow-Origin: *");

// Libera os métodos aceitos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Libera os headers permitidos
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

// (restante do seu código abaixo)
require_once(__DIR__ . '/../controller/usuarioController.php');
// ...


    if (isset($_GET["acao"])) {
        $acao = $_GET["acao"];
        $usuarioController = new UsuarioController();

        switch ($acao) {
            case 'create':
                if (isset($_POST["nome"], $_POST["email"], $_POST["senha"])) {
                    $resultado = $usuarioController->CreateUsuario(
                        $_POST["nome"],
                        $_POST["email"],
                        $_POST["senha"]
                    );
                    echo json_encode($resultado);
                } else {
                    echo json_encode(["status" => "error", "mensagem" => "Campos incompletos."]);
                }
                break;

            default:
                echo json_encode(["status" => "error", "mensagem" => "Ação inválida."]);
        }
    } else {
        echo json_encode(["status" => "error", "mensagem" => "Ação não especificada."]);
    }
}
