import express, { Router } from "express";
import mongoose from 'mongoose';
import router from "./routes/userroutes.js";
import blogrouter from "./routes/Blogroutes.js";
import dotenv from 'dotenv';
dotenv.config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const app = express();

app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogrouter);
mongoose
    .connect(CONNECTION_STRING)
    .then(()=>app.listen(5000))
    .then(()=>console.log("Connected to database and listening to localhost"))
    .catch((err)=>console.log(err));


