var toAbsolutePath = require('to-absolute-path');
var nodemailer = require('nodemailer');
var config = require('../config/config.json');

let clientMailOptions = {
  from: config.email.from, // sender address
};

let adminMailOptions = {
  from: config.email.from, // sender address
  cc: config.email.cc,
  to: config.email.to, // list of receivers
};

var transporter = nodemailer.createTransport('smtps://' + config.email.auth.username + '%40gmail.com:' + config.email.auth.password + '@smtp.gmail.com');

function buildClientMail(values){
  /**
   * 1. subject
   * 2. build html using values
   * 3. get to email
   * 4. attachment
   */
  clientMailOptions.subject = 'Waterloo Driving School - ' + values.type;
  clientMailOptions.to = values.email;

  if (values.type === 'Free Guide') {
    clientMailOptions.html = '<table width="100%" cellspacing="0" cellpadding="0" data-module="module-2"><tbody><tr><td bgcolor="#eaeced" data-bgcolor="bg-module"><table width="600" align="center" class="flexible" style="margin:0 auto;" cellspacing="0" cellpadding="0"><tbody><tr><td class="img-flex" align="center"><img width="300" height="300" style="vertical-align:top;" alt="" src="http://waterloodrivingschool.herokuapp.com/img/logo-blue.png"></td></tr><tr><td class="holder" style="padding:58px 60px 52px;" bgcolor="#f9f9f9" data-bgcolor="bg-block"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="title" style="font:35px/38px Arial, Helvetica, sans-serif; color: #1565A6; padding:0 0 24px;" data-link-style="text-decoration:none; color:#292c34;" data-max="45" data-min="25" data-size="size title" data-color="title" data-link-color="link title color">Waterloo Driving School</td></tr><tr><td align="center" style="font:16px/25px Arial, Helvetica, sans-serif; color:#111; padding:0 0 23px;" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" data-max="26" data-min="10" data-size="size text" data-color="text" data-link-color="link text color"><br />Thank you for visiting our website. We have attached free Guides with this email.<br /> Please call us on <strong><a href="tel:+1(519)729-9275"> +1 (519) 729 - 9275</a> </strong> Or <strong><a href="tel:+1(519)729-9275"> +1 (519) 729 - 9275</a></strong> for special rates and get started with drivers training.</td></tr><tr><td style="padding:0 0 20px;"><table width="134" align="center" style="margin:0 auto;" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="btn" style="font:12px/14px Arial, Helvetica, sans-serif; color:#f8f9fb; text-transform:uppercase; mso-padding-alt:12px 10px 10px; border-radius:2px;" bgcolor="#7bb84f" data-bgcolor="bg-button" data-max="16" data-min="10" data-size="size button"><a style="text-decoration:none; color:#f8f9fb; display:block; padding:12px 10px 10px;" href="www.waterloodrivingschool.ca" target="_blank">Learn More</a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height="28"></td></tr></tbody></table></td></tr></tbody></table>';
    clientMailOptions.attachments = [
      {
          filename: 'G1 Test Guide by Waterloo Driving School.pdf',
          path: toAbsolutePath('../libFiles/G1_test_guide_by_Waterloo_Driving_School.pdf')
      },
      {
          filename: 'G2 Test Guide by Waterloo Driving School.pdf',
          path: toAbsolutePath('../libFiles/G2_test_guide_by_Waterloo_Driving_School.pdf')
      },
      {
          filename: 'G Test Guide by Waterloo Driving School.pdf',
          path: toAbsolutePath('../libFiles/G_test_guide_by_Waterloo_Driving_School.pdf')
      }
    ];
  }else if(values.type === 'Contact Us'){
    clientMailOptions.html = '<table width="100%" cellspacing="0" cellpadding="0" data-thumb="thumbnails/02.png" data-module="module-2"><tbody><tr><td bgcolor="#eaeced" data-bgcolor="bg-module"><table width="600" align="center" class="flexible" style="margin:0 auto;" cellspacing="0" cellpadding="0"><tbody><tr><td class="img-flex" align="center"><img width="300" height="300" style="vertical-align:top;" alt="" src="http://waterloodrivingschool.herokuapp.com/img/logo-blue.png"></td></tr><tr><td class="holder" style="padding:58px 60px 52px;" bgcolor="#f9f9f9" data-bgcolor="bg-block"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="title" style="font:35px/38px Arial, Helvetica, sans-serif; color: #1565A6; padding:0 0 24px;" data-link-style="text-decoration:none; color:#292c34;" data-max="45" data-min="25" data-size="size title" data-color="title" data-link-color="link title color">Waterloo Driving School</td></tr><tr><td align="center" style="font:16px/25px Arial, Helvetica, sans-serif; color:#111; padding:0 0 23px;" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" data-max="26" data-min="10" data-size="size text" data-color="text" data-link-color="link text color"><br />Thank you for visiting our website. We have received your message one of our agent will contact you soon.<br /> Please call us on <strong><a href="tel:+1(519)729-9275"> +1 (519) 729 - 9275</a> </strong> Or <strong><a href="tel:+1(519)729-9275"> +1 (519) 729 - 9275</a></strong> for special rates and get started with drivers training.</td></tr><tr><td style="padding:0 0 20px;"><table width="134" align="center" style="margin:0 auto;" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="btn" style="font:12px/14px Arial, Helvetica, sans-serif; color:#f8f9fb; text-transform:uppercase; mso-padding-alt:12px 10px 10px; border-radius:2px;" bgcolor="#7bb84f" data-bgcolor="bg-button" data-max="16" data-min="10" data-size="size button"><a style="text-decoration:none; color:#f8f9fb; display:block; padding:12px 10px 10px;" href="www.waterloodrivingschool.ca" target="_blank">Learn More</a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height="28"></td></tr></tbody></table></td></tr></tbody></table>';
  }else if(values.type === 'Registration'){
    clientMailOptions.html = '<table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td bgcolor="#eaeced" data-bgcolor="bg-module"><table width="600" align="center" class="flexible" style="margin:0 auto;" cellspacing="0" cellpadding="0"><tbody><tr><td class="img-flex" align="center"><img width="300" height="300" style="vertical-align:top;" alt="" src="http://waterloodrivingschool.herokuapp.com/img/logo-blue.png"></td></tr><tr><td class="holder" style="padding:58px 60px 52px;" bgcolor="#f9f9f9" data-bgcolor="bg-block"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="title" style="font:35px/38px Arial, Helvetica, sans-serif; color: #1565A6; padding:0 0 24px;" data-link-style="text-decoration:none; color:#292c34;" data-max="45" data-min="25" data-size="size title" data-color="title" data-link-color="link title color">Waterloo Driving School</td></tr><tr><td align="center" style="font:16px/25px Arial, Helvetica, sans-serif; color:#111; padding:0 0 23px;" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" data-max="26" data-min="10" data-size="size text" data-color="text" data-link-color="link text color"><br />Thank you for visiting our website. We have received your registration information and one of our agent will contact you as soon as possible.<br /> Please call us on <strong><a href="tel:+1(519)729-9275"> +1 (519) 729 - 9275</a> </strong> Or <strong><a href="tel:+1(519)729-9275"> +1 (519) 729 - 9275</a></strong> for special rates and get started with drivers training.</td></tr><tr><td style="padding:0 0 20px;"><table width="134" align="center" style="margin:0 auto;" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="btn" style="font:12px/14px Arial, Helvetica, sans-serif; color:#f8f9fb; text-transform:uppercase; mso-padding-alt:12px 10px 10px; border-radius:2px;" bgcolor="#7bb84f" data-bgcolor="bg-button" data-max="16" data-min="10" data-size="size button"><a style="text-decoration:none; color:#f8f9fb; display:block; padding:12px 10px 10px;" href="www.waterloodrivingschool.ca" target="_blank">Learn More</a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height="28"></td></tr></tbody></table></td></tr></tbody></table>';
  }
  return clientMailOptions;

}

function buildAdminMail(values){
  /**
   * 1.no email for free guide
   * 2.build mail using to
   */
  adminMailOptions.subject = 'Waterloo Driving School - ' + values.type;
  adminMailOptions.to = config.email.to;
  
  if(values.type === 'Contact Us'){
    adminMailOptions.html = '<table width="100%" cellspacing="0" cellpadding="0" data-thumb="thumbnails/02.png" data-module="module-2"><tbody><tr><td bgcolor="#eaeced" data-bgcolor="bg-module"><table width="600" align="center" class="flexible" style="margin:0 auto;" cellspacing="0" cellpadding="0"><tbody><tr><td class="img-flex" align="center"><img width="300" height="300" style="vertical-align:top;" alt="" src="http://waterloodrivingschool.herokuapp.com/img/logo-blue.png"></td></tr><tr><td class="holder" style="padding:58px 60px 52px;" bgcolor="#f9f9f9" data-bgcolor="bg-block"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="title" style="font:25px/38px Arial, Helvetica, sans-serif; color: #1565A6; padding:0 0 24px;" data-link-style="text-decoration:none; color:#292c34;" data-max="45" data-min="25" data-size="size title" data-color="title" data-link-color="link title color">Waterloo Driving School Registration</td></tr><tr><td style="font:16px/25px Arial, Helvetica, sans-serif; color:#111; padding:0 0 23px;" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" data-max="26" data-min="10" data-size="size text" data-color="text" data-link-color="link text color"><h3> Name : </h3> '+values.name +'<h3> Phone : </h3> '+ values.phone +'<h3> Email : </h3> '+ values.email+'<h3> Message : </h3> '+ values.message +'</td></tr><tr><td style="padding:0 0 20px;"><table width="134" align="center" style="margin:0 auto;" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="btn" style="font:12px/14px Arial, Helvetica, sans-serif; color:#f8f9fb; text-transform:uppercase; mso-padding-alt:12px 10px 10px; border-radius:2px;" bgcolor="#7bb84f" data-bgcolor="bg-button" data-max="16" data-min="10" data-size="size button"></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height="28"></td></tr></tbody></table></td></tr></tbody></table>';
  }else if(values.type === 'Registration'){
    adminMailOptions.html = '<table width="100%" cellspacing="0" cellpadding="0" data-thumb="thumbnails/02.png" data-module="module-2"><tbody><tr><td bgcolor="#eaeced" data-bgcolor="bg-module"><table width="600" align="center" class="flexible" style="margin:0 auto;" cellspacing="0" cellpadding="0"><tbody><tr><td class="img-flex" align="center"><img width="300" height="300" style="vertical-align:top;" alt="" src="http://waterloodrivingschool.herokuapp.com/img/logo-blue.png"></td></tr><tr><td class="holder" style="padding:58px 60px 52px;" bgcolor="#f9f9f9" data-bgcolor="bg-block"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="title" style="font:25px/38px Arial, Helvetica, sans-serif; color: #1565A6; padding:0 0 24px;" data-link-style="text-decoration:none; color:#292c34;" data-max="45" data-min="25" data-size="size title" data-color="title" data-link-color="link title color">Waterloo Driving School Registration</td></tr><tr><td style="font:16px/25px Arial, Helvetica, sans-serif; color:#111; padding:0 0 23px;" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" data-max="26" data-min="10" data-size="size text" data-color="text" data-link-color="link text color"><h3> Name : </h3> '+values.name +'<h3> Phone : </h3> '+ values.phone +'<h3> Email : </h3> '+ values.email+' </h3> <h3> Driving License Number : </h3> '+ (values.drivingLicenseNumber || 'NA') +' <h3> Driving License Expiry Date : </h3>'+ (values.expiryDate || 'NA') +'</td></tr><tr><td style="padding:0 0 20px;"><table width="134" align="center" style="margin:0 auto;" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="btn" style="font:12px/14px Arial, Helvetica, sans-serif; color:#f8f9fb; text-transform:uppercase; mso-padding-alt:12px 10px 10px; border-radius:2px;" bgcolor="#7bb84f" data-bgcolor="bg-button" data-max="16" data-min="10" data-size="size button"></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height="28"></td></tr></tbody></table></td></tr></tbody></table>';
  }

  return adminMailOptions;

}

exports.sendMail = function (values) {

    var clientMail = function (options) {
      return new Promise(function (resolve, reject) {

        transporter.sendMail(options, function (err, info) {
          if (err)
            console.log(err)
          else {
            return info;
          }
        });
      })
    }

    var adminMail = function (options) {
      return new Promise(function (resolve, reject) {

        transporter.sendMail(options, function (err, info) {
          if (err)
            console.log(err)
          else {
            return info;
          }
        });
      })
    }

  /**
   * 1. build client mail
   * 2. build admin mail
   * 3. send client mail
   * 4. send admin mail
   */

  Promise.resolve()
    .then(function(){
      return buildClientMail(values);
    })
    .then(function(){
      if(values.type !== 'Free Guide'){
        return buildAdminMail(values);
      }
    })
    .then(function () {
      if(clientMailOptions.html){
        clientMail(clientMailOptions);
        return clientMailOptions
      }
    })
    .then(function(){
      if(adminMailOptions.html){
        return adminMail(adminMailOptions);
      }
    })
    .then(function (info) {
      return info;
    })
    .catch(function (err) {
      console.log(err);
    })
}

