import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import todoRoutes from './routes/todoRoutes.js';
import {errorHandler} from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.text());
app.use(express.json({type: ['application/json', 'text/plain']}));
app.use(cors());

// connects to the database
connectDB();

// set the routes
app.use('/api', todoRoutes);

// error handling 
app.use(errorHandler);

const server = app.listen(PORT, () => console.log(`server is up and running on port: ${PORT}`));

// required for /test to run 
export { app, server };