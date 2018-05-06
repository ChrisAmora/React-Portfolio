const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middleware');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 80;
const email = require('./email');

app.use(bodyParser.json({ type: '*/*' }));
app.use(middleware.errorHandler);
app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});
app.get('*.css', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});
app.use(express.static(publicPath));

app.post('/email', email.sendEmail);
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('server up', port);
});
