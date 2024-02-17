const express=require("express");
const { addProduct, getAllProducts,getMonthProduct, getProductCategory } = require("../controllers/ProductController");
const router=express.Router();
router.post("/addAllProduct",addProduct);
router.get("/getAllProduct",getAllProducts);
router.get("/getProduct/:month",getMonthProduct);
router.get("/getProductCategory/:month",getProductCategory);
module.exports=router;