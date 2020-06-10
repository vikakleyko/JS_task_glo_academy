"use strict";
let arr = ["23232", "", "12345", "77", "42", "22222", "77777"];

// for case we have digits only in arr

arr.forEach((item) => {
  if ((item[0] && item[0] === "2") || item[0] === "4") {
    console.log(item);
  }
});

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function getPrimerNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

getPrimerNumbers();
