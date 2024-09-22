const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is configured

// Read the MongoDB URL from the environment variables
const mongoURL = process.env.MONGODB_URL_LOCAL; // Ensure this matches the name in your .env file

// Check if the URL is loaded properly
if (!mongoURL) {
    console.error('MongoDB connection string is undefined. Check your .env file.');
    process.exit(1); // Exit the process if the connection string is missing
}

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;
