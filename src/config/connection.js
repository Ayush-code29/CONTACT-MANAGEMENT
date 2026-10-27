
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Sequelize(
    process.env.DB_Database,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
    }
);

const connectDB = async () => {
    try {
        await connection.authenticate();
        console.log('DB CONNECTED SUCCESSFULLY');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        throw error;
    }
};

export { connection, connectDB };
