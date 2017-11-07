
function prn(val) {
    document.write('<br>' + val);
}

const valueA = Number(prompt('Input A'));
const valueB = Number(prompt('Input B'));
const valueC = Number(prompt('Input C'));

function discr (a, b, c) {
    return (b * b) - 4 * (a * c);
}

function solveQuadr(a, b, c) {
    
     const discrResult = discr(a, b, c);
     let x1, x2,
        result = {
            x1: null,
            x2: null,
            message: ''
        };

    if (discrResult > 0) {
        const sqrt = Math.sqrt(discrResult);
        
        result.x1 = - ((b + discrResult) / (2 * a));
        result.x2 = - ((b - discrResult) / (2 * a));
    } else if (discrResult === 0) {
        result.x1 = - (b / (2 * a));
    } else {
        // in case when discrResult < 0
        result.message = 'діючих коренів немає';
    } 
    return result;
}
 const resultQuadr = solveQuadr(valueA, valueB, valueC);   
 
if (resultQuadr.message) {
    prn(resultQuadr.message);
} else if (resultQuadr.x2) {
     prn('x1: ' + resultQuadr.x1);
     prn('x2: ' + resultQuadr.x2);
} else {
    prn('x1: ' + resultQuadr.x1);
}








