export default function uploadPhoto(filename) {
  /* eslint-disable no-unused-vars */
  const promise = new Promise((resolve, reject) => {
    reject(Error(`${filename} cannot be processed`));
  });
  /* eslint-enable no-unused-vars */
  return promise;
}
