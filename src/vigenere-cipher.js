const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }

 encrypt(msg, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!(msg && key)) {
      throw new Error(`Incorrect arguments!`);
    }

    let codeStr = [];
    msg = msg.toUpperCase();
    key = key.toUpperCase();

    let cipher = key.repeat(Math.ceil(msg.length / key.length)).split('');
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 91) {
        codeStr.push(String.fromCharCode(65 + ((msg.charCodeAt(i) + cipher[0].charCodeAt(0)) % 26)));
        cipher.shift();
      } else {
        codeStr.push(msg.charAt(i));
      }
    }

    if (this.type === false) return codeStr.reverse().join('');
    return codeStr.join('');
  }

  
  decrypt(encMsg, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!(encMsg && key)) {
      throw new Error(`Incorrect arguments!`);
    }

    let invStr = [];
    encMsg = encMsg.toUpperCase();
    key = key.toUpperCase();

    let cipher = key.repeat(Math.ceil(encMsg.length / key.length)).split('');
    for (let i = 0; i < encMsg.length; i++) {
      if (encMsg.charCodeAt(i) >= 65 && encMsg.charCodeAt(i) <= 91) {
        invStr.push(String.fromCharCode(65 + ((encMsg.charCodeAt(i) + 26 - cipher[0].charCodeAt(0)) % 26)));
        cipher.shift();
      } else {
        invStr.push(encMsg.charAt(i));
      }
    }

    if (this.type === false) return invStr.reverse().join('');
    return invStr.join('');
  
  }
}


module.exports = {
  VigenereCipheringMachine
};
