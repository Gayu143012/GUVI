//4.Return all the prime numbers in an array
const PrimeNum = (arr) =>{
    let check_fact;
    for (let ind = 0; ind < arr.length; ind++) {
        let isPrime = true;
        if (arr[ind] < 2) {
            isPrime = false;
        } 
        else {
            for (check_fact = 2; check_fact <= Math.sqrt(arr[ind]); check_fact++) {
                if (arr[ind] % check_fact == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
           console.log(arr[ind]);
        }
    }
};
PrimeNum([2, 3, 4, 5, 6, 7, 8, 9, 10]);