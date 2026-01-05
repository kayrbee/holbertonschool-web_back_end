export default function appendToEachArrayValue(array, appendString) {
    let index = 0;
    for (const idx of array) {
    array[index] = appendString + idx;
    index += 1;
  }

  return array;
}