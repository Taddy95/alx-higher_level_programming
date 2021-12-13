#!/usr/bin/node
const myVal = process.argv;
if (myVal[2] === undefined) {
  console.log('No argument');
} else {
  console.log(myVal[2]);
}
