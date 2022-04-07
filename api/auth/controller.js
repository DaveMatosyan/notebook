import { signInService } from './service.js';
import {
  getOneByEmailService, createService, updateService,
} from '../user/service.js';
import { sign, verify } from '../../utils/jwt generate.js';
import { mailSender, createJWTContent } from '../../utils/mailer.js';

export async function signIn(req, res, next) {
  try {
    const { password, email } = req.body;
    const user = await getOneByEmailService(email);
    const token = await signInService(user, password);
    return res.send(token);
  } catch (err) {
    if (err === 401) {
      return res.status(401)
        .send(JSON.stringify({ message: 'wrong user' }));
    }
    return next(err);
  }
}

export async function signUp(req, res, next) {
  try {
    const { body } = req;
    const created = await createService(body);
    const token = sign({ _id: created._id });
    // console.log(created._id);
    // console.log(token);
    const htmlToken = createJWTContent(token);
    await mailSender(body.email, htmlToken);
    return res.send('confirm you email');
  } catch (err) {
    return next(err);
  }
}

export async function confirm(req, res, next) {
  try {
    const { token } = req.body;
    console.log(token);
    const decodedUser = verify(token);
    console.log(decodedUser._id);
    const updated = await updateService(decodedUser._id, { isVerified: true });
    return res.send(updated);
  } catch (err) {
    return next(err);
  }
}

export async function reEmail(req, res) {
  try {
    const { email } = req.body;
    const user = getOneByEmailService(email);
    if (!user) {
      return res.status(404).send(JSON.stringify({ message: 'email not found' }));
    }
    const token = sign({ _id: user._id }, '15m');
    const htmlToken = createJWTContent(token);
    await mailSender(email, htmlToken);
    return res.send('email sended');
  } catch (err) {
    return res.status(404).send(JSON.stringify({ message: 'token is not valid' }));
  }
}

export async function forgetPassword(req, res, next) {
  try {
    const { email } = req.body;
    const user = getOneByEmailService(email);
    if (!user) {
      return res.status(404).send(JSON.stringify({ message: 'email not found' }));
    }
    const token = sign({ _id: user._id }, '15m');
    const htmlToken = createJWTContent(token);
    await mailSender(email, htmlToken);
    return res.send(JSON.stringify(user));
  } catch (err) {
    return next(err);
  }
}

export async function recoverPassword(req, res, next) {
  try {
    console.log(111);
    const { token, password } = req.body;

    const decodedToken = verify(token);
    console.log(decodedToken._id);

    const updated = await updateService(decodedToken._id, { password });
    console.log(updated);

    return res.send(JSON.stringify(updated));
  } catch (err) {
    return next(err);
  }
}
