// ES Modules (ensure "type": "module" in package.json)
import dotenv from 'dotenv';
import express from 'express';
import dbConnection from './db/connection.js';

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database and start the server
dbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to the database', error);
        process.exit(1); // Exit the process if the database connection fails
    });
