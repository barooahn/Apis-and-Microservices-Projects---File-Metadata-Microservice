'use strict';

var express = require('express');
var cors = require('cors');
var multer  = require('multer');
var upload = multer({ dest: process.env.TMPDIR });

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  
  const { originalname, mimetype, size} = req.file;
  res.json({"name":originalname, "type":mimetype,"size":size});
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
