function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
    s += numbers[i];
    }
    return s / numbers.length;
    }

function prime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
    }
function factorial(num) {
    if(num === 0 || num === 1)
        return 1;
    else
        return num * factorial(num - 1);
}
    
module.exports = {
    avg,
    prime,
    factorial
  };