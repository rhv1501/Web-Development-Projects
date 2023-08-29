const express=require('express');
const app=express();
const path = require=('path');
// const fs=require=('fs');
const port=80;
// express related code
app.use(express.static('static'));
app.use(express.urlencoded());
// pug realted code
app.set('view engine','pug');
// app.set('views',path.Join(__dirname,'views'))

const data={
    name:"Rudresh",
    age:19,
    
}
// routes realted code
app.get('/',(req,res)=>{
    res.status(200).render('app.pug')
})




app.listen(port,()=>{
    console.log("Server is up and Running")
})
