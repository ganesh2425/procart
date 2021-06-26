const express = require("express");
const User = require("../model/User");
const router = express.Router();

const bcrypt = require("bcryptjs");
/*
    Name API : localhost:5000/user/register
    Method: POST
    Field: Name, Email, Password, 
*/
router.post("/register", async (req, res)=>{
    try {
        let {name, email, password} = req.body;
        console.log(name, email, password);
        //User Existed or Not
        let user = await User.findOne({email: "enail"})
        if (user){
            return resp.status(401). json({ error: "User Already Existed"})
        }
        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        //Save the Form data in the callection
        user = new User ({ name, email, password });
        user = await user.save();
        resp.status(200).json({ result: "Success", user: user})
    }
    catch (err) {
        if (err) throw err;
        resp.status(500).json ({ error: "Server Error"});
    }
});

router.post("/login", (req,res)=>{
    res.send("<h3>Login Details</h3>")
});
module.exports = router;