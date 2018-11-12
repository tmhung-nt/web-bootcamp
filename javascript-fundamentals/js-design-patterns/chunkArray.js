function chunkArrayInGroups(arr, size) {
    // Break it up.
    let returnArr = [];
    let numberOfLoop = Math.trunc(arr.length / size)
    for (let i = 0; i < numberOfLoop; i++){
        let tmpArr = arr.splice(0, size);
        returnArr.push(tmpArr);
    }
    arr.length != 0 ? returnArr.push(arr) : false;
    console.log(returnArr);
    return returnArr;
  }
  
//   chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
//   chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);