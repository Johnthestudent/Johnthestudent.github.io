drop database if exists exampleforapiwork;

create database exampleforapiwork;

use exampleforapiwork;

drop table if exists apidata;

create table apidata
(
    id	    VARCHAR(80),
    dataname	VARCHAR(80)
);

select * from apidata;