function myMap(arr, func) {
    let newArr = []
    for (i = 0 ; i < arr.length ; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}

function myFilter (arr, func) {
    let filteredArr = []
    for (i = 0 ; i < arr.length ; i++) {
        if(func(arr[i]) === true) {
            filteredArr.push(func(arr[i]))
        }
    }
    return filteredArr
}

function myReduce (arr, func, initialValue) {
    let acc = initialValue
    for (i =0; i< arr.length; i++) {
        acc = func(arr[i], acc)
    }
    return acc
}
