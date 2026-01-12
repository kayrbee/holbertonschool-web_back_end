import { uploadPhoto } from "./utils.js";
import { createUser } from "./utils.js";

export default function handleProfileSignup() {
    return uploadPhoto()
    .then(function(uploadPhotoResponse) {
        const responseBody = uploadPhotoResponse.body;
        return createUser()
        .then(function(createUserResponse) {
            console.log(`${responseBody} ${createUserResponse.firstName} ${createUserResponse.lastName}`);
        })
        .catch(function() {
            return new Error();
        })
    })
    .catch(function() {
        return new Error();
    });
}