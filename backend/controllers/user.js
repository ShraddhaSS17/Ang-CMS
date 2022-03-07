var mongoose = require('mongoose'),
User =mongoose.model('user');


exports.registeruser = function(req, res) {
  var user = new User(req.body);
  console.log("in register user");
  user.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
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
