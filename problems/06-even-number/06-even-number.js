/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
let testValue = 9;
function isEven(someNum) {
    let x = someNum/2;
    if(Number.isInteger(someNum/2)){
        return true;
    }
    else{
        return false;
    }
}

console.log(`${testValue} is even? 
Survay Says: ${isEven(testValue)}`)