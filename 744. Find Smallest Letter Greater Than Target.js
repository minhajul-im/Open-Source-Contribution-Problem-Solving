// 744. Find Smallest Letter Greater Than Target

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function (letters, target) {
  let left = 0,
    right = letters.length - 1;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);

    if (letters[mid] > target && letters[mid - 1] <= target) {
      return letters[mid];
    } else if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return letters[0];
};

let letters = ["x", "x", "y", "y"],
  target = "z";

console.log(nextGreatestLetter(letters, target));
