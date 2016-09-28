console.log('**** model linked ****');
var mongoose = require('mongoose');

var AppsSchema = new mongoose.Schema({
  user: String,
  date: Date,
  time: Date,
  complaint: String
})

var Apps = mongoose.model('Apps', AppsSchema);
