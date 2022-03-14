var mongoose = require('mongoose'),
  
course =mongoose.model('course');


exports.listAllcourse = function(req, res) {
  //console.log("reading course");
  course.find({}, function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
};

exports.listAllCourseName = function(req, res) {
  //console.log("reading course");
  course.find({},{"name":1,"_id":0}, function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
};

exports.createcourse = function(req, res) {
  var stud = new course(req.body);
  stud.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readcourse = function(req, res) {
  
  course.findById(req.params.courseId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.updatecourse = function(req, res) {
  course.findOneAndUpdate({_id: req.params.courseId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.deletecourse = function(req, res) {
  course.deleteOne({
    _id: req.params.courseId
  }, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'course record successfully deleted' });
  });
};