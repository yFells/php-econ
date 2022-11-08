<?php
$servername = "localhost:3306";
$username = "root";
$dbPassword = "";
$dbName = "estoque";
$conexao = mysqli_connect($servername, $username,$dbPassword,$dbName);


$dt = json_decode(file_get_contents('php://input'), true);
$id = $dt['userId'];


$result = mysqli_query($conexao,"SELECT * FROM carrinho WHERE userId = $id") ;

// select from carrinho where userId {3: {qtd: 3}, 5: {qtd:1}}
// select na tabela de produtos where idprodutoCarrinho e traga os produtos 
// pega o retorno da tabela e passa de volta pro front

$mock = [
  [
    'id' => 1,
    'nome' => 'Product 1',
    'valor' => 10.0,
    'descricao' => 'Product 1 description',
    'tipo' => 'Category 1',
    'url' => 'https://bobbyhadz.com/images/blog/javascript-syntaxerror-cannot-use-import-statement-outside-module/banner.webp',
    'marca' => 'Marca 1',
    'qtd' => 3
  ],
  [
    'id' => 2,
    'nome' => 'Product 2',
    'valor' => 20.0,
    'descricao' => 'Product 2 description',
    'tipo' => 'Category 2',
    'url' => 'https://bobbyhadz.com/images/blog/javascript-syntaxerror-cannot-use-import-statement-outside-module/banner.webp',
    'marca' => 'Marca 2'
  ],
  [
    'id' => 3,
    'nome' => 'Product 3',
    'valor' => 30.0,
    'descricao' => 'Product 3 description',
    'tipo' => 'Category 3',
    'url' => 'https://bobbyhadz.com/images/blog/javascript-syntaxerror-cannot-use-import-statement-outside-module/banner.webp',
    'marca' => 'Marca 3'
  ],
  [
    'id' => 4,
    'nome' => 'Product 4',
    'valor' => 40.0,
    'descricao' => 'Product 4 description',
    'tipo' => 'Category 4',
    'url' => 'https://bobbyhadz.com/images/blog/javascript-syntaxerror-cannot-use-import-statement-outside-module/banner.webp',
    'marca' => 'Marca 4'
  ]
];

$carrinho = [
  '1' => ['qtd' => 16],
  '2' => ['qtd' => 4],
  '4' => ['qtd' => 1],
];
// filter data / query what is needed
$filtered = array_filter($mock, function ($item) use ($carrinho) {
  return $carrinho[$item['id']];
});
$fn = function ($item) use ($carrinho) {
  $item['qtd'] = $carrinho[$item['id']]['qtd'];
  return $item;
};
$return = array_map($fn, $filtered);
echo json_encode($return);
