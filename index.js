require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
let bodyParser = require('body-parser');

// Basic Configuration
const port = process.env.PORT || 3000;
let urls = [];

let shortUrlNo = 1;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

// Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl', function (req, res) {
  // dns.lookup(req.body.url, function (err) {
  //   if (err) {
  //     console.log(err)
  //     res.send({ error: 'invalid url', err: err })
  //   } else {
  //     let newUrl = {
  //       original_url: req.body.url,
  //       short_url: shortUrlNo,
  //     }
  //     urls.push = newUrl;
  //     res.send(newUrl);
  //     shortUrlNo++;
  //     console.log(urls)
  //   }
  // });
  let newUrl = {
    original_url: req.body.url,
    short_url: shortUrlNo,
  }
  urls.push(newUrl);
  res.send(newUrl);
  shortUrlNo++;
  console.log(urls)
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