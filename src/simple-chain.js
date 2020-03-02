const chainMaker = {
  res: [],

  getLength() {
    this.res.length;
    return this;
  },
  addLink(value) {
    if (this.res.length == 0) {
        this.res.push(`( ${value} )`);
        return this;
    } else {
        this.res.push(`~~( ${value} )`)
        return this;
    }

  },
  removeLink(position) {
    if (position - 1 < 0 || position > this.res.length || typeof position !== 'number' || position % 1 != 0) {
     this.res = [];
     throw new Error('Removing wrong position')
    } 
    if(position == 1){
      this.res.splice(position - 1, 1);
      let first = '';
      first = this.res[0].split('').splice(2).join('')
      this.res[0] = first;
      return this;
    } else {
        this.res.splice(position - 1, 1);
        return this;
     }  
  },
  reverseChain() {
    if(this.res.length == 0 || this.res.length == 1 ){
      return this;
    }
    this.res = this.res.reverse();
    let first = '';
    let last = [];
   
    first = this.res[0].split('').splice(2).join('')
    last.push(this.res[this.res.length - 1]);
    last.splice(0, 0, '~~');
    this.res[0] = first;
    this.res[this.res.length - 1] = last.join('');

    return this;
  },
  finishChain() {
    let result = this.res.join('');
    this.res = [];
    return result;
  }
};

module.exports = chainMaker;
