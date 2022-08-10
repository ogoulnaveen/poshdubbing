const express = require("express");
const cors = require("cors");
const app = express();
require("./db/config");


const User =  require('./db/User');

/* adding middlware to get data */
app.use(express.json());
app.use(cors());

app.post("/createaccount", async (req,response)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = res.toObject();
    delete result.password
    response.send(result);
});

app.post("/login", async (req,res) =>{
    if(req.body.password && req.body.email){
    let user = await User.findOne(req.body).select("-password");
    if(user){
    res.send(user)
    }else{
        res.send({result:"no users found"})
    }
} else{
    res.send({result:"no users found"})
}
})

app.listen(5000);