<?php
require_once __DIR__ . "/../controller/usuarioController.php";
$usuarioController = new UsuarioController();

if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    switch ($_GET["acao"]) {
        case 'create':
         $resultado = $usuarioController->CreateUsuario($_POST["nome"],$_POST["senha"]);
         if($resultado){
            header("Location: ../view/home/index.php");
         }else{
            header("Location: ../view/cadastro/index.php");
         }
         break;

         
        case "update":
            $resultado = $usuarioController->UpdateUsuario($_POST["nome"],$_POST["senha"], $_POST["usuario_id"]);
            if($resultado){
                header("Location: ../view/home/index.php");
            }else{
                header("Location: ../view/cadastro/index.php?id={$_POST['usuario_id']}");
            }
            break;
        case "deletarUsuario":
            $resultado = $usuarioController->DeletarUsuario($_POST["usuario_id"]);
            header("Location: ../view/home/index.php");
            break;
        
        default:
            echo "Nao encontrei nada";
            break;
    }
}