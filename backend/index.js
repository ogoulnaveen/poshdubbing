const express = require("express");
const cors = require("cors");
const app = express();
const sendEmail = require("../backend/utils/email_service");
const tokenService = require("../backend/utils/token_service");
require("./db/config");


const User =  require('./db/User');

/* adding middlware to get data */
app.use(express.json());
app.use(cors());

app.post("/createaccount", async (req,response)=>{
    let user = new User(req.body);
    let result = await user.save();
    // result = res.toObject();
    delete result.password
    response.send(result);
});

app.post("/login", async (req,res) =>{
    if(req.body.password && req.body.email){
    let user = await User.findOne({email:req.body.email , password:req.body.password});
    console.log('user',user);
    if(!user) return res.send({result:"no users found"})
    else{

        user.token = await tokenService.generateAccessToken(user,  'KaianNUywgNu26735@!');
        console.log('token', user.token);
        user.save()
        console.log('user',user);
        if(user){
            res.status(200).send({result:user})
       
        }else{
            res.send({result:"no users found"})
        }
    }
    
} else{
    res.send({result:"no users found"})
}
})
app.post("/send-reset", async (req,res) =>{
try {
    const { email } = req.body;
    console.log('email',email)
    const token = tokenService.generateResetPasswordToken(email);
    console.log('token',token)
    const mailInfo = await sendEmail(email, token);
    return res.status(200).send({ message: "email sent" });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "failed to send email" });
  }
})
app.post("/reset-password", async (req,res) =>{
try{
   console.log('Her I am')
    const { email, newPassword } = req.body;
    // const salt = await bcrypt.genSalt(10);
    // let updatedPassword = await bcrypt.hash(newPassword, salt);
    let user = await User.findOne({ email });
    user.password = newPassword;
    let newUser = new User(user)
    await newUser.save();
    return res.status(200).send({ message: "Password reset" });
  }catch(err){
    return res
    .status(400)
    .send({ message: "failed to send email" });
  }
})

app.get("/getUsers", async (req,res) =>{
    try{
    let user = await User.find({ });
    console.log('user',user)
    return res.status(200).send({ user});
    }catch(err){
    return res
    .status(400)
    .send({ message: "failed to send email" });
      }
})
app.listen(5000);