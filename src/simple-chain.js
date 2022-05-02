const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  currentChain: [],

  getLength() {
	  return this.currentChain.length;
  },

  addLink(value) {
    this.currentChain.push(`( ${value} )`);
    return this; 
  },

  removeLink(position) {
    if (typeof(position) === 'number' && position <= this.currentChain.length && position > 0) {
      this.currentChain.splice(position - 1, 1);
    } else {
		  this.currentChain.length = 0;
      throw Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  
  finishChain() {
    let str = this.currentChain.join('~~');
    this.currentChain.length = 0;
    return str;
  },

};

module.exports = {
  chainMaker
};
