import dotenv from "dotenv";
import express from 'express';
import bodyParser from "body-parser";
import databaseConnection from './database/db.js';
import loginRoute from './router/User/loginRoute.js';
import signupRoute from './router/User/signupRoute.js'
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


// connecting the database
databaseConnection();

app.use(cors({
    origin : '*'
})); 
app.use(bodyParser.json());

// routers
app.use('/login',loginRoute);
app.use('/signup',signupRoute)


app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});
