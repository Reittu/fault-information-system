CREATE TABLE Country (
  id	INT IDENTITY(1,1) PRIMARY KEY,
  name	VARCHAR(90) NOT NULL
);

CREATE TABLE Region (
  id		INT IDENTITY(1,1) PRIMARY KEY,
  country_id	INT NOT NULL FOREIGN KEY REFERENCES Country(id),
  name		VARCHAR(90) NOT NULL
);

CREATE TABLE City (
  id		INT IDENTITY(1,1) PRIMARY KEY,
  region_id	INT NOT NULL FOREIGN KEY REFERENCES Region(id),
  name		VARCHAR(200) NOT NULL
);

CREATE TABLE Location (
  id		INT IDENTITY(1,1) PRIMARY KEY,
  city_id	INT NOT NULL FOREIGN KEY REFERENCES City(id),
  latitude	DECIMAL(8,6) NOT NULL,
  longitude	DECIMAL(9,6) NOT NULL,
  postcode	VARCHAR(15),
  address	VARCHAR(255)
);

CREATE TABLE Reporter (
  id		INT IDENTITY(1,1) PRIMARY KEY,
  name		VARCHAR(128) NOT NULL,
  password 	VARCHAR(255) NOT NULL
);

CREATE TABLE Report (
  id          INT IDENTITY(1,1) PRIMARY KEY,
  reporter_id INT NOT NULL FOREIGN KEY REFERENCES Reporter(id),
  location_id INT NOT NULL FOREIGN KEY REFERENCES Location(id),
  subject     VARCHAR(100) NOT NULL,
  description VARCHAR(500) NOT NULL
);


--- INSERT INTO Report(id,user_id,location_id,subject,description) VALUES (?,?,?,?,?);

