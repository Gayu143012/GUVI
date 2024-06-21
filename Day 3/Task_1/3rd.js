//3.Sum of all numbers in an array
//IFEE
console.log("IFEE FUCTION");
(function (arr) {
    let sum = 0;
    for (var ind = 0; ind < arr.length; ind++) {
        sum = sum + arr[ind];
    }
    console.log(sum);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//ANONYMOUS FUCTION
console.log("ANONYMOUS FUCTION");

const sumOfNumbers = function (arr) {
    let sum = 0;
    for (var ind = 0; ind < arr.length; ind++) {
        sum = sum + arr[ind];
    }
    return sum;
};
console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));