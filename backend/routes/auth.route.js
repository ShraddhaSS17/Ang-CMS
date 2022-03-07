module.exports = function(app){
const userController= require('../controllers/user.controller')
//const asyncHandler=require('express-async-handler');
//const bcrypt=require('bcrypt')

//const router= express.Router();

app.route('/login')
      .post(userController.getUserByEmailIdAndPassword)    

// router.post('/login',asyncHandler(getUserByEmailIdAndPassword));

// async function getUserByEmailIdAndPassword(res, req, next){
    
//     //const user=req.body;
//     console.log('searching user for', req.body.email);

//      const savedUser= await userController.getUserByEmailIdAndPassword(
//          user.email,
//          user.password
//      );
//      res.json(savedUser); 
//}
//modules.exports = router;
}