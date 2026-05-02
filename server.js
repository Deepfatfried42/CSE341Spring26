const express = require('express');
const app = express();


const port = 3000;

app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Server is running on port ' + (process.env.port || port));