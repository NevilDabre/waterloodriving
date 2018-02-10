var contacts = require('../../models/contacts');
var registrations = require('../../models/registrations');
var freeGuides = require('../../models/freeGuides');
var mail = require('./mail.service');

var values = {};

exports.contact = function (req, res) {
  var contact = new contacts({
    name: req.body.fname,
    email: req.body.email,
    phone: req.body.phone,
    description: req.body.message,
    created_at: new Date(),
    updated_at: new Date()
  })

  Promise.resolve()
    .then(function () {
      return contact.save();
    })
    .then(function (data) {
      if (data) {
        contact.type = 'Contact Us';

        return mail.sendMail(contact);
      }
    })
    .then(function(info){
      res.json({ statusMessage: 'Contact information sent successfully' });
    })
    .catch(function (err) {
      console.log(err);
    })
}

exports.registration = function (req, res) {

  var registration = new registrations({
    name: req.body.fname,
    email: req.body.email,
    phone: req.body.phone,
    license_number: req.body.drivingLicenseNumber,
    date_of_expiry: req.body.expiryDate,
    created_at: new Date(),
    updated_at: new Date()
  })



  Promise.resolve()
    .then(function () {
      return registration.save();
    })
    .then(function (data) {
      if (data) {
        registration.type = 'Registration';

        return mail.sendMail(registration);
      }
    })
    .then(function(info){
      res.json({ statusMessage: 'Registration request sent successfully' });
    })
    .catch(function (err) {
      console.log(err);
    })

}

exports.freeGuide = function (req, res) {
  var freeGuide = new freeGuides({
    email: req.body.email,
    created_at: new Date(),
    updated_at: new Date()
  })

  Promise.resolve()
    .then(function () {
      return freeGuide.save();
    })
    .then(function (data) {
      if (data) {
        freeGuide.type = 'Free Guide';
        return mail.sendMail(freeGuide);
      }
    })
    .then(function(info){
      res.json({ statusMessage: 'Free Guide request sent successfully' });
    })
    .catch(function (err) {
      console.log(err);
    })
}