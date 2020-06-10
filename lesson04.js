"use strict";
let arr = ['23232', '', '12345', '77', '42', '22222', '77777'];

// for case if we have numbers only in arr

arr.forEach( item => {
    if (item[0] && item[0] === '2' || item[0] === '4') {
        console.log(item);
    }
});