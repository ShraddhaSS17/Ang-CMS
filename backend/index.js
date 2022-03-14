var express = require('express'),
   app = express(),//
   port = process.env.PORT || 5000,
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   Student = require('./models/student'); //created model loading here
   User= require('./models/user')
   course=require('./models/course')
   activity=require('./models/activity')
   contact=require('./models/contact')

const multer  = require('multer')
var path= require('path')


// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/CollegeManagementSystem',  { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Setting up the routes
var studentRoute = require('./routes/student'); //importing route
studentRoute(app); //register the route
var userRoute = require('./routes/user'); //importing route
userRoute(app); //register the route
var courseRoute = require('./routes/course'); //importing route
courseRoute(app); //register the route
var activityRoute = require('./routes/activity'); //importing route
activityRoute(app); //register the route
var contactRoute = require('./routes/contact'); //importing route
contactRoute(app); //register the route
var AuthRoute=require('./routes/auth.route');
AuthRoute(app);

app.listen(port, () => {
  console.log('Connected to port ' + port)
})
app.use('/images',express.static(path.join('images')))

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});


const upload = multer({ dest: './images' })

//const app = express()

// app.post('/upload-image', upload.single('imagedata'), function (req, res, next) {
//    console.log("inside upload-image")
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
// })