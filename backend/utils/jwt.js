const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME || '1d',
  });
  return token;
};

const isTokenValid = (token) =>
  jwt.verify(token, process.env.JWT_SECRET);

const attachCookies = async ({ res, user }) => {
  const token = createJWT({ payload: user });
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
};

module.exports = {
  createJWT,
  isTokenValid,
  attachCookies,
};
