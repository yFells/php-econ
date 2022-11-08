<?php
$dt = json_decode(file_get_contents('php://input'), true);
$body = $dt["body"];
$email = $body["email"];
$password = $body["password"];
$json = [
  'email' => $email,
  'id' => 12,
  'loggedIn' => true
];

$servername = "localhost:3306";
$username = "root";
$dbPassword = "";
$dbName = "estoque";
$conexao = mysqli_connect($servername, $username,$dbPassword,$dbName);

try {
  $initial = "SELECT email, senha, id FROM user WHERE email = '$email'";
  $result = $conexao -> query($initial);
  $row = $result -> fetch_assoc();
  $json = [
    'email' => $email,
    'id' => $row['id'],
    'loggedIn' => true
  ];
  if (sizeof($row) == 0) {
    throw new Exception("Login ERRO", 1);
    }
  if ($row['senha'] != $password) {
    throw new Exception("Login Password erro", 1);
  }
  echo json_encode($json);
  return;

} catch (\Throwable $th) {
  $json = [
    'email' => null,
    'id' => null,
    'loggedIn' => false,
    'error' => "Error"
  ];
  echo json_encode($json);
}



