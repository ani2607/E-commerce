import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();
const secret= process.env.SECRETKEY;

export default function isAuth(req,res,next){
    const {token} = cookie.token;
    console.log(token);
}
