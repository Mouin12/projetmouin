const express=require('express')

const productRouter=express.Router()
const produit=require('../models/product')
//add new product
productRouter.post('/zid',async(req,res)=>{
    try {
const newproduct=new produit (req.body)
const result= await newproduct.save()
       res.send(({produitjdid:result,msg:"produit is saved "})) 
    } catch (error) {
        console.log(error)
        
    }

});
//get  all  produit
productRouter.get("/lkol", async (req, res) => {
    try {
      let result = await produit.find();
      res.send({ lists: result, msg: "voici list product" });
    } catch (error) {
      console.log(error);
    }
  })
  //get product by id
productRouter.get("/:id", async (req, res) => {
    try {
      let result = await produit.findById({ _id: req.params.id });
      res.send({ hahi: result, msg: "voici produit" });
    } catch (error) {
      console.log(error);
    }
  });
  //delete product
  
  productRouter.delete("/:id", async (req, res) => {
    try {
      let result = await produit.findByIdAndDelete({ _id: req.params.id });
      res.send({ msg: "product is deleted" });
    } catch (error) {
      console.log(error);
    }
  });
  //update product 
productRouter.put("/:id", async (req, res) => {
    try {
      let result = await produit.findByIdAndUpdate(
        { _id: req.params.id },
        {$set:{...req.body}}
      );
      res.send({msg: "product is updated" });
    } catch (error) {
      console.log(error);
    }
  });




module.exports=productRouter