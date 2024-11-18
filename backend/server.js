const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar el paquete CORS
const mysql = require('mysql'); // Asegúrate de que el paquete mysql esté instalado
const authRoutes = require('./routes/auth'); // Rutas de autenticación
const userRoutes = require('./routes/users'); // Rutas de usuarios
const productRoutes = require('./routes/products'); // Asegúrate de crear un archivo de rutas para productos

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Habilitar CORS para todas las rutas
app.use(bodyParser.json()); // Middleware para analizar JSON

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambia esto por tu usuario de MySQL
    password: '', // Cambia esto por tu contraseña de MySQL
    database: 'proyecto' // Cambia esto por el nombre de tu base de datos
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Rutas
app.use('/api/auth', authRoutes); // Rutas de autenticación
app.use('/api/users', userRoutes); // Rutas de usuarios
app.use('/api/products', productRoutes); // Rutas de productos

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
