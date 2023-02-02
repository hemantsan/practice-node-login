const express = require('express');
const Developer = require('./schemas/DeveloperSchema');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('./token');

router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get('/add-developer', (req, res) => {
  const token = generateAccessToken({devApp: 'dev-app'});
  res.render('pages/add-dev', { token: token });
});

router.get('/list-developers', async (req, res) => {
  await Developer.find({})
    .skip(0)
    .limit(10)
    .then((response) => {
      res.render('pages/list-dev', { response: response, status: 'success' });
      return;
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/contact-us', (req, res) => {
  res.render('pages/contact-us');
});

// Post Calls
router.post('/add-developer', async (req, res) => {
  let dev = new Developer({
    name: req.body.name,
    location: req.body.location,
    skill: req.body.skill,
    experience: req.body.experience,
  });

  const response = await dev.save();
  res.render('pages/add-dev', { status: 'success', response: response });
});

module.exports = router;
