<?php
$dt = json_decode(file_get_contents('php://input'), true);
$id = $dt['userId'];
// select from carrinho where userId {3: {qtd: 3}, 5: {qtd:1}}
// select na tabela de produtos where idprodutoCarrinho e traga os produtos 
// pega o retorno da tabela e passa de volta pro front

echo json_encode([
  '1' => ['qtd' => 16],
  '2' => ['qtd' => 4],
]);
