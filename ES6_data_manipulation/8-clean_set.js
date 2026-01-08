export default function cleanSet(set, startString) {
    let result = "";
    // Only run fn if set & startString are provided
    if (startString === undefined || set === undefined) {
        return result;
    }

    let i = 0;

    if (startString.length === 0) {
        return result;
    }
    
    for (let item of set) {
        // Don't include items which don't start with startString
        if (!(item.startsWith(startString))) {
            continue;
        }
        let startingIndex = startString.length;
        let delim = "-";
        // Print a delimiter between items
        if (i != 0) {
            result += delim;
        }
        result += item.substring(startingIndex, );
        i++;
    }
        
    return result; 
}