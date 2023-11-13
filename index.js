function myMap(arr, func) {
    let newArr = []
    for (i = 0 ; i < arr.length ; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}