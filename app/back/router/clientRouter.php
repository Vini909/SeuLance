
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once __DIR__ . "/../controller/cad_client.php";

$cadastro = new CadastroCliente();
$acao = isset($_GET["acao"]) ? strtolower($_GET["acao"]) : "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    switch ($acao) {
        case 'create':
            $tipo = $_POST["tipo"] ?? "";
            $nome = $_POST["nome"] ?? "";
            $contato = $_POST["contato"] ?? "";
            $email = $_POST["email"] ?? "";

            $resultado = $cadastro->cadastrarCliente($tipo, $nome, $contato, $email);

            echo json_encode($resultado ? [
                "status" => "success",
                "mensagem" => "Cliente cadastrado com sucesso!"
            ] : [
                "status" => "error",
                "mensagem" => "Erro ao cadastrar cliente."
            ]);
            break;

        default:
            echo json_encode([
                "status" => "error",
                "mensagem" => "Ação POST inválida."
            ]);
            break;
    }
}

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    switch ($acao) {
        case 'listar':
            $resultado = $cadastro->listarClientes();
            echo json_encode([
                "status" => "success",
                "dados" => $resultado
            ]);
            break;

        default:
            echo json_encode([
                "status" => "error",
                "mensagem" => "Ação GET inválida."
            ]);
            break;
    }
}
?>
