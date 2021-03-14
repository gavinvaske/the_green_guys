const express = require('express');

const app = express();
const defaultPort = 3000;
const PORT = process.env.PORT || defaultPort;

app.listen(PORT, () => {
    console.log(`Server started listening on PORT = ${PORT}`);
});