const express = require("express")
const app = express()
const ConnectDB = require("./config/mongodb")
const user = require("./model/userModel")


app.use(express.json())

app.get("/add" , (req , res)=>{
 
    try {
        const adduser = user(req.body)
        adduser.save()
        res.json({message : "Successful data added"})

    } catch (error) {
        res.json({message : error.message})
    }

})





ConnectDB().then(()=>{
    console.log("Database is connected");
    app.listen(3000 , ()=>{
        console.log("Server is running on port 3000");
    })
}).catch((err)=>{
console.log(err);
})