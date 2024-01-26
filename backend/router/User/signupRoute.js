import { Router } from 'express'
import bcrypt from 'bcrypt'


const router = Router();

router.get('/',(req,res)=>{
    res.send("signup page");
})

router.post('/',(req,res)=>{
    
    const data = req.body;
    console.log(data);
    res.send("hi");
})

export default router;