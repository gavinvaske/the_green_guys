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

    console.log(`companyEmail: ${process.env.COMPANY_EMAIL}`);
    console.log(`companyEmailPswd: ${process.env.EMAIL_PASSWORD}`);

    transport.sendMail(message, function(error) {
        if (error) {
            console.log(`Error while sending email: ${error}`);
        }
        console.log(`sendMail message: ${message}`);
    });
}

module.exports = {
    sendEmail
};