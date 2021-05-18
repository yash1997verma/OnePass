const express=require("express");
const app=express();
const mongoose = require("mongoose");
const cors = require("cors");
const {facileEn,facileDe} =require("./endr/encryption")
const Cryptr = require('cryptr');
const cryptr = new Cryptr('0214');

//DB Connection
mongoose
  .connect("mongodb+srv://OnePass:project@Onepass@cluster0.r4tp9.mongodb.net/Password_Manager?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  }).catch(err=>console.log(err));
  //listening port
  const port =8055;

/*const encryptedString = cryptr.encrypt('Akshay');
const decryptedString = cryptr.decrypt(encryptedString);
console.log(decryptedString);
console.log(encryptedString);
*/
const s="Akshay@sh";
const ans=facileEn(s);

app.get("/akshay",(req,res)=>{
  res.send("<h1>Akshay</h2>");
})
app.get("/",(req,res)=>{

  res.send("<h1> Backend working </h1>");

})
app.get("/Encrypt",(req,res)=>{
  return res.send("<br>Encryption technique Name :Facile101 </br>Original String=> "+s+" <br> Encrypted String=> "+ans.password+"<br>");

})
const ans2=facileDe(ans.password);
app.get("/Decrypt",(req,res)=>{
  return res.send("<br>Encryption Technique Name :Facile101 </br>Encrpted String=> "+ans.password+"<br> Decrypted String=> "+ans2.password+"<br>");

})

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
