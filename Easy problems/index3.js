//Remove elements which is !== val

var removeElement = function (nums, val) {
    var counter = 0
    for(let i = 0; i < nums.length; i++){
      if(nums[i] === val){
          nums[counter] = nums[i]
          counter++
      }
    }
    return counter
};

console.log(removeElement([3, 2, 2, 3], 2));

// let nums = [2,2,3,3]

// for(let i = 0; i < nums.length;i++){
//     console.log("for loop" + nums[i])
// }

// let i = nums.length//4
// while(i > 0){
//     console.log(nums[i])
// }
// i--;
