const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const score = parseInt(input[0]);

if (90 <= score && 100 >= score) {
  console.log("A");
} else if (80 <= score && 89 >= score) {
  console.log("B");
} else if (70 <= score && 79 >= score) {
  console.log("C");
} else if (60 <= score && 69 >= score) {
  console.log("D");
} else {
  console.log("F");
};