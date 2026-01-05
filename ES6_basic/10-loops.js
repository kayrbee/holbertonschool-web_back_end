export default function appendToEachArrayValue(array, appendString) {
let newArray = [];
  for (let idx of array) {
    newArray[idx] = appendString + idx;
  }

  return newArray;
}