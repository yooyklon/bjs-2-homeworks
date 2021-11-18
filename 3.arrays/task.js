function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every((item, inx, arr) => item === arr2[inx] && arr.length === arr2.length);
 

  return result;
}

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4];
let x = compareArrays(arr1, arr2);
console.log(x);

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(item => item > 0).filter(item => item % 3 == 0).map(item => item * 10)

  return resultArr; 
}
