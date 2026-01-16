import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, filename) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(filename);

  return Promise.all(
    [userPromise, photoPromise].map(p =>
      p
        .then(value => ({ status: 'fulfilled', value }))
        .catch(error => ({ status: 'rejected', value: `Error: ${error.message}` }))
    )
  );
}