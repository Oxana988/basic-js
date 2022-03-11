const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(members) || members.length < 0) return false;
  let name = '';
  members.forEach ((elem) => {
    if (elem !== String(elem)) {
      name = name;
    } else {
      name = name +`${elem.trim()[0]}`;
    }
  })
  let newname = name.toUpperCase().split('').sort().join('');
  return newname;
}

module.exports = {
  createDreamTeam
};
