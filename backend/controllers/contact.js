var mongoose = require('mongoose'),
  contact =mongoose.model('contact');

exports.listAllcontact = function(req, res) {
  contact.find({}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};
exports.createcontact = function(req, res) {
  var stud = new contact(req.body);
  stud.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readcontact = function(req, res) {
  contact.findById(req.params.contactId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.updatecontact = function(req, res) {
  contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.deletecontact = function(req, res) {
  contact.deleteOne({
    _id: req.params.contactId
  }, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'contact record successfully deleted' });
  });
};