const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let course = new Schema({
   name: {
      type: String
   },
   cat: {
      type: String
   },
      cd: {
      type: String
   },
    
},{
   collection: 'course'
})

module.exports = mongoose.model('course', course)