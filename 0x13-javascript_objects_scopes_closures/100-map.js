#!/usr/bin/node
const array = require('./100-data');
console.log(array.list);
const newList = array.list.map((x, y) => x * y);
console.log(newList);
