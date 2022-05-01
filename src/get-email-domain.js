const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let from = 0;
  while (email.indexOf('@', from) !== -1) {
    from = email.indexOf('@', from) + 1;
    console.log(from);
  }
  return `${email.slice(from)}`;
}

module.exports = {
  getEmailDomain
};
