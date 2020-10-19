module.exports = function reverse (n) {
    let number, result = 0;
    if (n < 0) {
        n=n*(-1);
    }
    while(n){
        number = n % 10;               
        result = (result * 10) + number;
        n = n/10|0;                     
    }  
    return result;
}
