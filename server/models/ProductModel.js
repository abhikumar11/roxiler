const mongoose= require("mongoose");

const productSchema=new mongoose.Schema({
    productid:{
        type:Number,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    category:{
        type:String,
    },
    image:{
        type:String,
    },
    sold:{
        type:Boolean,
    },
    dateofsale:{
        type:Date,
    }

});
const Product=mongoose.model("Product",productSchema);
module.exports=Product;