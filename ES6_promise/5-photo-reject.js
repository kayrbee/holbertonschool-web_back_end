export default function uploadPhoto(filename) {
    const message = `${filename} cannot be processed`;
    // return Promise.reject(new Error(message)); 
    return Promise.reject(new Error(message)); 
}