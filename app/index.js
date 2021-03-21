const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

const app = express();
const defaultPort = 3000;
const PORT = process.env.PORT || defaultPort;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
app.use(expressLayouts);

app.use('/', require('./routes/index'));

app.listen(PORT, () => {
    console.log(`Server started listening on PORT = ${PORT}`);
});