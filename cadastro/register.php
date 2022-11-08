<?php
$servername = "localhost:3306";
$username = "root";
$dbPassword = "";
$dbName = "estoque";
$conexao = mysqli_connect($servername, $username,$dbPassword,$dbName);
$dt = json_decode(file_get_contents('php://input'), true);
$body = $dt["body"];
$nome = $body["name"];
$email = $body["email"];
$senha = $body["password"];
$cpf = $body["cpf"];

$query = "INSERT INTO user (nome, email, senha, cpf) VALUES ('$nome', '$email', '$senha', '$cpf')";
$register = mysqli_query($conexao, $query);  

echo json_encode($register);
