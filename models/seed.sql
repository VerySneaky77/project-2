USE contacts_db;
CREATE table contacts (
    contactId INT(20) NOT NULL AUTO_INCREMENT,
    nameFirst VARCHAR(20) NOT NULL,
    nameLast VARCHAR(20) NOT NULL,
    nameMiddle VARCHAR(20),
    numPhone INT(10) NOT NULL,
    streetAddress VARCHAR(20),
    cityAddress VARCHAR(20),
    stateAddress VARCHAR(3),
    emailAddress VARCHAR(20),
    PRIMARY KEY (contactId)
);

CREATE table photos (
    photoId INT(30) NOT NULL AUTO_INCREMENT,
    source VARCHAR(30),
    PRIMARY KEY (photoID),
    FOREIGN KEY (contactId)
);