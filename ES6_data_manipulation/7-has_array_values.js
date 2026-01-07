export default function hasValuesFromArray(set, array) {
    let arrayToSet = new Set(array);

    let difference = (arrayToSet.difference(set));

    if (difference.size === 0) {
        return true;
    }

    return false;
    }
