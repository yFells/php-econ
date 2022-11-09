Create database estoque; 
use estoque;
SET SQL_SAFE_UPDATES = 0;

#CREATE Table Produtos 

create table produtos 
(id int not null primary key auto_increment, 
nome varchar(30) not null, valor int not null, 
descricao varchar(50), 
tipo varchar(50), 
url varchar(300), 
marca varchar(30));

create table carrinho(
    id_user int not null,
    content text(92681) default "{}",
    PRIMARY KEY (id_user),
    FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL unique,
  `senha` varchar(128) DEFAULT NULL,
  `cpf` varchar(11) DEFAULT NULL unique,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

Create table compra (
tipo varchar(60) default null,
userID int(11) not null,
valor int not null,
data_compra varchar(100));
