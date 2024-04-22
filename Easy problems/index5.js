//Plus one

//Basic approach or Brute force approach
// ========================================

// input : digits = [1,2,3]
// output : [1,2,4]
// because 123 + 1 = 124
// ------------------------
// input : digits = [4,3,2,1]
// output : [4,3,2,2]
// because 4321 + 1 = 4322

// var digits = [1, 2, 3];
var digits = [9]
var arr = [];

for (let i = 0; i < digits.length; i++) {
  if (i == digits.length - 1) {
    digits[i] = digits[i] + 1;
    arr.push(digits[i]);
  }else{
    arr.push(digits[i]);
  }

}

console.log(arr)
