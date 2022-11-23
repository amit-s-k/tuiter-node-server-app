import express  from 'express';
import cors from 'cors'
import mongoose from "mongoose";
import HelloController from './controllers/hello-controller.js'
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
const app = express();
app.use(cors());
app.use(express.json());
const MONGO_ATLAS = 'mongodb+srv://mymongodb:keepitsimple@cluster0.b0yoet4.mongodb.net/tuiter?retryWrites=true&w=majority';
let CONNECTION_STRING = process.env.DB_CONNECTION_STRING === undefined? MONGO_ATLAS : process.env.DB_CONNECTION_STRING;
const MONGO_LOCAL = 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
TuitsController(app);
HelloController(app)
UserController(app);
app.listen(process.env.PORT || 4000)