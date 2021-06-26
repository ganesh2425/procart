const express = require("express");
const User = require("../model/User");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
        console.log(user);
        user = await user.save();
        resp.status(200).json({ result: "Success", user: user})
    }
    catch (err) {
        if (err) throw err;
        resp.status(500).json ({ error: "Server Error"});
    }
});

router.post("/login", async (req, res)=>{
    try {
        //Read Form data
       /* console.log(req);
        console.log(req.body); */
        let {email, password} = req.body;
        // Verify Register User or Not (using Email)
        let user = await User.findOne({email: email});
        if (!user) {
            return resp.status(400).json({ error: "User Account Not Available"});
        }
        // Verify the Password
        let result = await bcrypt.compare(password, user.password);
        // console.log(result);
        if(!result){
            return resp.status(400).json({status: "Password not Matches"})
        }
        let payload = {
            user: { id: user.id},
        };
        jwt.sign(payload, process.env.Secret_KEY, (err, token)=>{
            if (err) throw err
        });
        console.log(process.env.Secret_KEY);
    } catch (err){
        if (err) throw err
        resp.status(500).json({error: "Server Error"})
    }
});
module.exports = router;