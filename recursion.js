/** product: calculate the product of an array of numbers. */

function product(nums) {
   // Base case: if the array is empty, return 1 (the multiplicative identity)
   if (nums.length === 0) {
    return 1;
} else {
    // Recursive case: multiply the first element with the product of the rest of the array
    return nums[0] * product(nums.slice(1));
}

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base case: if the array has only one word, return that word
  if (words.length === 1) {
      return words[0];
  } else {
      // Recursive case: compare the lengths of the first word with the longest word of the rest of the array
      const firstWord = words[0];
      const longestRest = longest(words.slice(1));
      return firstWord.length >= longestRest.length ? firstWord : longestRest;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // Base case: if the string is empty or has only one character, return the string
  if (str.length <= 1) {
      return str;
  } else {
      // Recursive case: take every other letter starting from the second letter
      return str[0] + everyOther(str.slice(2));
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: if the string has 0 or 1 characters, it's a palindrome
  if (str.length <= 1) {
      return true;
  } else {
      // Check if the first and last characters are the same
      if (str[0] === str[str.length - 1]) {
          // If they are, recursively check the rest of the string
          return isPalindrome(str.slice(1, -1));
      } else {
          return false;
      }
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  // Base case: if the current index is greater than the array length, return -1
  if (index >= arr.length) {
      return -1;
  } else {
      // Check if the current element equals the value
      if (arr[index] === val) {
          return index;
      } else {
          // Recursively search in the rest of the array
          return findIndex(arr, val, index + 1);
      }
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: if the string has 0 or 1 characters, it's already reversed
  if (str.length <= 1) {
      return str;
  } else {
      // Concatenate the last character with the reversed string of the rest
      return str[str.length - 1] + revString(str.slice(0, -1));
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
      if (typeof obj[key] === "string") {
          strings.push(obj[key]);
      } else if (typeof obj[key] === "object") {
          // If the value is an object, recursively gather strings from it
          strings = strings.concat(gatherStrings(obj[key]));
      }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  // Base case: if the start index exceeds the end index, the value is not present
  if (start > end) {
      return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((start + end) / 2);

  // Check if the middle element equals the value
  if (arr[mid] === val) {
      return mid;
  } else if (arr[mid] < val) {
      // If the middle element is less than the value, search the right half of the array
      return binarySearch(arr, val, mid + 1, end);
  } else {
      // Otherwise, search the left half of the array
      return binarySearch(arr, val, start, mid - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
