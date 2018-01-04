var contacts = require('../../models/contacts');
var registrations = require('../../models/registrations');
var freeGuides = require('../../models/freeGuides');

exports.contact = function (req, res) {
  var contact = new contacts({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    description: req.body.description,
    created_at: new Date(),
    updated_at:new Date()
  })

  contact.save(function (err) {
    if (err)
      res.send(err);
    res.send('Contact information save successfully');
  })
}

exports.registration = function (req, res) {
  var registration = new registrations({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    license_number: req.body.license_number,
    date_of_expiry: req.body.date_of_expiry,
    created_at:new Date(),
    updated_at:new Date()
  })

  registration.save(function(err){
    if(err)
      res.send(err);
    res.send('Registration request sent successfully');
  })
}

exports.freeGuide = function (req, res) {
  var freeGuide = new freeGuides({
    email: req.body.email,
    created_at:new Date(),
    updated_at:new Date()
  })

  freeGuide.save(function(err){
    if(err)
      res.send(err);
    res.send('Free guide request sent succssfully.')
  })
}