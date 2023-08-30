// require("dotenv").config({path: "./.env"})
import express from "express";
import dotenv from "dotenv";
import { databaseconnection } from "./database/database.js";
import Router from "./Routes/Route.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", Router);

const MONGO_URL = process.env.MONGO_URL;

databaseconnection(MONGO_URL);
const PORT = 8000;
app.listen(PORT , () => console.log("Server is running successfully"));