/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
let spliceMe = ["1", "2", "3", "4", "5"];
function spliceElement(someArr, index) {
    let oldArray = someArr.splice(index-1, 1); 
    return someArr;
        //splice (start index, amount to remove, to add)
}
console.log(spliceElement(spliceMe, 5));
