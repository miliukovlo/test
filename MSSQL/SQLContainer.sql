CREATE TABLE containers (
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    number INT,
    type VARCHAR(255),
    length INT,
    width INT,
    height INT,
    weight INT,
    is_empty BIT,
    date_of_come DATETIME
);
