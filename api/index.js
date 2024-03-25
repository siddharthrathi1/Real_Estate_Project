// const express = require('express'); This works fine as well but if u have to use the import method, we need to make some changes in package.json, by adding type: module under main
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to MongoDB!');
})
.catch((err)=>{
    console.log(err);
});

const app=express(); //creating an instance of express
app.use(express.json());


app.use(cookieParser());

app.listen(3000,()=>{

    console.log('Server is running on port 3000!!');

});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  }); 