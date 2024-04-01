//find duplicates from a sorted array
var removeDuplicates = function (nums) {
  let i = nums.length;

  while (0 < nums.length) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
    i++;
  }
  //
  return nums.length;
};
console.log(removeDuplicates([1, 1, 2]));
// removeDuplicates([1, 1, 2, 2, 2]);
