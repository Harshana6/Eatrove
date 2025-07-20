import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dbConnection} from './database/dbconnection.js';
import {errorMiddlware} from './error/error.js';
import reservationRouter from './routes/reservation.js';

const app = express()

app.use(express.json());
dotenv.config({ path: './config/config.env' });
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true,
})
);

app.use(express.urlencoded({extended:true}));
dbConnection();
app.use(errorMiddlware);
app.use('/api/v1/reservation',reservationRouter);
app.use(errorMiddlware);
export default app;
