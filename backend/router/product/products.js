import { Router } from "express";
import ProductModel from "../../database/models/product.model.js";

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


export default router;
