-- Active: 1682714153940@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users(id, name, email, created_at)
VALUES
("u001", "Thaila", "thaila@email.com", DATETIME()),
("u002", "Fred", "fred@email.com", DATETIME());