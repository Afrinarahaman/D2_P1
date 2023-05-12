
const axios = require("axios");

const DBURL="http://localhost:3000/subscriber"

const getAll = async (req, res)=>{

    try{
        const result =await axios.get(DBURL)
        return result.data;
    }
    catch(error)
    {
        console.log(error.message);
    }
}
const update = async (req,res)=>{
    try {
        const result=await axios.put(`${DBURL}/${req.params.id} `, req.body);
        console.log("updated");
        return result.data;
        
    } catch (error) {
        console.log(error.message);
    }
}

const remove = async (req,res)=>{
    try {
        const result=await axios.delete(`${DBURL}/${req.params.id} `);
        console.log("Deleted");
        return result.data;
        
    } catch (error) {
        console.log(`axios: ${error.message} `);
    }
}

const insert = async (req,res)=>{

    try {
        const result=await axios.post(`${DBURL} `, req.body);
        console.log("Inserted");
        return result.data;
    } catch (error) {
        console.log(error.message);
    }
}
const getById = async (req,res) =>{
    try {
        const result=await axios.get(`${DBURL}/${req.params.id}`)
        return result.data;
    } catch (error) {
    
}
}

module.exports = {getAll, update, remove,insert,getById}