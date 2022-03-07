const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let activity = new Schema({
   name: {
      type: String
   },
   description: {
      type: String
   },
      imagePath: {
        type: String
    },
     date: {
    type: String
 },
  
},{
   collection: 'activity'
})

module.exports = mongoose.model('activity', activity)