CREATE TABLE operations (
	ID UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
  	ID_container UNIQUEIDENTIFIER FOREIGN KEY REFERENCES containers(ID),
  	date_of_begin DATETIME,
  	date_of_end DATETIME,
  	fio_operator VARCHAR(255),
  	type_operation VARCHAR(255),
  	place_inspections VARCHAR(255)
);