//5.Return all the palindromes in an array
const returnPalindromes = (arr) =>{
    const isPalindrome = function (str) {
        const len = str.length;
        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    };

    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }

    console.log(palindromes);
};
returnPalindromes(["madam", "hello", "world", "level", "wow", "mom"]);