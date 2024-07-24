export default function signUpUser(firstName, lastName) {
  const promise = new Promise((resolve) => {
    const obj = { firstName, lastName };
    resolve(obj);
  });
  return promise;
}
