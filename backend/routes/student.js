module.exports = function(app) {
    var student = require('../controllers/student');
    app.route('/')
      .get(student.listAllstudent)
      
    app.route('/student')
      .get(student.listAllstudent)
      .post(student.createstudent);

    app.route('/student/:studentId')
      .get(student.readstudent)
      .put(student.updatestudent)
      .delete(student.deletestudent);
      // app.route('/files')
      // .get(university.getFiles);
      // app.route('/upload')
      // .post(student.getFiles);
};  