const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const verifyJwt = (token) => {
  return new Promise((resolve, reject) => {

    const client = jwksClient({
      jwksUri: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_i2BfhDyVj/.well-known/jwks.json'
    });
  
    const getKey = (header, callback) => {
      client.getSigningKey(header.kid, (err, key) => {
        if (err) return reject('JWKS Error: ' + err);
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      });
    }

    jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
      if (err) return reject('JWT Error: ' + err);
      resolve(decoded);
    });
 });
}

module.exports = { verifyJwt };

