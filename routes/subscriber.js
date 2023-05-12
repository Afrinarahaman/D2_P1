const express = require("express");
const axios =require("axios");
const router=express.Router();
const {getAll, update, remove, insert, getById} = require("../dataservice/subscriber-service")

router.get ("/add", (req,res)=>{
    res.render("add-subscriber");
})
router.post("/add",async (req,res)=>{
    /*const body =req.body;
    const result= await axios.post("http://localhost:3000/subscriber", body)*/
    const data= await insert(req,res);
    if(data.err)
    {
        console.log(data.err);
        res.render("Eroor:" ,{err: data.err});
        return;
    }
    else
    {
        res.redirect("/subscriber");
    }
})
router.get("/delete/:id", async(req, res) => {

    /*const id=req.params.id;
    
    const result = await axios.delete("http://localhost:3000/subscriber/" +id)
    console.log(result.data);*/
    const data= await remove(req,res);
    
    res.redirect("/subscriber");
})
router.get("/edit/:id", async(req, res) => {

    /*const id=req.params.id;
    //const body =req.body;
    const result = await axios.get("http://localhost:3000/subscriber/" +id)*/
    const data= await getById(req,res);
    console.log(data);
    res.render("edit-subscriber", {data: data});
})
router.post("/edit/:id",async (req,res)=>{
    //const id=req.body.id;
    
    //const result= await axios.put("http://localhost:3000/subscriber/" +id, req.body)
    const data= await update(req,res);
    
    res.redirect("/subscriber");
})


router.get("/", async(req, res) => {

   // const response = await axios.get("http://localhost:3000/subscriber")
   //const data=response.data;
   const data= await getAll(req,res);
   console.log(data);
   res.render("subscriber", {data}) ;
})

module.exports = router;