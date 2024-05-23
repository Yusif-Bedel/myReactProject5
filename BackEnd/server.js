const express =require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app=express()
app.use(express.json())
app.use(cors())
require("dotenv").config()

const productSchema=mongoose.Schema({
    title:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    }
})

const Products= mongoose.model("Product",productSchema)

app.get("/products", async(req,res)=>{
    const response=await Products.find()
    res.send(response)
})
app.get("/products/:id",async(req,res)=>{
    const {id}=req.params
    const response= await Products.findById(id)
    res.send(response)
})
app.delete("/products/:id",async(req,res)=>{
    const {id}=req.params
    const response= await Products.findByIdAndDelete(id)
    res.send(response)
})
app.post("/products",async(req,res)=>{
    const newProd= new Products({...req.body})
    await newProd.save()
    res.status(201).send("item created")
})
mongoose.connect(process.env.CONNECTION_STRING).then(res=>{
    console.log("db connected")
})
app.listen(process.env.PORT,(req,res)=>{
    console.log("port running on 4404")
})