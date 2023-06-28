create table if not exists produto (
codigo INT UNSIGNED NOT NULL auto_increment,
nome  varchar(30) not null default'',
quantidade int unsigned not null default 0,
preco decimal(7,2) not null,
primary key (codigo)
);

CREATE TABLE if not exists Cliente (
	codigo int unsigned auto_increment primary key,
    nome varchar(50) not null, 
    endereço varchar(30),
    cidade varchar(30),
    estado char(2),
    telefone char(15),
    Email varchar(30)
);

create table conta_bancaria (
	codigo int primary key,
    saldo decimal(7,2) not null,
    codigo_cliente int unsigned,
    constraint fk_conta_Cliente foreign key	(codigo_cliente) REFERENCES cliente(codigo)
);

create table if not exists cd (
	codigo int unsigned auto_increment primary key,
    titulo varchar(40) not null default '',
    interprete varchar(30) not null,
    preco decimal(7,2) not null
);

show tables;
select * from cd;

show databases;
use primeiro_banco;

drop table produto;