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
        values.html = 'Name = '+ req.body.fname + '\n Email = ' + req.body.email + '\n Phone = '+ req.body.phone + '\n Description = '+ req.body.message;
        values.type == 'Contact Us';

        return mail.sendMail(values);
      }
    })
    .then(function(info){
      console.log(info.response);
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
        values.html = 'Name = '+ req.body.fname + '\n Email = ' + req.body.email + '\n Phone = '+ req.body.phone + '\n License Number = '+ (req.body.drivingLicenseNumber ? req.body.drivingLicenseNumber : 'Not Available') + '\n Date Of Expiry = '+ (req.body.date_of_expiry ? req.body.date_of_expiry : 'Not Available');
        values.type = 'Registration';

        return mail.sendMail(values);
      }
    })
    .then(function(info){
      console.log(info.response);
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
        values.html = 'Email = '+ req.body.email;
        values.type = 'Free Guide';
        values.email = req.body.email;
        return mail.sendMail(values);
      }
    })
    .then(function(info){
      console.log(info.response);
      res.json({ statusMessage: 'Free Guide request sent successfully' });
    })
    .catch(function (err) {
      console.log(err);
    })
}