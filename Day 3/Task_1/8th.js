//8.Rotate an array by k times
//IFEE
console.log("IFEE FUCTION");
(function(arr, k) {
    const n = arr.length;
    k = k % n;
    // Rotate the array 
    for (let i = 0; i < k; i++) {
        const temp = arr.pop();  
        arr.unshift(temp);  // Add it to the beginning
    }

    console.log(arr);
})([1, 2, 3, 4, 5], 2);

//ANONYMOUS FUCTION
console.log("ANONYMOUS FUCTION");

const Rotate=function(arr, k) {
    const n = arr.length;
    k = k % n; 
    for (let i = 0; i < k; i++) {
        const temp = arr.pop();  
        arr.unshift(temp);  
    }

    return arr;
};
let res=Rotate([1, 2, 3, 4, 5], 2)
console.log(res);