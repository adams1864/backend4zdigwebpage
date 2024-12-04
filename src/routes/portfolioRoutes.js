const express = require('express'); // Importing express
const mysql = require('mysql2/promise'); // Importing mysql2 for promise-based queries
const router = express.Router(); // Creating a new Express router

// MySQL database connection configuration
const dbConfig = {
    host: 'localhost', // Database host (localhost for local development)
    user: 'root', // Your MySQL username
    password: '', // Your MySQL password (empty if you have none set)
    database: 'digital_marketing' // The name of your database
};

// Define a GET route for /portfolio
router.get('/portfolio', async (req, res) => {
    try {
        // Create a connection to the database using the provided configuration
        const connection = await mysql.createConnection(dbConfig);

        // Execute the query to get all rows from the 'portfolio' table
        const [rows] = await connection.execute('SELECT * FROM portfolio');

        // Send the retrieved rows as a JSON response
        res.json(rows);

        // Close the database connection
        await connection.end();
    } catch (err) {
        // If an error occurs, log it and send a 500 error response
        console.error(err);
        res.status(500).send('Error retrieving data');
    }
});
// Define a GET route for /contact
router.get('/contact', async (req, res) => {
    try {
        // Create a connection to the database using the provided configuration
        const connection = await mysql.createConnection(dbConfig);

        // Execute the query to get all rows from the 'contact' table
        const [rows] = await connection.execute('SELECT * FROM contact');

        // Send the retrieved rows as a JSON response
        res.json(rows);

        // Close the database connection
        await connection.end();
    } catch (err) {
        // If an error occurs, log it and send a 500 error response
        console.error(err);
        res.status(500).send('Error retrieving data from contact table');
    }
});
// Export the router so it can be used in app.js or other files
module.exports = router;
