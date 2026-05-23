// 
var candy = 60;
var orange = 300;
var mango="200";
var strawberry = parseInt('400');
var avocado=parseFloat("25.5");

console.log(candy+orange);
console.log(orange+mango);
console.log(orange+strawberry);
console.log(strawberry+avocado);

// toFixed. but it will convert to string.
var number1=0.1;
var number2=0.2;
var total = number1+number2;

console.log(number1+number2);
console.log(total.toFixed(2));
console.log(parseFloat(total.toFixed(2)));

// infinity
var num=50/0;
var numNegative=-50/0;

console.log(num);
console.log(numNegative);

// NaN
var total="WWW"/2;
console.log(total);