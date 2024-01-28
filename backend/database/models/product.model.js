import  { Schema, model }  from "mongoose";

const ProductSchema = new Schema({
   title : {
     type : String,
     required : true
   },
   description : {
    type : String,
    required : true
   },
   imageURL : {
    type : String,
    required : true
   },
   productPrice : {
    type : Number,
    required : true
   },
   category : {
    type : String,
    required : true
   }
},{timestamps:true})

const  ProductModel = model('ProductModel',ProductSchema);

export default ProductModel;