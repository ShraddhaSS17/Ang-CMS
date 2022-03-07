var mongoose = require('mongoose'),
student =mongoose.model('student');
exports.listAlllogin = function(req, res) {
  student.find({}, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};
exports.listAllstudent = function(req, res) {
  student.find({}, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};
exports.createstudent = function(req, res) {
  var stud = new student(req.body);
  stud.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readstudent = function(req, res) {
  student.findById(req.params.studentId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.updatestudent = function(req, res) {
  student.findOneAndUpdate({_id: req.params.studentId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.deletestudent = function(req, res) {
  student.deleteOne({
    _id: req.params.studentId
  }, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'Student record successfully deleted' });
  });
};