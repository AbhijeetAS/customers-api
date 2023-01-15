const mongoose=require("mongoose");

const validator=require("validator");


//here we create the structure for the document

const userSchema=new mongoose.Schema({
    product:{
        type:String,
        required:true,
        minlength:3
    },

    price:{
        type:Number,
        required:true,
    
     },
    

    
})

//we will create the model

const Customer=new mongoose.model('Customer',userSchema);
module.exports=Customer;