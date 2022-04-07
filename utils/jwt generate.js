import jwt from 'jsonwebtoken';

// eslint-disable-next-line import/prefer-default-export
export function sign(obj) {
  return jwt.sign(obj, 'secret1', { expiresIn: '1h' });
}
export function verify(token) {
  const decoded = jwt.verify(token, 'secret1');
  return decoded;
}

export async function authentication(req, res, next) {
  try {
    let header = req.headers.authorization;
    if (!header) {
      return res.status(401).send();
    }
    // eslint-disable-next-line prefer-destructuring
    header = header.split('Bearer ')[1];
    const decoded = jwt.verify(header, 'secret1');
    // console.log(decoded);

    req.user = {
      _id: decoded.id,
      role: decoded.role,
    };
    // console.log(req.user);

    return next();
  } catch (err) {
    return res.status(401).send();
  }
}
