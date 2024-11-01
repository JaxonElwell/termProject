CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER
);

INSERT INTO users (name, age) 
VALUES 
        ('John', 31),
        ('Jane', 30),
        ('Alice', 29),
        ('Bob', 32);

UPDATE users
SET age = 32
WHERE name = 'Jane';

DELETE FROM users
WHERE name = 'Bob';

SELECT * FROM users
WHERE id = 8

DROP TABLE users