const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const count = Number(input[1])+1;
let answer = 0;

for (let i=2; i<=count; i++) {
  let numbers = input[i].split(' ');
  let result = (numbers[0] * numbers[1]);
  answer += result;
}

console.log(answer == input[0] ? 'Yes' : 'No');