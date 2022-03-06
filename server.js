var express= require("express");
var app=express();
let  date= new Date();
let [day,hour]=[date.getDay(),date.getHours()];
let error=false;
app.use(express.json()) // for parsing application/json

app.use(express.static('public'))
app.set('view engine','ejs')



//home
app.get("/", (req,res)=>{
   res.render('pages/index')
  
})

//Contact_us
app.get("/Contact_us", (req,res)=>{
    res.render('pages/Contact_us')
 })



 // Our_service
 
 let testerror= (req,res,next)=>{
   if ((day==0)||(day==6)||(hour<9)||(hour>=17)) 
   error=true;
   else
   error=false;
   console.log(error)
   next()
}
 
 app.get("/Our_service",testerror, (req,res)=>{
   res.render('pages/Our_service',{error: error})
  
 });

 



app.listen(8000);
