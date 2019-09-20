CREATE TABLE houses(
    id SERIAL PRIMARY KEY,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer
);

INSERT INTO houses(name, address, city, state, zip)
VALUES ('Dream Home', '3040 Court Lane', 'Midvale', 'UT', 84047);

INSERT INTO houses(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Old House', '763 Creeky Court', 'Holladay', 'UT', 84124, 'https://i.redd.it/pr50q5xng1r21.png', '112412', '3425');

ALTER TABLE houses
    ADD COLUMN img text;

ALTER TABLE houses
    ADD COLUMN mortgage decimal,
    ADD COLUMN rent decimal;