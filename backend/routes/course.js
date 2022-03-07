module.exports = function(app) {
    var course = require('../controllers/course');
    app.route('/')
      .get(course.listAllcourse)
      
    app.route('/course')
      .get(course.listAllcourse)
      .post(course.createcourse);

    app.route('/courseNameList')
    .get(course.listAllCourseName);

    app.route('/course/:courseId')
      .get(course.readcourse)
      .put(course.updatecourse)
      .delete(course.deletecourse);
     
};  