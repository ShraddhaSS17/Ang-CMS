var mongoose = require('mongoose'),
User =mongoose.model('user');
//const User =require ('../models/user');
//const bcrypt=require('bcrypt');

// async function insert(user){
//     user.hashedPassword = bcrypt.hasedSync(user.password,10 );
// delete user.password;

// console.log('saving user to db',user);

// return await new User(user).save();

//}

exports.getUserByEmailIdAndPassword = function(req, res) {
    console.log('inside controller');
    console.log(req.body.email);
    console.log(req.body.password)
     let user= User.findOne({ email:req.body.email,password:req.body.password }, function(err, result) {
      if (err)
        res.send(err);   
      res.json(result); 
    });
  };

// async function getUserByEmailIdAndPassword(data){
//     console.log('inside controller- '+ data.email);
//     // let user = await User.findOne({email:data.email,password:data.password});
//     // //if(isUserValid (user, password,user.hashedPassword)){
//     // if(user){
//     //     console.log('user found');
//     //     user = user.toObject();
//     //     //delete user.hasedPassword;
//     //     return user;
//     // }
//     // else{
//     //     console.log('user not found');
//     //     return null;
//     // }
//     return null
// }
// function isUserValid(user, password, hashedPassword){
//    return user && bcrypt.compareSync(password , hasedPassword);
//}
 
//module.exports={ getUserByEmailIdAndPassword};