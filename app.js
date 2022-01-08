const express=require("express");
const ejs=require("ejs")
const bodyParser=require("body-parser")


app=express()
app.set('view engine', 'ejs');


app.get('/',function(req,res){

    let today=new Date();
    let currentDay=today.getDay();
    let day='';
    if(currentDay==0){
        day='monday';
    }else{
        day="sajda"
    }
    res.render('list',{kindOfDay:day})
})



app.listen(3000,function(){
    console.log("port running on 3000");
})