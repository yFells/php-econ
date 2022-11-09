<?php
$dt = json_decode(file_get_contents('php://input'), true);
$Userid = $dt['userId'];
// select from carrinho where userId {3: {qtd: 3}, 5: {qtd:1}}
// select na tabela de produtos where idprodutoCarrinho e traga os produtos 
// pega o retorno da tabela e passa de volta pro front

$servername = "localhost:3306";
$username = "root";
$dbPassword = "";
$dbName = "estoque";
$conexao = mysqli_connect($servername, $username,$dbPassword,$dbName);
$rows = array();

try {
    
    $initial = "SELECT carrinho.content from carrinho Where id_user = $Userid";
    $result = $conexao -> query($initial);
    $row = $result -> fetch_assoc();
    $content = json_decode($row["content"]);
    $array = get_object_vars($content);
    $properties = array_keys($array);
  
    if ($row['content'] == "{}") {
      echo json_encode([]);
      return;
    }

    $query = "SELECT * FROM produtos";
    $result = $conexao -> query($query);
    $row = $result -> fetch_all(MYSQLI_ASSOC);
    $lista = array();
    for ($i=0; $i < sizeof($row) ; $i++) {
      foreach($content as $key2 => $value){
        if ($row[$i]['id'] == $key2) {
          $row[$i]['qtd'] = $value->qtd;
          array_push($lista,$row[$i]);
        }
      } 
    }
   
    $all = json_encode($lista);
    echo $all;

} catch (\Throwable $th) {
  //throw $th;
}
