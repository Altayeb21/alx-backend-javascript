import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let log = '';
  uploadPhoto().then((response) => {
    log += `${response.body} `;
    return createUser();
  }).then((response) => {
    log += `${response.firstName} ${response.lastName}`;
    console.log(log);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
