const express=require("express");


const app=express();
const port=process.env.port || 4000;

app.use(express.json());

//connect with connection file of database
require("./dbcon/connection");

//connect with mosel file of database
const Customer = require("./db_schema/models");



//simple respose method for cheack the connectivity
app.get("/",(req,resp)=>
{
   
    resp.send("hello from the other side");
})

//for create the method
app.post("/userapi",async(req,resp)=>
{
    try{
        const user=new Customer(req.body);
        const productCreate=await user.save();
        resp.status(201).send(productCreate);
    }
    catch(err)
    {
        resp.status(400).send(err);
    }
});


//for finding the product
app.get("/userapi",async(req,resp)=>
{
   try{
    const productData=await Customer.find();
    resp.send(productData);
   }
   catch(err)
   {
    resp.send(err);
   }
})

//find the acourding to their name
app.get("/userapi/:product",async(req,resp)=>
{
    try{
        const _product=req.params.product;
        const productData =await Customer.find({product:_product});
        resp.send(productData);
        
    }
    catch(err)
    {
        resp.send(err);
    }
});


//update the given document accourding name

app.patch("/userapi/:product",async(req,resp)=>
{
    try{
          const _product=req.params.product;
          const productData=await Customer.findOneAndUpdate(_product,req.body);
          resp.send(productData);
          
    }
    catch(err)
    {
        resp.status(404).send(err);
    }
})




//delete the document by the delete http request

app.delete("/userapi/:product",async(req,resp)=>
{
    try{
        const _product=req.params.product;
        const deleteProduct= await Customer.find({product:_product});
        if(!req.params.product)
        {
            return resp.status(400).send();
        }
        else
        {
            resp.send(deleteProduct);
        }
    }
    catch(err)
    {
         resp.status(500).send(err);
    }
})


app.listen(port,()=>
{
    console.log(`connection is setup at the port number ${port}`)
})