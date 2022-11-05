<?php
$dt = json_decode(file_get_contents('php://input'), true);
$id = $dt['id'];
$userId = $dt['userId'];
//  ^^ tu tem o Id do produto acima 
// chamar a tabela carrinho e adicionar o ID
// vale lembrar que: a tabela é feita de
// id (ID do user) - carrinho | var_char(MAX)
// user1 | {<idDoProduto1>: {qtd: numero de vezes que foi chamado}}
// tem que fazer um select do db + adicionar mais um no qtd

echo json_encode(['id' => $id]);