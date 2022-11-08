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
userID int(11) not null,
tipo varchar(60) default null,
conteudo varchar(80) default null);


# INSERTS PRODUTOS

INSERT INTO `produtos`(nome,valor,descricao,tipo,url,marcar) VALUES 
("coleira", 15.0, "Coleira pra cachorro tamanho 1.5M","vestimenta","https://www.shutterstock.com/shutterstock/photos/1778629628/display_1500/stock-photo-blank-dog-adjustable-collar-belt-mock-up-for-branding-and-design-d-render-illustration-1778629628.jpg","dogshow"),
("arranha gato", 50.0, "Poste para gato arranhar 35 cm","movel","https://www.shutterstock.com/shutterstock/photos/1963701784/display_1500/stock-vector-vector-illustration-of-a-scratching-post-for-cats-and-a-toy-in-the-form-of-a-mouse-isolated-on-a-1963701784.jpg", "Catslife"),
("caminha cachorro", 35.0, "caminha para cachorro pequeno", "movel", "https://www.shutterstock.com/shutterstock/photos/1964188303/display_1500/stock-vector-stylish-pet-bed-plank-bed-for-cats-and-dogs-soft-bed-for-pets-with-a-toy-isolated-on-a-white-1964188303.jpg","dogshow"),
("mochila transporte P", 85.0, "mochila para transporte de animais pequenos", "utensilios", "https://www.shutterstock.com/shutterstock/photos/1963701775/display_1500/stock-vector-stylish-bag-for-carrying-pets-purple-carrying-bag-with-yellow-handles-and-a-window-on-a-white-1963701775.jpg","dogshow"),
("escova macia", 10.0, "escova macia para tirar pelos caidos", "utensilios", "https://www.shutterstock.com/shutterstock/photos/1964185981/display_1500/stock-vector-hairbrush-isolated-on-white-background-comb-with-a-purple-handle-comb-for-pets-vector-1964185981.jpg", "dogshow"),
("pente M", 15.0, "pente para cão tamanho M", "utensilios", "https://www.shutterstock.com/shutterstock/photos/1963701781/display_1500/stock-vector-hairbrush-isolated-on-white-background-purple-toothed-comb-comb-for-pets-vector-illustration-of-1963701781.jpg", "dogshow"),
("castelo de gato", 300.0, "Castelo para gato subir e arranhar","movel", "https://www.shutterstock.com/shutterstock/photos/1963701757/display_1500/stock-vector-vector-illustration-of-a-tiered-cat-house-with-scratching-posts-and-a-toy-isolated-on-a-white-1963701757.jpg", "Catslife"),
("kit banho cachorro", 70.0, "Kit com shampoo, escovas para banho nos pets","utensilios", "https://www.shutterstock.com/image-vector/isolated-pet-grooming-accessories-brushes-600w-1963701766.jpg", "dogshow");


#INSERT INTO carrinho(id_user)
#SELECT id FROM user 
#WHERE id is not null;

