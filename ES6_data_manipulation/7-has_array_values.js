export default function hasValuesFromArray(set, array) {
    const setIterator = set.values();

    let i = 0;
    let j = 0;
    let currentMatch = false;
    while (i < array.length) {
        let currentSetValue = setIterator.next().value;
        let currentArrayValue = array[i];
        console.log("OUTER LOOP");
        console.log("i: ", i, "set value: ", currentSetValue, "arr value: ", currentArrayValue);
        while (j < set.size) {
            console.log("INNER LOOP");
            console.log("i: ", i, "set value: ", currentSetValue, "arr value: ", currentArrayValue);
            if (currentArrayValue === currentSetValue) {
                console.log("match");
                currentMatch = true;
                break;
            }
            else {
                console.log("no match");
                currentMatch = false;
                break;
            }
            j++;
        }
        i++;
        j = 0;

    }

    return currentMatch;
}