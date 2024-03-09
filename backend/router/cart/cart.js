import { Router } from "express";
import UserModel from "../../database/models/user.model.js";
import  ProductModel from "../../database/models/product.model.js"
import jwt from 'jsonwebtoken'
const secret = process.env.SECRETKEY;



const router = Router();

router.get('/',async(req,res)=>{

    const {token} = req.cookies;
    const decoded = jwt.verify(token,secret);
    const userId = decoded.id;

    try {
         const result = await UserModel.findById(userId);
         const cartArray = result.cartItems;
        
         const allProducts = await ProductModel.find();
        //  console.log(allProducts);
         const userCartItem = [];

        cartArray.forEach(productId => {
            allProducts.forEach((item)=>{
                // console.log(item._id);
                if(productId == item._id){
                    userCartItem.push(item);
                }
            })
         });
         console.log("user cart item");
        //  console.log(userCartItem);
         res.status(200).json(userCartItem);

    } catch (error) {
        console.log(error);
        res.status(401).send("cannot get the items")
    }
})



export default router;