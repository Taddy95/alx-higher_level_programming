#!/usr/bin/node

const parentSquare = require('./5-square');
class Square extends parentSquare {
  charPrint (c) {
    let x = c;
    if (c === undefined) {
      x = 'X';
    }
    for (let i = 0; i < this.width; i++) {
      console.log(x.repeat(this.width));
    }
  }
}
module.exports = Square;
