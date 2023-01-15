const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/user_api")
.then(()=>
{
    console.log("database is successfully connected");
})
.catch((err)=>
{
    console.log("no conection");
});