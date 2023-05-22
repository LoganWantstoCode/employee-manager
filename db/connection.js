const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'Assaultx21!',
        database: 'manager_db'
    },
    console.log('Connected!')
);

connection.connect(function (error) {
    if (error) throw error;
})

module.exports = connection;