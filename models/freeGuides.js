var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var freeGuideSchema = new Schema({
  email:
    {
      type: String, required: true
    },
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
});

var FreeGuide = mongoose.model('FreeGuide', freeGuideSchema);

module.exports = FreeGuide;