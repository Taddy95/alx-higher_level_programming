#!/usr/bin/node
const myVal = process.argv;
if (myVal.length > 3) {
  console.log(`${myVal[2]} is ${myVal[3]}`);
} else if (myVal.length === 3) {
  console.log(`${myVal[2]} is ${typeof myVal[3]}`);
} else {
  console.log(`${myVal[2]} is ${typeof myVal[3]}`);
}
