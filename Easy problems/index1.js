//find sum of indeces of a target value

// var nums = [2,7,11,15]
// var target = 9;

var twoSum = function (nums, target) {
  nums.sort((a, b) => a - b);
    
  // Initialize pointers
  let left = 0;
  let right = nums.length - 1;

  // Iterate until pointers meet
  while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
          return [left, right];
      } else if (sum < target) {
          left++; // Move left pointer to the right
      } else {
          right--; // Move right pointer to the left
      }
  }

  // If no solution found
  return [];
  // for (var i = 0; i < nums.length; i++) {
  //   // for (var j = i + 1; j < nums.length; j++) {
  //   if (nums[i] + nums[i + 1] === target) {
  //     return [i, i + 1];
  //   }
  //   // }
};

console.log(twoSum([2, 7, 11, 15], 13));
