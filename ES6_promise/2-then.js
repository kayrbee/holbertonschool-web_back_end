export default function handleResponseFromAPI(promise) {
    return promise
    .then(function() {
        return {
            status: 200,
            body: 'success'
        };
    })
    .catch(function() {
        return new Error();
    })
    .finally(() => {
        console.log("Got a response from the API");
    });
}