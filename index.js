function myMap(arr, func) {
    let newArr = []
    for (i = 0 ; i < arr.length ; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}

let array = [1, 6, 26, 29]
console.log(myMap(array, x => x * x))

function myFilter (arr, func) {
    let filteredArr = []
    for (i = 0 ; i < arr.length ; i++) {
        if(func(arr[i]) === true) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
let array1 = [1, 6, 26, 29.5]
console.log(myFilter(array1, x => x % 2 === 0))

function myReduce (arr, func, initialValue) {
    let acc = initialValue
    for (i =0; i< arr.length; i++) {
        acc = func(arr[i], acc)
    }
    return acc
}

let array2 = [1, 6, 23, 39]
console.log(myReduce(array2, function (currentValue, accumulator) {
    return currentValue + accumulator;
}, 0));