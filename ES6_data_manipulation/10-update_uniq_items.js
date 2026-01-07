export default function updateUniqueItems(groceriesList) {
    const iterator = groceriesList.values();
    for (let [key, value] of groceriesList) {
        // console.log("hello from fn", item);
        let currentValue = iterator.next().value;
        // console.log(currentValue);
        if (currentValue === 1) {
            // console.log("match");
            console.log(key, value);
            groceriesList.set(key, 100);
            console.log(key, value);
        }
    }
}