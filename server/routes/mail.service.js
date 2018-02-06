var nodemailer = require('nodemailer');
var config = require('../config/config.json');

let mailOptions = {
  from: config.email.from, // sender address
  to: config.email.to, // list of receivers
  subject: config.email.subject, // Subject line
  text: config.email.text, // plain text body
  html: config.email.html // html body
};

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.username,
    pass: config.password
  }
});

exports.sendMail = function(values){
  mailOptions.subject = 'Waterloo Driving School - ' + values.type;
  mailOptions.text = values.text;
  mailOptions.to = values.type == 'Free Guide'? values.email : config.email.inquiryEmail;
  Promise.resolve()
    .then(function(){
      return transporter.sendMail(mailOptions)
    })
    .then(function(info){
      return info;
    })
    .catch(function(err){
      console.log(err);
    })
}

