require('dotenv').config();
const express=require('express');
const mysql=require('mysql2');
const app = express();
app.use(express.json());
const port= process.env.PORT;
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});
async function inDbC(){
    try{
        const db=await mysql.createConnection({
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database:process.env.DB_NAME,
        });
        console.log('connected to mysql');
        return db;
    }
    catch(err){
        console.log("ERROR",err);
    }
}
inDbC();

