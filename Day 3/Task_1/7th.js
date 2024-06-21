//7.Remove duplicates from an array

//IFEE
console.log("IFEE FUCTION");
(function(arr){
    let unique = [];
    for (i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) === -1) {
          unique.push(arr[i]);
      }
    }
    console.log(unique);
})([1,3,5,1,2,65,30,30,12,12,12,10,9]);


//ANONYMOUS FUCTION
console.log("ANONYMOUS FUCTION");
let arr = ["apple", "mango","apple", "orange", "mango", "mango",30,12,12,40,30];
const removeDuplicates = function (arr) {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) === -1) {
          unique.push(arr[i]);
      }
    }
    return unique;
    };
console.log(removeDuplicates(arr));