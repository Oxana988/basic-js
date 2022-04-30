const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = [];
    let b = n.toString().split('');
  
    for (let i = 0; i < b.length; i++) {
      b.splice(i, 1);
      arr.push(+b.join(''));
      b = n.toString().split('');
  }
    
    return Math.max(...arr);
  }

  //throw new NotImplementedError('Not implemented');
  


module.exports = {
  deleteDigit
};
