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

let arrOfArr = [[10,10,11], [20,10]];

function makeWork(arrOfArr, func) {
  let max;
  let sum;
  max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] < min) {
     min = arr[i];
   } 
   if (arr[i] > max) {
     max = arr[i];
   }
 }
 return max - min;
}

makeWork(arrOfArr, worker2);
