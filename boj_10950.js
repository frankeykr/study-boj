// A + B - 3
// https://www.acmicpc.net/problem/10950

const fs = require('fs');
// split 메서드를 사용해서 줄(\n)을 기준으로 나누어준다
// ['5', '1 1', '2 3', '3 4', '9 8', '5 2']
const input = fs.readFileSync('example.txt').toString().split('\n');

// 첫번째 배열을 제외하기위해서 i=1로 지정하고
// 첫번째 배열은 루프문 테스트 개수로 사용한다
for (let i=1; i<=input[0]; i++) {
  // 나머지 배열들은 split(' ') 메서드로 잘라준다
  let numbers = input[i].split(' ');
  // A + B 출력값을 넣는다
  console.log(Number(numbers[0])+Number(numbers[1]));
}