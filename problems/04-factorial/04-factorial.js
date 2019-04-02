/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
let factMe = 13;

function factorial(sumNum) {
    let sendBack = 1;
    if(sendBack > 1){
    }
    for(let x = 0; x <sumNum; x++){
        if(sumNum-x != 0){
            sendBack *= (sumNum-x);
        }
    }
    return sendBack;
}
console.log(`The factorial of ${factMe} is: ${factorial(factMe)}`);
