module.exports = function(app) {
    var user = require('../controllers/user');
    app.route('/user')
    .post(user.registeruser);

    app.route('/checkUserExist')
    .post(user.getUserByEmailId)
};  