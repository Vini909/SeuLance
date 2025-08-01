<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once __DIR__ . "/../controller/loginController.php";
$loginController = new LoginController();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $acao = isset($_GET["acao"]) ? strtolower($_GET["acao"]) : "";

    switch ($acao) {
        case 'validarlogin':
            $email = $_POST["email"] ?? "";
            $senha = $_POST["senha"] ?? "";


            $resultado = $loginController->ValidarLogin($email, $senha);

            if ($resultado) {
                echo json_encode([
                    "status" => "success",
                    "mensagem" => "Login realizado com sucesso!"
                ]);
            } else {
                echo json_encode([
                    "status" => "error",
                    "mensagem" => "Email ou senha inválidos"
                ]);
            }
            break;

        default:
            echo json_encode([
                "status" => "error",
                "mensagem" => "Ação não reconhecida"
            ]);
            break;
    }
}
