const nodemailer = require('nodemailer');
const Joi = require('joi');

const config = require('../config');

const { email, pass } = config;

exports.sendEmail = (req, res, next) => {
  const { text, name, emailer } = req.body;
  const value = { text, name, emailer };
  const schema = {
    emailer: Joi.string().min(1).max(100).required()
      .email(),
    text: Joi.string().min(1).max(1000).required(),
    name: Joi.string().min(1).max(100).required(),
  };
  const result = Joi.validate(value, schema);
  if (result.error) {
    return res.send(result.error.details[0].message);
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: email,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const HelperOptions = {
    from: `"${name}" <${email}`,
    to: email,
    subject: 'Portfolio-site',
    text: `${emailer}  ${text}`,
  };
  transporter.sendMail(HelperOptions)
    .catch(err => next(err));
  return res.send('sent');
};

