'use strict'

function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
 avg = (sum / arr.length);
 avg = avg.toFixed(2);
 avg = Number(avg);

  return { min: min, max: max, avg: avg };
}

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let min = 0;
  let result;

  for (let i = 0; i < arrOfArr.length; i++) {
    result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    } else if (result < min) {
      min = result
    }
  }
  return max;
}

function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] < min) {
     min = arr[i];
   } else if (arr[i] > max) {
     max = arr[i];
   }
 }
 return max - min;
}
