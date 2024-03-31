//find sum of indeces of a target value

// var nums = [2,7,11,15]
// var target = 9;

var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    // for (var j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[i + 1] === target) {
      return [i, i + 1];
    }
    // }
  }
};
console.log(twoSum([2, 4, 11, 15], 15));
