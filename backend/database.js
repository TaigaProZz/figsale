require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

module.exports = connection;