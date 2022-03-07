module.exports = function(app) {
    var Activity = require('../controllers/activity');
    //const storage= require('../helper/storage')
    app.route('/')
      .get(Activity.listAllactivity)
      //.post(storage)
      
    app.route('/activity')
      .get(Activity.listAllactivity)
      .post(Activity.createactivity);

    app.route('/activity/:activityId')
      .get(Activity.readactivity)
      .put(Activity.updateactivity)
      .delete(Activity.deleteactivity);
     
};  