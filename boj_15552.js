const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().split('\n');
const count = Number(input[0]);
let answer = '';

for (let i=1; i <= count; i++) {
  let numbers = input[i].split(' ');
  answer += Number(numbers[0])+Number(numbers[1])+'\n';
}

console.log(answer);