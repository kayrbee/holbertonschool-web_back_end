export default function cleanSet(set, startString) {
    let result = "";
    let i = 0;

    if (startString.length === 0) {
        return result;
    }

    for (let item of set) {
        if (!(item.startsWith(startString))) {
            continue;
        }
        let startingIndex = startString.length;
        let delim = "-";
        if (i != 0) {
            result += delim;
        }
        result += item.substring(startingIndex, );
        i++;
    }

    return result;
}