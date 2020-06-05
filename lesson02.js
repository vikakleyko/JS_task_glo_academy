var num = 266219;

var numList = num.toString().split('');
var numResult = 1;

for (let i=0; i < numList.length; i++) {
    numResult *= numList[i];
}
console.log('multiplication result: ' + numResult);

var newNum = num**3;

console.log('num in 3 degree: ' + newNum);  // exponentiation operator 

console.log('first two digits of newNum: ' + newNum.toString().substring(0, 2));