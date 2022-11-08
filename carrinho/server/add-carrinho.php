<?php
$dt = json_decode(file_get_contents('php://input'), true);
$id = $dt['id'];
$userId = $dt['userId'];

$servername = "localhost:3306";
$username = "root";
$dbPassword = "";
$dbName = "estoque";
$conexao = mysqli_connect($servername, $username,$dbPassword,$dbName);
$rows = array();



// Associative array



try {
    $initial = "SELECT carrinho.content from carrinho Where id_user = $userId";
    $result = $conexao -> query($initial);
    $row = $result -> fetch_assoc();
    $content = json_decode($row["content"]);
    if (!property_exists($content, $id)) {
        $content->$id = new stdClass;
        $content->$id->qtd = 1;
      } else {
        $qtd = $content->$id->qtd;
        $content->$id->qtd = $qtd + 1;
      }
    $content = json_encode($content);  
    $initial = "UPDATE carrinho SET content = '$content' WHERE id_user = $userId";
    $result = $conexao -> query($initial);
    echo json_encode($content);
    return;
}catch (\Throwable $th) {
    //throw $th;
}