import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './db/connectDB.js';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);


connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log('server started ⛭');
    });
});

