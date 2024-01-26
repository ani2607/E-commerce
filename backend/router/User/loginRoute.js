
import { Router } from 'express';

const router = Router();



router.get('/',(req,res)=>{
    
    res.send("ok");
})

router.post('/',(req,res)=>{
    const {username,email,password} = req.body;
    res.send(`${username} ${email} ${password}`)
})

export default router ;


