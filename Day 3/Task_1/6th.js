//6.Return median of two sorted arrays of the same size.

//IFEE
console.log("IFEE FUCTION");
(function(arr1, arr2) {
    const merged = [...arr1, ...arr2];
    merged.sort();
    console.log(merged);
    const mid = merged.length / 2;
    console.log(mid);
    const median = (merged[mid - 1] + merged[mid]) / 2;
    console.log(median);
})([1, 3, 5], [2, 4, 6]);

//ANONYMOUS FUCTION
console.log("ANONYMOUS FUCTION");

const MergeArray = function(arr1, arr2) {
    const merged = [...arr1, ...arr2];
    merged.sort();
    const mid = merged.length / 2;
    const median = (merged[mid - 1] + merged[mid]) / 2;
    return median;
};
var res=MergeArray([1, 3, 5], [2, 4, 6]);
console.log(res);
