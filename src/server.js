
import express from 'express';
import dotenv from 'dotenv';
import { connection, connectDB } from './config/connection.js';
import User from './models/User.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();

        // Models must be imported before sync()
        await connection.sync({ alter: true });

        console.log('Database models synchronized successfully');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup failed:', error.message);
        process.exit(1);
    }
};

startServer();
