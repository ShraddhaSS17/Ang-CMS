module.exports = function(app) {
    var contact = require('../controllers/contact');
    app.route('/')
      .get(contact.listAllcontact)
      
    app.route('/contact')
      .get(contact.listAllcontact)
      .post(contact.createcontact);

    app.route('/contact/:contactId')
      .get(contact.readcontact)
      .put(contact.updatecontact)
      .delete(contact.deletecontact);

};  