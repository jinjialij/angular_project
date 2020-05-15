use jiali;
create table account(
	id int(4) NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
    email varchar(255) NOT NULL ,
    primary key (id)
)