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
  let from = 0;
  if(!Array.isArray(arr)) {
    return `'arr' parameter must be an instance of the Array!`}
    arr.forEach((elem) => {
      let k = arr.indexOf('--disard-next', from);
      if (k >= 0) {
        arr.splice(k, 2)
        from = k;
      }
      from = 0;
       
      let l = arr.indexOf('--discard-prev', from);
      if (l >= 0) {
        arr.splice(l - 1, 2)
        from = l;
      }
      from = 0;

      let n = arr.indexOf('--double-next', from);
      if (n >= 0) {
        arr.splice(n, 1, arr[n+1])
        from = n;
      }
      from = 0;
      
      let m = arr.indexOf('--double-prev', from);
      if (m >= 0) {
        arr.splice(m, 1, arr[m-1])
        from = m;
      }
      from = 0;
    })
    return arr;
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  transform
};
