export default function updateUniqueItems(groceriesList) {
    for (let [key, value] of groceriesList) {
        if (value === 1) {
            groceriesList.set(key, 100);
        }
    }
}