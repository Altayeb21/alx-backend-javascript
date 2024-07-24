import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const lst = [{}, {}];
  return signUpUser(firstName, lastName).then((response) => {
    lst[0].status = signUpUser;
    lst[0].value = response;
    return uploadPhoto(fileName);
  }).catch((error) => {
    lst[1].status = uploadPhoto;
    lst[1].value = error;
  }).then(() => lst);
}
