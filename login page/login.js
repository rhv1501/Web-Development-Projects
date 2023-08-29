var submitbtn=document.getElementById("submitbtn");
var resetbtn=document.getElementById("resetbtn");
var oguserid= "Rudresh1501";
var ogpassword= "Rudresh1501";
var userids=document.querySelector("#user_id");
var passids=document.querySelector("#password");
    submitbtn.addEventListener('click',()=>{
    var userid=document.getElementById("user_id").value;
    var password=document.getElementById("password").value;
    if(userid==oguserid && password==ogpassword){
    alert('Login Successfull');
    window.location.href="http://127.0.0.1:5500/index.html";
}
else{
    alert('please enter valid username or password')
}
}
)
resetbtn.addEventListener('click',()=>{
   if(userids!="" && passids!="")
   userids.value="";
   passids.value="";
})
