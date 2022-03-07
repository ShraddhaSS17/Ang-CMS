const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let contact = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
      mobile: {
        type: Number
    },
 
  
},{
   collection: 'contact'
})

module.exports = mongoose.model('contact', contact)