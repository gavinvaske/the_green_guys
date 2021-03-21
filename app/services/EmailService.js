const nodemailer = require('nodemailer');

function sendEmail(emailInformation) {
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 2525,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }
    });
    
    const message = {
        from: emailInformation.userEmail,
        to: process.env.COMPANY_EMAIL,
        subject: emailInformation.emailSubject,
        text: emailInformation.emailBody
    };

    transport.sendMail(message, function(error) {
        if (error) {
            console.log(error);
        }
    });
}

module.exports = {
    sendEmail
};