const express=require('express')
const sql=require('mysql')
const app = express()
app.use(express.urlencoded())
app.set('view Engine','pug')

var con =sql.createConnection({
  host: "localhost:3306",
  user: "rhv",
  password: "rhv1501",
  database:"blood_bank"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.post("/submit",(req,res)=>{
    const data=req.body;
    console.log(data)
    const name=req.body.Name;
    const age=req.body.age;
    var querys = `INSERT INTO demo (student_name,student_age) VALUES ("${name}",${age})`;
    con.query(querys, function (err, result) {
    if (err) throw err;
    console.log(result);
  })
})
app.get("/show",(req,res)=>{
    var show_query=`SELECT Student_name From demo`
    con.query(show_query,function(err,result,fields){
      if(err) throw err;
      var a=[]
      for (let index = 0; index < result.length; index++) {
       a[index]=result[index];
      }
      console.log[a]
      res.render("show.pug",result[0])
  })
})
app.get("/",(req,res)=>{
  res.render("index.pug")
})
app.listen(8000,()=>{
    console.log("server is running on port 8000 http://localhost:8000")
})