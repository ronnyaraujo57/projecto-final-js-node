const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const controller = require('./lib/controller');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// Handle requests
app.post('/api/login', controller.login);

app.post('/api/register', controller.createUser); 

app.post('/', (req, res) => {
  res.json({
    success: true,
    status: 'App running...'
  });
});

const port = 3030;

http.createServer(app).listen(port, () => {
  console.log('Back on port: ', port);
});