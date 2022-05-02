const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
/*const chainMaker = {
  currentChain: [],
 
  
  removeLink(position) {
    if (!Number.isInteger(position) || this.currentChain[position - 1] === undefined) {
    //if (position < 1 || position > this.getLength() || isNaN(position) || this.currentChain[position - 1] === undefined) {
      this.currentChain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    this.currentChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    let str = this.currentChain.join('~~');
    this.chain = [];
    return str;
  }
};*/
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
