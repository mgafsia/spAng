
CREATE TABLE HIKE (
    id int auto_increment PRIMARY KEY NOT NULL ,

    name VARCHAR(100),
    description VARCHAR(200),
    length  INT
);


insert into HIKE (name, description, length) values ('FlyWayHike01', 'First hike inserted by flyway script', 5);
insert into HIKE (name, description, length) values ('FlyWayHike02', 'Second hike inserted by flyway script', 9);
insert into HIKE (name, description, length) values ('FlyWayHike03', 'Third hike inserted by flyway script', 2);
insert into HIKE (name, description, length) values ('FlyWayHike04', 'Fourth hike inserted by flyway script', 5);



