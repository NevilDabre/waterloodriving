var nodemailer = require('nodemailer');
var config = require('../config/config.json');

let mailOptions = {
  from: config.email.from, // sender address
  to: config.email.to, // list of receivers
  subject: config.email.subject, // Subject line
  html: config.email.html // html body
};

var transporter = nodemailer.createTransport('smtps://'+config.email.auth.username+'%40gmail.com:'+config.email.auth.password+'@smtp.gmail.com');

exports.sendMail = function(values){
  console.log(values.text);
  mailOptions.subject = 'Waterloo Driving School - ' + values.type;
  mailOptions.html = values.html;
  mailOptions.to = values.type == 'Free Guide'? values.email : config.email.to;

  var mail = function(options){
    return new Promise(function(resolve, reject){

      transporter.sendMail(options, function (err, info) {
        if(err)
          console.log(err)
        else{
          console.log(info.response);
          return info;
        }
     });
    })
  }
  Promise.resolve()
    .then(function(){
      return mail(mailOptions);
    })
    .then(function(info){
      return info;
    })
    .catch(function(err){
      console.log(err);
    })
}

