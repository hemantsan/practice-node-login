const jwt = require('jsonwebtoken');
const jwtSecret = 'jwt-secret';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, jwtSecret, (err, data) => {
    if (err) {
      return res.sendStatus(403).send({ message: 'Token Not Valid!!' });
    }

    req.data = data;
    next();
  });
}

function generateAccessToken(param) {
  return jwt.sign(param, jwtSecret, { expiresIn: '18000s' });
}

module.exports = {generateAccessToken, authenticateToken}