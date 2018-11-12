function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  if (arr.length == 0){
    return 0;
  }
  
  // copy input array to tmpArr
  let tmpArr = [...arr];
  tmpArr.sort(sortnumAsc);

  // find where to insert
  let returnIdx = getIndexOfInsertednum(tmpArr, num);
  
  // insert num to array after getting where to insert
  insertToArray(tmpArr, returnIdx, num);

  // get return value using indexOf()
  returnIdx = tmpArr.indexOf(num) >= 0 ? tmpArr.indexOf(num) : 0;
  console.log(`Array \"${tmpArr}\" - num: ${num} - index: ${returnIdx}`);
  return returnIdx;
}

// input array is sorted already
function getIndexOfInsertednum(array, num){
  //return Number.MAX_SAFE_INTEGER if the last element in array <= num
  let returnIdx = array[array.length - 1] <= num ? Number.MAX_SAFE_INTEGER : 0;

  //continue to compare num against remaining array's element
  if (returnIdx != Number.MAX_SAFE_INTEGER){
    for (let i = array.length - 2; i >= 0; i--){
      console.log(`--- num: ${num} - array[${i}]: ${array[i]}`);
      if ( array[i] <= num){
        return i;
      }
    }
  }

  return returnIdx;  // return the max integer number to indicate that input number is greater than array's elements
}

function insertToArray(array, index, num){
  return index == Number.MAX_SAFE_INTEGER ?  array.push(num) : index > -1 ? array.splice(index, 1, array[index], num ) : 0;
}

// use callback to sort in accessding order
function sortnumAsc(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}

function sortnumDesc(a,b){
  return a > b ? -1 : b > a ? 1 : 0;
}
// getIndexToIns([3, 10, 5], 3) ;
// getIndexToIns([2, 20, 10], 19) ;
// getIndexToIns([2, 5, 10], 15) ;
getIndexToIns([], 1);

getIndexToIns([40, 60], 50) ;