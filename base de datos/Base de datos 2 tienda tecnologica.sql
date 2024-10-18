create database tienda_tec;
use Tienda_tec;

create table Users(
name varchar(50),
email varchar(50),
password varchar(255),
age int,
phoneNumber varchar(50),
address varchar(100),
CC int,
Role varchar(6),
primary key (CC));

create table Products(
name_p varchar(50),
description_p varchar(500),
value_p int,
feature_p varchar(100),
id_p int,
amount_p int,
primary key (id_p));

create table purchases(
id_purchase int,
product int,
user int,
CC int,
value int,
primary key (id_purchase)
);

drop database tienda_tec;

SELECT * from Users;