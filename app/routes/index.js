const express = require('express');
const router = express.Router();
const {sendEmail} = require('../services/EmailService');
const STATUS_SUCCESS = 200;

router.get('/', (request, response) => {
    response.render('index');
});

router.post('/email-contact-form', (request, response) => {
    let emailInformation = request.body;
    sendEmail(emailInformation);

    response.status(STATUS_SUCCESS).send();
});

module.exports = router;