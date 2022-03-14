var mongoose = require('mongoose'),
User =mongoose.model('user');
const bcrypt= require('bcrypt');
const jwt = require("jsonwebtoken");
exports.registeruser = function(req, res) {

  bcrypt.hash(req.body.password,10).then(hash =>{
    var user = new User({
      name: req.body.name,
      email:req.body.email,
      password:hash
    });
    console.log("in register user");
    user.save(function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  })
 
 
};

exports.getUserByEmailId = function(req, res) {
    console.log('inside getUserByEmailId');
    console.log(req.body.email);

     let user= User.findOne({ email:req.body.email,}, function(err, result) {
      if (err)
        res.send(err);   
      res.json(result); 
    });
  };
