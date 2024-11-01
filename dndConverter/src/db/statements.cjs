const db = require('better-sqlite3')('database.db')

const createTable = () => {
    const sql = `
        CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER
        )
    `
    db.prepare(sql).run()
}
// createTable()

const insertTable = (name, age) => {
    const sql = `
        INSERT INTO users (name, age) VALUES (?, ?)
    `
    db.prepare(sql).run(name, age)
}
// insertTable('John', 30)
// insertTable('Jane', 25)
// insertTable('Bob', 35)
// insertTable('Alice', 40)

const getUsers = () => {
    const sql = `
        SELECT * FROM users
        WHERE age >= 30
    `
    const rows = db.prepare(sql).all()
    console.log(rows);
}
//getUsers()

const getUser = () => {
    const sql = `
        SELECT * FROM users
        WHERE name = ?
    `
     const rows = db.prepare(sql).all('Jane')
    console.log(rows);
}
getUser()