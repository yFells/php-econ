<?php

$dt = json_decode(file_get_contents('php://input'), true);
$userId = $dt['userId'];
// insert in the db this data and clear current cart
$type = $dt['type'];
// ^^ this is the type of payment can be 'pix' or 'credit' 

$servername = "localhost:3306";
$username = "root";
$dbPassword = "";
$dbName = "estoque";
$conexao = mysqli_connect($servername, $username,$dbPassword,$dbName);

try {
    $initial = "SELECT carrinho.content from carrinho Where id_user = $userId";
    $result = $conexao -> query($initial);
    $row = $result -> fetch_assoc();
    $content = json_decode($row["content"]);
    $content = json_encode($content);
    $query = "INSERT INTO compra (userID, tipo, conteudo) VALUES ($userId, '$type', '$content')";
    $result = $conexao -> query($query);
    if ($result == TRUE) {
        $query = "UPDATE carrinho SET content = '{}' WHERE id_user = $userId";
        $result = $conexao -> query($query);
    }
    echo json_encode($result);
    return;
} catch (\Throwable $th) {
    //throw $th;
}
