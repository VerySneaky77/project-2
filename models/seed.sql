USE contacts_db;
CREATE table contacts (
    id INT(60) NOT AUTO_INCREMENT,
    nameFirst VARCHAR(20) NOT NULL,
    nameLast VARCHAR(20) NOT NULL,
    nameMiddle VARCHAR(20),
    numPhone VARCHAR
)