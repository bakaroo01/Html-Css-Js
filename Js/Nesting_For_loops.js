// Nesting For Loops

function multiplyAll(arr){
    let product = 1;

    for (let index = 0; index < arr.length; index++){
        for (let innerIndex = 0; innerIndex < arr[index].length; innerIndex++){
            product *= arr[index][innerIndex];
        }
    }
    return product;


}

console.log(multiplyAll([[1,2], [3,4], [5,6,7] ]));