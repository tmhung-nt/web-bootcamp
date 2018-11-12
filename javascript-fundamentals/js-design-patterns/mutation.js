// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  let regex;
  
  for (let i = 0; i < arr[1].length; i++){
    regex = new RegExp(arr[1][i], "i");
    if (!regex.test(arr[0])) {
      return false; // just one character in 2nd string is not in 1st string --> false
    }
  }
  return true;
}