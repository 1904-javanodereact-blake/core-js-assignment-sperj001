/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
let testMe = "drwho";

function isPalindrome(someStr) {
    let splited = testMe.split("");
    let reversed = "";
    for(let i = 0; i<splited.length; i++){
        reversed= reversed + splited[splited.length-1-i];
    }
    if(someStr == reversed){
        return true;
    }
    else{
        return false;
    }
}

console.log(`The string ${testMe} is a Palindrome?
Survey Says: ${isPalindrome(testMe)}`)