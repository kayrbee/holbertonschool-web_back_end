export default function getFullResponseFromAPI(success) {
    let promise = new Promise(function(resolve, reject) {
        if (success == true) {
            let result = {
                status: 200,
                body: `Success`
            }
            resolve(result);
        } else {
            reject(Error("The fake API is not working currently"));
        }
    })
    return promise;
}