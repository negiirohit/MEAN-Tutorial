var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//
var nodemailer = require('nodemailer');
const config = require('./config');

var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: config.email,
         pass: config.password
     },
     tls: {
         rejectUnauthorized:false
     }
 });
// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Rohit Negi ?" <negirht123@gmail.com>', // sender address
    to: 'rohitnegi@smartdatainc.net', // list of receivers
    subject: 'Welcome ✔', // Subject line
    text: 'Thank you for contacting us ?', // plaintext body
    html: '<b>Thank You</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});