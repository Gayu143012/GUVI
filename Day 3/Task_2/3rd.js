//3.Sum of all numbers in an array
const sumOfNumbers = (arr) =>{
    let sum = 0;
    for (var ind = 0; ind < arr.length; ind++) {
        sum = sum + arr[ind];
    }
    return sum;
};
let res=sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res);