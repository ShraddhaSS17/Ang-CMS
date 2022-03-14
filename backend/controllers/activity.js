var mongoose = require('mongoose'),
  activity =mongoose.model('activity');
  

exports.listAllactivity = function(req, res) {
  activity.find({}, function(err, activity) {
    if (err)
      res.send(err);
      //console("errin")
    res.json(activity);
  });
  console.log("outerr")
};
exports.createactivity = function(req, res) {
  var act = new activity(req.body);
  act.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readactivity = function(req, res) {
  activity.findById(req.params.activityId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.updateactivity = function(req, res) {
  activity.findOneAndUpdate({_id: req.params.activityId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.deleteactivity = function(req, res) {
  activity.deleteOne({
    _id: req.params.activityId
  }, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'activity record successfully deleted' });
  });
};