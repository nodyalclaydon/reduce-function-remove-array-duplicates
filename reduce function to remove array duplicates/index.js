function removeDuplicateValues(arr) {
    return (
            arr.reduce((unique, item) => {
            return unique.includes(item) ? unique : [...unique, item]
        }, [])
    )
}

const arrOne = ["one", "two", "one", "three", "three", "two"]
const arrTwo = [2, 4, 7, 5, 4, 5, 6, 3, 2, 9, 10]

console.log(removeDuplicateValues(arrOne))
console.log(removeDuplicateValues(arrTwo))