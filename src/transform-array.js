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
    let transformArr = [...arr];
  if ((arr[0] === '--discard-prev') || (arr[0] === '--double-prev')) {
    transformArr.splice(0, 1)};
  if ((arr[arr.length - 1] === '--disard-next') || (arr[arr.length - 1] === '--double-next')) {
    transformArr.splice((arr.length - 1), 1);
  }
    arr.forEach ((el) => {
      if (el === '--disard-next') {
        transformArr.splice(el, 2)
      }
      if (el === '--discard-prev') {
        transformArr.splice((el - 1), 2)
      }
      if (el === '--double-next') {
        transformArr.splice(el, 1, arr[el + 1])
      }
      if (el === '--double-prev') {
        transformArr.splice(el, 1, arr[el - 1])
      }
      if (el === [undefined]) {
        transformArr.splice(el, 1)
      }
    })
 
    return transformArr;
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  transform
};
