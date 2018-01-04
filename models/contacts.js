var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
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
  description:
    {
      type: String, required: false
    },
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;