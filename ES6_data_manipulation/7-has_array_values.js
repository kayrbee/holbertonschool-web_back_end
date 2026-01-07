export default function hasValuesFromArray(set, array) {
    const setIterator = set.values();

    let i = 0;
    let j = 0;
    let currentMatch = false;
    while (i < set.size) {
        let currentSetValue = setIterator.next().value;
        console.log("s: ", currentSetValue);
        while (j < array.length) {
            if (array[j] === currentSetValue) {
                console.log("j: ", j, "value:", array[j]);
                currentMatch = true;
            }
            j++;
        }
        i++;
        j = 0;

    }

    return currentMatch;
}