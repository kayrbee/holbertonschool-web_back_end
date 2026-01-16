import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, filename) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ];

  return Promise.all(
    promises.map(p =>
      p.then(
        value => ({ status: 'fulfilled', value: value }),
        reason => ({ status: 'rejected', value: reason.message })
      )
    )
  );
}