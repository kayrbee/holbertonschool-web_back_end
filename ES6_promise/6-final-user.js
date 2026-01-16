import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(firstName, lastName, filename) {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(filename);

    return Promise.all([userPromise, photoPromise]
    .map(p => p.catch(e => e)))
    .then(function(values) {
        let result = [];
        for (let v of values) {
            let r = {
                status: 'fulfilled',
                value: v
            };
            if (String(v).includes("Error")) {
                r = {
                    status: 'rejected',
                    value: v.message
                }
            }
            result.push(r);
        }
        return result;
    })
}