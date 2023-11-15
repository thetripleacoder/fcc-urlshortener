require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dns = require('dns');

// Basic Configuration
const port = process.env.PORT || 3000;
let urls = [];

let shortUrlNo = 1;

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use('/public', express.static(`public`));

// Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl', function (req, res) {
  let isValidUrl = /(https?:\/\/w{0,3}.*.[a-z]{3})/.test(req.body.url);
  dns.lookup(req.body.url, (err, value) => {
    console.log(err, value)
    if (err && !isValidUrl) {
      res.send ({ error: 'invalid url' });
    } else {
      let newUrl = {
        original_url: req.body.url,
        short_url: shortUrlNo,
      }
      urls.push(newUrl);
      res.send(newUrl);
      shortUrlNo++;
    }
  })
});

app.get('/api/shorturl/:short_url', function (req, res) {
  let urlToRedirect = urls.find(i => i.short_url == req.params.short_url);
  res.redirect(urlToRedirect.original_url)
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

//  Export the Express API
module.exports = app;