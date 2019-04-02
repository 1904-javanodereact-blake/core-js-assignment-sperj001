/* . Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

let sequenceNumber = 5;

function fib(n) {
    switch(true){
        case n==0 :
            return  0;
        case n==1 :
            return 1;
        case n==2 :
            return 1;
        case n>=3:
            let ray = [];
            ray[0] = 0;
            ray[1] = 1;
            ray[2] = 1;
            let loco = 2;
            for(i = 3; i <= n; i++){
                ray[i] = ray[i-1] + ray[i-2];
                loco++;
            }
            return ray[loco];
    }
}

console.log(`The ${sequenceNumber} sequence number in the fibonacci sequence is: ${fib(sequenceNumber)}`);