<?php
require_once __DIR__ . "/../config/db/database.php";

class UsuarioController{

    private $conn;

    public function __construct(){
        $banco = new Database();

        $this->conn = $banco->Connect();
    }

    public function GetAllUsuarios(){
        try {
            $sql = "SELECT * FROM usuarios";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $usuario = $db->fetchAll(PDO::FETCH_ASSOC);

            if($usuario){
                return $usuario;
            }else{
                return false;
            }
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function GetUsuarioById($id){
        try {
            $sql = "SELECT * FROM usuarios WHERE id = :id";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":id",$id);
            $db->execute();
            $usuario = $db->fetch(PDO::FETCH_ASSOC);

            return $usuario;
        

        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function CreateUsuario($nome, $senha){
        try {
            $sql = "INSERT INTO usuarios(nome,senha)VALUES(:nome,:senha)";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":nome",$nome);
            $db->bindParam(":senha",$senha);

            if($db->execute()){
                return true;
            }else{
                return false;
            }

        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function UpdateUsuario($nome,$senha,$id){
        try {
            $sql = "UPDATE usuarios SET nome = :nome, senha = :senha WHERE id = :id";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":nome",$nome);
            $db->bindParam(":senha",$senha);
            $db->bindParam(":id",$id);

            if($db->execute()){
                return true;
            }else{
                return false;
            }
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function DeletarUsuario($id){
        try {
            $sql = "DELETE FROM usuarios WHERE id = :id";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":id",$id);
            if($db->execute()){
                return true;
            }else{
                return false;
            }
        } catch (\Exception $th) {
            $th->getMessage();
        }
    }
}