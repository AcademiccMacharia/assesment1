//using array destructuring to create an array by taking the first and last elements from a given array of integers

let array = [1, 2, 3, 4, 5, 6, 8, 9, 90];

const checkArray = () => {
    if (array.length >= 1 ) {
    let first = array[0];
    let last = array[array.length - 1];
    let newArray = [first, last]; //using the two values obtained above to create an array
    console.log(newArray)
    } else {
        console.log("Array length must be larger than or equal to 1");
    }
}

checkArray()



