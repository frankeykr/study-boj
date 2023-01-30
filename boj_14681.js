// 사분면 고르기
// https://www.acmicpc.net/problem/14681

const fs = require('fs');

// 해당 문제에 런타임 에러가 발생해서 readFileSync에다가 0인자를 넣음
// 참고 https://gurtn.tistory.com/17
const [x, y] = fs.readFileSync(0).toString().split('\n').map(Number);

// x가 양수일 경우
if (x > 0) {
  // x가 양수이고 y가 양수일 경우 1 출력
  // x가 양수이고 y가 음수일 경우 4 출력
  console.log(y > 0 ? 1:4);
// x가 음수일 경우
} else {
  // x가 음수이고 y가 양수일 경우 2 출력
  // x가 음수이고 y가 음수일 경우 3 출력
  console.log(y > 0 ? 2:3);
};