const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = '';
   let sum = 1;
   for (let i = 0; i < str.length; i++) {
     if (str[i] !== str[i + 1]) {
       result += sum + str[i];
       sum = 1;
     } else {
       sum += 1;
       str = str.slice(0, (i + 1)) + str.slice(i + 1);
     }
     
   }
   return result.replace(/1/g, '');
 }

module.exports = {
  encodeLine
};
