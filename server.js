const express=require('express')
const app=express()
const port=3000
const cors=require('cors')
const mongoose=require('mongoose')
app.use(cors());
app.use(express.json());


async function main(){
    await mongoose.connect('mongodb://localhost:27017/form')
}
main().catch(err=> console.log(err));
const my=new mongoose.Schema({
    name: String,
    gender: String,
    age: String
});
const student=mongoose.model("student", my);
app.post("/api",async(req,res)=>{


try{
    const news=new student(req.body);
    await news.save();
    res.status(201).json({message:"data save"});
}catch(err){
    res.status(500).json({error:"error"});

}
});





app.listen(port,()=>{
    console.log(`listening the port ${port}`)

})