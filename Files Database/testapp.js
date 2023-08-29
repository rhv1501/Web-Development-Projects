const express=require("express");
const app=express();
const path=require("path");
const fs=require('fs');
const { name } = require("pug");
app.use('/static',express.static('static'));
app.use(express.urlencoded())
app.set('view engine','pug')
//set pug dir
app.set('views',path.join(__dirname,"views"))
const obje={
    name:"Rudresh",
    phone:"9150302455",
    email:"rhv4748@gmail.com"
}
//pug dir
app.get("/demo",(req,res)=>{
    res.render('demo',{title:'hey world',message:'this is pug tut'})
})
app.get('/api',(req,res)=>{
    res.send(obje)
})
//Expresss setup
app.get('/',(req,res)=>{
    const con="there can be only one winner";
    const params={title:'pug and pubg',"content":con}
    res.status(200).render('index.pug',params)
})

// form setup express
app.post('/submitted',(req,res)=>{
    var form_data=req.body;
    var form_name=req.body.name;
    var form_age=req.body.age;
    var form_gender=req.body.gender;
    var form_address=req.body.address;
    var form_more=req.body.more;
    var params={obje}
    res.status(200).render('index.pug',params)
    //file setup
    var data=`${form_name}          ${form_age}     ${form_gender}          ${form_address}                    ${form_more}\n`
    fs.writeFileSync('DataBase.txt',data)
})
app.get('/fetchfrontend',(req,res)=>{
    res.status(200).render('frontend.pug')
})


app.listen(3000,()=>{
    console.log('server is running on port 3000 http://localhost:3000')
})
