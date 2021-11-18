function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every((item, inx, arr) => item === arr2[inx] && arr.length === arr2.length);
 

  return result;
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(item => item > 0).filter(item => item % 3 == 0).map(item => item * 10)

  return resultArr; 
}
