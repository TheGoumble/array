//write a JavaScript function to get the first element of the first subarray
function findFirst (arr){return arr[0][0]}

//write a JavaScript fucntiopn to get the last element 
function lastElm (arr){
    // find the last main row
    let mainL = arr.length - 1
    // find the lengh of the last row
    let subL = arr[mainL].length -1
    return arr[mainL][subL]}