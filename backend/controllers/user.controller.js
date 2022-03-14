 var mongoose = require('mongoose'),
User =mongoose.model('user');
const bcrypt= require('bcrypt');
var jwt=require("jsonwebtoken");


exports.getUserByEmailIdAndPassword = function(req, res) {
    console.log('inside controller');
  
     let user= User.findOne({ email:req.body.email }, function(err, result) {
    
    
      console.log(req.body.email);
      console.log(req.body.password);
       console.log(result);
      // if (err)
      //   res.send(err);   
     bcrypt.compare(req.body.password,result.password,function(err, result) {
        if (err){
         console.log(err); 
        res.send(err);
        } 
        if(result){
        console.log("compare success")
        const token =jwt.sign({email:user.email,userId: user._id}, 'secret_this_should_be_longer',
        {expiresIn: "1h"});    //secret private key
        res.status(200).json({   //res.json (goes to client) then it will recv by service auth
          token :token
        });}
        else res.send(null);
        
        } )
      });
     };
