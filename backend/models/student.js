const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let student = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
      phoneNumber: {
      type: Number
   },     
     course:{
        type:String
   }
},{
   collection: 'student'
})

module.exports = mongoose.model('student', student)