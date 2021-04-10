const nodemailer = require('nodemailer');

function getEmailTransporter() {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.COMPANY_EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });
}

function sendEmail(emailInformation) {
    var transport = getEmailTransporter();
    
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