USE wingman;

ALTER TABLE Users CHANGE COLUMN createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Users CHANGE COLUMN updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE Posts CHANGE COLUMN createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Posts CHANGE COLUMN updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE UserPortfolios CHANGE COLUMN createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE UserPortfolios CHANGE COLUMN updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

INSERT INTO Users (firstName, lastName, email, password)
	VALUES ("First", "Last", "firstlast@email.com", "password"),
	("test", "test", "test@test.com", "password");

SELECT * FROM Users;
SELECT * FROM Posts;
SELECT * FROM UserPortfolios;