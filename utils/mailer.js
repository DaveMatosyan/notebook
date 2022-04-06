import nodemailer from 'nodemailer';

// eslint-disable-next-line import/prefer-default-export
export async function mailSender(email, content) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'readboolyan', // generated ethereal user
      pass: 'readbool888', // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject: 'Hello', // Subject line
    // text: content, // plain text body
    html: content, // html body
  });
  return info;
}

export function createPasswordContent(password) {
  return `<div>
    Password : ${password}
  </div>`;
}

export function createJWTContent(jwt) {
  return `<div>
    Token: ${jwt}
  </div>`;
}
