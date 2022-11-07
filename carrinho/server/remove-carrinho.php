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

if($result = mysqli_query($conexao,"INSERT INTO carrinho (id_user, content)
 VALUES ($userId,$id)"); === TRUE) {echo "New record created successfully";}
 else {echo "Error: ";        
 }

 
//  ^^ tu tem o Id do produto acima 
// chamar a tabela carrinho e adicionar o ID
// vale lembrar que: a tabela é feita de
// id (ID do user) - carrinho | var_char(MAX)
// user1 | {<idDoProduto1>: {qtd: numero de vezes que foi chamado}}
// tem que fazer um select do db + remover um no qtd

echo json_encode(['id' => $id]);