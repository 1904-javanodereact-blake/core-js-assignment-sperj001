/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
let change = `DISNEY`;

console.log(`The original string was: ${change}`);

function reverseStr(someStr) {
    let rayOriginal = someStr.split("");
    let reversed = "";
    for(let i = 0; i<rayOriginal.length; i++){
        reversed= reversed + rayOriginal[rayOriginal.length-1-i];
    }
    return reversed;
}

console.log(`The new string is ${reverseStr(change)}`)