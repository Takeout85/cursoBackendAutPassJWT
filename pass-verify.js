const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$R.lQqDJrwv3ivMnwI3sbR.MW6oVnG348BPnvH/moU1N6Jx9q/k/r2';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
