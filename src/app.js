// Import necessary packages
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors'); // Import the cors package

// Enable CORS for all routes
app.use(cors()); 

// Middleware to parse JSON bodies
app.use(express.json());

// Setup MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'digital_marketing',
  port: 3306
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Route to show data from the 'portfolio' table
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM portfolio', (err, results) => {
    if (err) {
      console.error('Error querying the database: ', err.stack);
      res.status(500).send('Database query error');
      return;
    }
    res.json(results); // Send data as JSON
  });
});

// Route to show data from the 'contact' table
app.get('/contact', (req, res) => {
  connection.query('SELECT * FROM contact', (err, results) => {
    if (err) {
      console.error('Error querying the contact table: ', err.stack);
      res.status(500).send('Database query error');
      return;
    }
    res.json(results); // Send data as JSON
  });
});

// POST route to save contact form data
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Insert the contact form data into the 'contact' table
  connection.query(
    'INSERT INTO contact (name, email, message, submitted_at) VALUES (?, ?, ?, NOW())',
    [name, email, message],
    (err, results) => {
      if (err) {
        console.error('Error inserting into database:', err.stack);
        res.status(500).send('Error saving data');
        return;
      }
      // Send success response
      res.json({ message: 'Message successfully saved!' });
    }
  );
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Export the app instance
module.exports = app;
