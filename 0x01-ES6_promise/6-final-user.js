import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const lst = [{}, {}];
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return promise1.then((response) => {
    lst[0].status = promise1;
    lst[0].value = response;
    return promise2;
  }).catch((error) => {
    lst[1].status = promise2;
    lst[1].value = error;
  }).then(() => lst);
}
