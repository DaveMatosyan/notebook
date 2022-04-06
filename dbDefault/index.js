import { createService, getOneByRoleService } from '../api/user/service.js';

async function addSuperAdmin() {
  const superAdmin = await getOneByRoleService('SUPERADMIN');
  if (superAdmin) {
    return;
  }
  const admin = {
    email: 'goshhayrapetyan@gmail.com',
    fname: 'Admin',
    lname: 'Adminyan',
    age: 92,
    password: 'Admin123',
    role: 'SUPERADMIN',
    isVerified: true,
  };
  await createService(admin);
}

// eslint-disable-next-line import/prefer-default-export
export async function setDBData() {
  await addSuperAdmin();
}
