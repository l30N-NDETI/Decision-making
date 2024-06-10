
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(0));  
console.log(fibonacci(1));  
console.log(fibonacci(5));  
console.log(fibonacci(10)); 

//Power Function: Write a recursive function to calculate the result of raising a number to a given power.

function power(base, exponent) {
    
    if (exponent === 0) {
        return 1;
    }
    
    else if (exponent % 2 === 0) {
        let halfPower = power(base, Math.floor(exponent / 2));
        return halfPower * halfPower;
    }
    
    else {
        return base * power(base, exponent - 1);
    }
}


console.log(power(2, 0));  
console.log(power(2, 3));  
console.log(power(5, 4));  
console.log(power(7, 2));
console.log(power(2, 10)); 
