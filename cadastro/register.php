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

$initial = "SELECT id FROM user WHERE email = '$email'";
$result = $conexao -> query($initial);
$row = $result -> fetch_assoc();
$fora = $row['id'];
$query = "INSERT INTO carrinho (id_user) VALUES ('$fora')";
$result = $conexao -> query($query);

echo json_encode($register);
