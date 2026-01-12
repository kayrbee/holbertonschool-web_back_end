// The alternative ways to handle multiple promises are:
// Async await
// Promise.all (if the promises are independent)
// Chained promises - return an object to the next then()

// Async await
export default async function handleProfileSignup() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    console.log(
      `${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`
    );
  } catch {
    console.log("Signup system offline");
  }
}

// Promise.all
export default function handleProfileSignup() {
    // Calls both promises simultaneously
  return Promise.all([uploadPhoto(), createUser()])
    .then(function ([photoResponse, userResponse]) {
      console.log(
        `${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`
      );
    })
    .catch(function () {
      console.log("Signup system offline");
    });
}

// Chained promises
import { uploadPhoto } from "./utils.js";
import { createUser } from "./utils.js";

export default function handleProfileSignup() {
  return uploadPhoto()
    .then(function (uploadPhotoResponse) {
      return createUser().then(function (createUserResponse) {
        // Returns a data object to the calling then()
        return {
          photo: uploadPhotoResponse.body,
          user: createUserResponse,
        };
      });
    })
    .then(function ({ photo, user }) {
      console.log(`${photo} ${user.firstName} ${user.lastName}`);
    })
    .catch(function () {
      console.log("Signup system offline");
    });
}
