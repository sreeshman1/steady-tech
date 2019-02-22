var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactSchema = new Schema(
  {
    name: {type: String, required: true, max: 75},
    company: {type: String, required: true, max: 100},
    email: {type: String},
    phone: {type: String,  max: 50},
    message: {type: String, max:1000},
  }
);

//Export model
module.exports = mongoose.model('Contact', ContactSchema);