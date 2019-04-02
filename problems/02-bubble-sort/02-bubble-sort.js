/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

let ray = [2,1,6,300,0.5];

console.log(`The original array was: ${ray}`);

function bubbleSort(numArray) {

   
    for(let p = 0; p< numArray.length; p++){
        for(let x = 0; x < numArray.length-1; x++){
            if(numArray[x] > numArray[x+1]){
                let t = numArray[x+1];
                numArray[x+1]= numArray[x];
                numArray[x] = t;
            }
        }
    }
    return numArray;
}

console.log(`New Array is: ${bubbleSort(ray)}`);