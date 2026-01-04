import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { initializeDatabase } from './initializeDatabase.ts';
import featureFlagRoutes from './routes/featureFlagRoutes.ts';

dotenv.config();


export const app = express();
const port = process.env.APP_PORT || 9876;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use('/api', featureFlagRoutes);

async function startServer() {
    try {
        await initializeDatabase();
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to initialize the database or start the server.');
        console.error(error);
    }
}

startServer();


