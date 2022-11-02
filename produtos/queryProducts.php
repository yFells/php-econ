<?php
$page = $_GET['page'];

// get data from db
$mock = [
  [
      'id' => 1,
      'nome' => 'Product 1',
      'valor' => 10.0,
      'descricao' => 'Product 1 description',
      'tipo' => 'Category 1',
      'url' => 'https://bobbyhadz.com/images/blog/javascript-syntaxerror-cannot-use-import-statement-outside-module/banner.webp',
      'marca' => 'Marca 1'
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

echo json_encode($mock);