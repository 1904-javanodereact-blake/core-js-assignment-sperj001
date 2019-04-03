/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
let myObj = {
    name: "Tangaible",
    size: 3,
    other: "not noteworthy"
}
function objectProperties(someObj) {
     for(let objectField in myObj){
         console.log(`Proptery: ${objectField} 
         Property Value: ${myObj[objectField]}`)
     }
}

objectProperties(myObj);