// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Reemplaza con tu usuario de MySQL
    password: '', // Reemplaza con tu contraseña de MySQL
    database: 'proyecto' // Reemplaza con tu nombre de base de datos
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
