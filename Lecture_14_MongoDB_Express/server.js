import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb+srv://deysubrataadd_db_user:6IoFHBhsgchZkX9Z@cluster0.n7in0ew.mongodb.net/",{
    dbName:"NodeJS Mastert Course"
}).then(()=>console.log("MongoDb Connected...!")).catch((err)=>console.log(err))

const port = 1000;
app.listen(port,()=>console.log(`Server is Running on port ${port}`))