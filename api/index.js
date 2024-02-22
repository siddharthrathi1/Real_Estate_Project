// const express = require('express'); This works fine as well but if u have to use the import method, we need to make some changes in package.json, by adding type: module under main
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to MongoDB!');
})
.catch((err)=>{
    console.log(err);
});
const app=express(); //creating an instance of express

app.listen(3000,()=>{

    console.log('Server is running on port 3000!!');

});