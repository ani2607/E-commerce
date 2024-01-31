import { Router } from "express";
import UserModel from "../../database/models/user.model.js";
import ProductModel from "../../database/models/product.model.js";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
import isAuth  from '../../middleware/authentication.js'
dotenv.config();
const secret= process.env.SECRETKEY;


// only for deployment purposes
// const createProduct = async()=>{

//     const res = await ProductModel.create({
//         title : "IPhone",
//         productPrice : 50000798465132,
//         description : "ad fadfewqwre qeorer eqoreor eroqorqe reorewroqeruoq eoruqei reor eworueqoreur qeworuofdjkljfla dalfjlsda fvcnvzcnvf aofjojoewq efjaldfladfas",
//         imageURL : "https://imgs.search.brave.com/3Ki9K-cYb8HYl9oAWW0r0-yaPvsxMrdSUzt5E2MKmeo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzQ2Nzg3MjAzNzUt/ODk3Yzg3MTE4NDg2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRSOGZH/RndjR3hsSlRJd2FY/Qm9iMjVsZkdWdWZE/QjhmREI4Zkh3dw",
//         category : 'womens'
//     })
//     // console.log(res);
// }
// createProduct();


const router = Router();



router.get('/mens',async(req,res)=>{

    try {
        const result = await ProductModel.find({'category' : 'mens'});
        res.status(200).json(result);
    } catch (error) {
        res.send(error.message);
        return;
    } 
})
router.get('/womens',async(req,res)=>{

  

    try {
        const result = await ProductModel.find({'category' : 'womens'});
        res.status(200).json(result);
    } catch (error) {
        res.send(error.message);
        return;
    } 
})

router.get('/:id',isAuth,async(req,res)=>{
    const {id}  = req.params;
    
    try {
        const result = await ProductModel.find({'_id' : id});
        res.status(200).json(result);
        // console.log(result)

    } catch (error) {
        res.status(400).json({"message" : "no product found"})
        console.log(error.message);
    }  
})

router.post('/:id',isAuth,async(req,res)=>{
    const {id}  = req.params;
    const {token} = req.cookies 
    // user id is extracted from the token as our jwt token contain username,userid,email as their payload

    const decode = jwt.verify(token,secret);
    const userId = decode.id;

    // console.log(id);
    try {

        const cartArray = await UserModel.findById(userId); // getting the old cart items
        const updatedCartArray = [...cartArray.cartItems,id];

        const result = await UserModel.findOneAndUpdate({'_id' : userId},{'cartItems' : updatedCartArray},{new : true}); // updating the userSchema with the new cartItems 
        // console.log(result);
        res.status(200).json({"message" : "successfully added to cart"});
        
        

    } catch (error) {
        res.status(400).json({"message" : "no product found"})
        console.log(error.message);
    }  
})


export default router;
