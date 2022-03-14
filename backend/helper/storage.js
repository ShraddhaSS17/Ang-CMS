// const multer = require('multer');

// const diskStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'images');
//   },
//   filename: (req, file, cb) => {
//     const mimeType = file.mimetype.split('/');
//     const fileType = mimeType[1];
//     const fileName = file.originalname + '.' + fileType;
//     cb(null, fileName);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
//   allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
// };

// const storage = multer({ storage: diskStorage, fileFilter: fileFilter }).single(
//   'image'
// );

// module.exports = storage;


var express = require('express')
var multer  = require('multer')
//var port = 3000;

var app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage }).single('file')

/*
app.use('/a',express.static('/b'));
Above line would serve all files/folders inside of the 'b' directory
And make them accessible through http://localhost:3000/a.
*/
// app.use(express.static(__dirname + '/public'));
// app.use('/uploads', express.static('uploads'));

app.post('/api/upload-image', upload.single('file'), function (req, res, next) {//
  //console.log(JSON.stringify(req.file))
  var response = 'Image uploaded successfully'
  console.log(req,file)
  return res.send(response)
})  

// app.post('/profile-upload-multiple', upload.array('profile-files', 12), function (req, res, next) {
//     // req.files is array of `profile-files` files
//     // req.body will contain the text fields, if there were any
//     var response = '<a href="/">Home</a><br>'
//     response += "Files uploaded successfully.<br>"
//     for(var i=0;i<req.files.length;i++){
//         response += `<img src="${req.files[i].path}" /><br>`
//     }
    
//     return res.send(response)
// })
   

//app.listen(port,() => console.log(`Server running on port ${port}!`))
