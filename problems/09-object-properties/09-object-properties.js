/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
class tangibleObject{
    constructor(name, size, other) {
        this.name = name;
        this.size = size;
        this.other = other;
    }
}
function objectProperties(someObj) {
    console.log(someObj);   
}
let objA = new tangibleObject("First Object", "Small", "Un-noteworthy");

objectProperties(objA);