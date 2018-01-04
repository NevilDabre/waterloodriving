var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registrationSchema = new Schema({
  name:
    {
      type: String, required: true
    },
  email:
    {
      type: String, required: true
    },
  phone:
    {
      type: Number, required: true
    },
  license_number:
    {
      type: String, required: false
    },
  date_of_expiry:
    {
      type: Date, required: false
    },
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
});

var Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;