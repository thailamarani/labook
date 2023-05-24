-- Active: 1682714153940@@127.0.0.1@3306
CREATE TABLE posts(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO posts(id, name, email, created_at)
VALUES
("p001", "Thaila", "thaila@email.com", DATETIME()),
("p002", "Leonardo", "leonardo@email.com", DATETIME());