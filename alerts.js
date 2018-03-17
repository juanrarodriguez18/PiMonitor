require('dotenv').config()
var log4js = require('log4js');
var logger = log4js.getLogger();
log4js.replaceConsole();
var request = require('sync-request');
var firebaseAPI = require('./firebase.api.js');
var nodemailer = require('nodemailer');
var ancillaryMethods = require('./ancillaryMethods.js');


//email
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = {

    checkAlerts: function () {
            //TODO
    }
}

function sendAlert() {
    //TODO
    var mailOptions = {
      from: 'Test <test@gmail.com>',
      to: user.email,
      subject: '',
      text: ''
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            logger.error(error);
        }else{
            console.log('Message sent: ' + info.response);
        };
    });
}

//module.exports.checkAlerts();