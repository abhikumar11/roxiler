const Product = require("../models/ProductModel");

module.exports.addProduct=async(req,res)=>{
    const {productid,title,description,price,category,image,sold,dateofsale}=req.body;
    try {
        const temp=await Product.findOne({productid})
        if(temp){
           res.status(200).json("product already exists");
        }
        else{
         const newProduct= new Product({productid,title,description,price,category,image,sold,dateofsale})
          await newProduct.save();
          res.status(200).json(newProduct);
        }
      } catch (err) {
         res.status(404).json({message:"something went wrong",err:err});
      }find
}
module.exports.getAllProducts=async(req,res)=>{
   try {
      const product=await Product.find().sort({productid:1});
      if(product){
         res.status(200).json(product);
      }
      else{
         res.status(200).json({message:"no product available"});
      }
   } catch (err) {
      res.status(404).json({message:"something went wrong",err:err});
   }

} 

module.exports.getProductCategory=async(req,res)=>{
   const monthToSearch=req.params.month;

   console.log(req.params);
   try {
      const product = await Product.aggregate([
           {
                $addFields: {
                     month: { $month: "$dateofsale" },
                },
           },
           {
                $match: {
                     month: parseInt(monthToSearch),
                },
           },
           {
                $group: { _id: "$category", count: { $sum: 1 } },
           },
      ]);
       
      if(product){
         res.status(200).json(product);
      }
      else{
         res.status(200).json({message:"no product available"});
      }
   } catch (err) {
      res.status(404).json({message:"something went wrong",err:err});
   }   
}
module.exports.getMonthProduct=async(req,res)=>{
   const monthToSearch=req.params.month;

   console.log(req.params);
   try {
      const product=await Product.find().sort({productid:1});
      const category=await Product.aggregate([
         {
              $addFields: {
                   month: { $month: "$dateofsale" },
              },
         },
         {
              $match: {
                   month: parseInt(monthToSearch),
              },
         },
         {
              $group: { _id: "$category", count: { $sum: 1 } },
         },
    ]);
     
      if(product){
          
         const pro=product.filter((data)=>{
           return data.dateofsale.getMonth()==parseInt(monthToSearch-1)
      })
         console.log(pro);
         res.status(200).json({product:pro,category:category});
      }
      else{
         res.status(200).json({message:"no product available"});
      }
   } catch (err) {
      res.status(404).json({message:"something went wrong",err:err});
   }
   
   
}