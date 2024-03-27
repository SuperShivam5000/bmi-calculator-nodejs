const express = require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator",function (req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req,res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight/(height*height);
  res.send("Your BMI Is " + bmi);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
