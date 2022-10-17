const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) { 
    throw new Error("'arr' parameter must be an instance of the Array!")};
    let resultArr = [];
 
      for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i]);
        if (arr[i] === '--discard-next') {
          resultArr.pop();
          if (i < arr.length - 1) {
            i += 2;
          }
        }
        if (arr[i] === '--discard-prev') {
          resultArr.pop();
          if (i > 0) {
            resultArr.pop();
          }
        }
        if (arr[i] === '--double-next') {
          resultArr.pop();
          resultArr.push(arr[i + 1])
        }
        if (arr[i] === '--double-prev') {
          resultArr.pop();
          resultArr.push(resultArr[resultArr.length - 1])
        }
      }

 
      return resultArr.filter(elem => 
      elem !== undefined);
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  transform
};
