import bcrypt from 'bcrypt';

// eslint-disable-next-line import/prefer-default-export
export async function passwordVerify(password, heshPassword) {
  const verified = await bcrypt.compare(password, heshPassword);
  return verified;
}
