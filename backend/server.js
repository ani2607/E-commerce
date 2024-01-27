import dotenv from "dotenv";
import express from 'express';
import databaseConnection from './database/db.js';
import loginRoute from './router/User/loginRoute.js';
import signupRoute from './router/User/signupRoute.js'
import cors from 'cors';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


// connecting the database
databaseConnection();

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
    
})); 
app.use(express.json());
app.use(cookieParser());

// routers
app.use('/login',loginRoute);
app.use('/signup',signupRoute)


app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});
