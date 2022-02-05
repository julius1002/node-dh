const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.listen(3000, () => console.log("listening on 3000"))

const privateKey = BigInt(13 || process.env.key)

app.post('/exchange', (req, res) => {
  const pow = (base, exp) => base ** exp
  const generator = BigInt(req.body.g)
  const prime = BigInt(req.body.p)
  const reqKPub = BigInt(req.body.A)
  const sessionKey = pow(reqKPub, privateKey) % prime
  const resKPub = pow(generator, privateKey) % prime
  res.send({ B: resKPub.toString() }).status(200)
  return
});

module.exports = app;
