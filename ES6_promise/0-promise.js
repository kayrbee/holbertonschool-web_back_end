export default function getResponseFromAPI() {
    let promise = new Promise(function(resolve, reject) {
        // console.log("Hello from my promise");
        let hello = 1;
        if (hello == 1) {
            resolve("Success!");
        }
        else {
            reject(Error("Oh no"));
        }
    });
    return promise;
}