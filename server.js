const express= require("express");

const logger =require("./middleware/logger");
const PORT =process.env.PORT || 5000;
const NODE_ENV= process.env.NODE_ENV || "production";


const app =express();

app.set("view engine", "pug");

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));



app.use(logger);

app.get("/", (req, res)=>{
    //res.send("Hej verden");
    res.render("home");

})

app.get ("/about", (req,res)=>{
    res.render("about");
})

app.use("/subscriber", require("./routes/subscriber"));

app.listen(PORT, () => {
    let msg= "------------------------------------\n"
     
    msg += new Date().toLocaleTimeString("da-DK"); 
    msg += `\nSever started in ${NODE_ENV} mode. Go to http://localhost~:${PORT}`;
    msg += "\n------------------------------------\n"
    console.log(msg);
})

























/*app.get ("/subscriber/add", (req,res)=>{
    res.render("add-subscriber");
})
app.post("/subscriber/add",async (req,res)=>{
    const body =req.body;
    const result= await axios.post("http://localhost:3000/subscriber", body)
    console.log(result.data);
    res.redirect("/subscriber");
})
app.get("/subscriber/delete/:id", async(req, res) => {

    const id=req.params.id;
    
    const result = await axios.delete("http://localhost:3000/subscriber/" +id)
    console.log(result.data);
    res.redirect("/subscriber");
})
app.get("/subscriber/edit/:id", async(req, res) => {

    const id=req.params.id;
    //const body =req.body;
    const result = await axios.get("http://localhost:3000/subscriber/" +id)
    console.log(result.data);
    res.render("edit-subscriber", {data: result.data});
})
app.post("/subscriber/edit/:id",async (req,res)=>{
    const id=req.body.id;
    
    const result= await axios.put("http://localhost:3000/subscriber/" +id, req.body)
    console.log(result.data);
    res.redirect("/subscriber");
})
app.get("/subscriber", async(req, res) => {

    const response = await axios.get("http://localhost:3000/subscriber")
   const data=response.data;
   console.log(data);
   res.render("subscriber", {data}) ;
})*/