// Asynchronous behaviour of JavaScript

console.log('first step');
console.log('second step');
console.log('third step');

//this settimeout will be called but won't block the furthur code and it will give the result after the synchronous code ends
//i.e after the fifth step
setTimeout(() => {
    console.log('callback function');
},2000);

console.log('fourth step');
console.log('fifth step');