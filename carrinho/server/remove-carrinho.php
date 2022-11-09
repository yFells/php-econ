<?php
$servername = "localhost:3306";
$username = "root";
$dbPassword = "";
$dbName = "estoque";
$conexao = mysqli_connect($servername, $username,$dbPassword,$dbName);

$dt = json_decode(file_get_contents('php://input'), true);
$id = $dt['id'];
$userId = $dt['userId'];

//-------------- not ready yet ------------------------
try {
    $initial = "SELECT carrinho.content from carrinho Where id_user = $userId";
    $result = $conexao -> query($initial);
    $row = $result -> fetch_assoc();
    $content = json_decode($row["content"]);
    if (!property_exists($content, $id)) {
       echo json_encode(["error"=>true]);
       return; 
    }
    $content->$id->qtd = $content->$id->qtd - 1;
    $content_value = $content->$id->qtd;
    
    if ($content_value == 0) {
        unset($content->$id);
    }
    $content = json_encode($content);  
    $initial = "UPDATE carrinho SET content = '$content' WHERE id_user = $userId";
    $result = $conexao -> query($initial);
    echo json_encode($content);
    return;
} catch (\Throwable $th) {
    //throw $th;
}

//  ^^ tu tem o Id do produto acima 
// chamar a tabela carrinho e adicionar o ID
// vale lembrar que: a tabela é feita de
// id (ID do user) - carrinho | var_char(MAX)
// user1 | {<idDoProduto1>: {qtd: numero de vezes que foi chamado}}
// tem que fazer um select do db + remover um no qtd

