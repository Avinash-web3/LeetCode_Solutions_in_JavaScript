**
 * @param {number} n
 * @return {number}
 */

//  solved using string operations
var subtractProductAndSum = function(n) {
    let Product = 1;
    let sum = 0;
    let str = n.toString();
    for ( let i=0; i < str.length ; i ++){
        Product = Product * parseInt(str[i]);
        sum += parseInt(str[i]);

    }
    return Product - sum ;
    
};

// -------------------------------------------------------------------------------------------------------------------------------------------------- 

// solved using Modulo operator 
var subtractProductAndSum = function(n) {
    let Product = 1;
    let sum = 0;
    while(n !== 0){
        let lastDigit = n % 10;
        Product *= lastDigit;
        sum += lastDigit;
        n = Math.floor(n / 10);
    }
    return Product - sum;
};
