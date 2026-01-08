export default function cleanSet(set, startString) {
    let result = "";
    let i = 0;
    // console.log(set);

    if (startString.length === 0) {
        return result;
    }

    for (let item of set) {
        // console.log(typeof item);
        // console.log(item);
        if (!(item.startsWith(startString))) {
            // console.log(item, " does not start with ", startString)
            continue;
        }
        // console.log(item, "starts with ", startString);
        let startingIndex = startString.length;
        let delim = "-";
        if (i != 0) {
            result += delim;
        }
        // console.log(startingIndex);
        result += item.substring(startingIndex, );
        // console.log(result);
        i++;
    }

    return result;
}