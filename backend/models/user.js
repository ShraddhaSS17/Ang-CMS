const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let user = new Schema({
 name:{
    type: String,
    required: true
 },
   email: {
      type: String,
      unique: true,
      required:true
   },
      password: {
      type: String,
      required: true
   },
    
},{
   collection: 'user'
})

module.exports = mongoose.model('user', user)