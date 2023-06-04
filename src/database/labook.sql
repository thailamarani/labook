-- Active: 1682714153940@@127.0.0.1@3306

CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        created_at TEXT DEFAULT (DATETIME('now', 'localtime')) NOT NULL
    );

CREATE TABLE
    posts (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        creator_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        content TEXT NOT NULL,
        likes INTEGER NOT NULL,
        dislikes INTEGER NOT NULL,
        created_at TEXT DEFAULT (DATETIME('now', 'localtime')) NOT NULL,
        updated_at TEXT DEFAULT (DATETIME('now', 'localtime')) NOT NULL
    );

CREATE TABLE
    likes_dislikes (
        user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        post_id TEXT NOT NULL REFERENCES posts (id) ON DELETE CASCADE,
        like INTEGER
    );

SELECT * FROM users;

SELECT * FROM posts;

SELECT * FROM likes_dislikes;