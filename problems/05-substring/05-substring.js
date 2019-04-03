/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
let splitMe = "I am a good person";

function substring(someStr, startIndex, endIndex) {
    if(typeof(someStr) == "string"){
        let cutString = someStr.split("");
        let newString = "";
        for(let i = (startIndex-1); i<endIndex; i++){
            newString += cutString[i];
        } 
        return newString;
    }
    else{
        return("Not a string inputed")
    }
}
console.log(`Old string: ${splitMe} 
New String: ${substring(splitMe, 8, 18)}`)