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
    let newArr = [...arr];
    let resultArr = [];
  /*if ((arr[0] === '--discard-prev') || (arr[0] === '--double-prev')) {
    transformArr.splice(0, 1)};
  if ((arr[arr.length - 1] === '--disard-next') || (arr[arr.length - 1] === '--double-next')) {
    transformArr.splice((arr.length - 1), 1);
  }*/
      newArr.forEach ((el) => {
      if (el === '--disard-next') {
        resultArr.push(undefined)
      }
      if (el === '--discard-prev') {
        resultArr.pop();
      }
      if (el === '--double-next') {
        resultArr.push(newArr[el + 1])
      }
      if (el === '--double-prev') {
        resultArr.push(resultArr[resultArr.length - 1])
      }
      else { resultArr.push(el)}
      })
 
    return resultArr.filter(elem => 
      elem !== undefined);
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  transform
};
