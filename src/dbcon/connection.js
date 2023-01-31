const mongoose=require("mongoose");

mongoose.connect("mongodb://mongo_db:27017/my_db")
.then(()=>
{
    console.log("database is successfully connected");
})
.catch((err)=>
{
    console.log(err);
});